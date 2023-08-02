const mongoose = require("mongoose")

const loginDetailsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Fix: Change 'require' to 'required'
  },
  password: {
    type: String,
    required: true,
  },
})

const UserLogin = mongoose.model("UserLogin", loginDetailsSchema)

module.exports = UserLogin
