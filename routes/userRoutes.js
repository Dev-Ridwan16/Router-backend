const express = require("express")
const userDetails = require("../Database/userModel")

const router = express.Router()

router.post("/", async (req, res) => {
  const { firstname, lastname, email, password } = req.body

  try {
    const existingUser = await userDetails.findOne({ email })

    if (existingUser) {
      return res.status(409).json({ message: "User with the same email exist" })
    }
    const newUser = new userDetails({ firstname, lastname, email, password })
    await newUser.save()

    res.status({ message: "Account created successfully", user: newUser })
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message })
  }
})

module.exports = router
