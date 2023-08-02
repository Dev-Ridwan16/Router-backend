const express = require("express")
const UserLogin = require("../Model/user_login_model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/", async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userDetails.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
      expiresIn: "1h",
    })
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    res.status(200).json({ message: "Successfully Login", token })
  } catch (error) {
    res.json({ message: "An error occured", error: error.message })
  }
})

module.exports = router