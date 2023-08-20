const express = require("express")
const router = express.Router()
const userDetails = require("../Model/user_signup_model")

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId
    const user = await userDetails.findById(userId)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const { _id, firstname, lastname, email } = user

    res.json({
      _id,
      firstname,
      lastname,
      email,
    })
  } catch (error) {
    console.log("Error: ", error)
    res.status(500).json({ message: "Failed to fetch user details" })
  }
})

module.exports = router
