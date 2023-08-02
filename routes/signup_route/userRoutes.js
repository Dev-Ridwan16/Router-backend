const express = require("express")
const userDetails = require("../Database/userModel")
const bcrypt = require("bcrypt")

const router = express.Router()

router.post("/", async (req, res) => {
  const { firstname, lastname, email, password } = req.body

  try {
    const existingUser = await userDetails.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ message: "User with the same email exist" })
    }
    const salt = await bcrypt.genSalt(Number(process.env.SALT))
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = new userDetails({ firstname, lastname, email, password })
    await newUser({ ...req.body, password: hashPassword }).save()

    res
      .status(201)
      .send({ message: "Account created successfully", user: newUser })
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message })
  }
})

module.exports = router
