const mongoose = require("mongoose")

const loginDetailsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// const UserLogin = mongoose.model("UserLogin", loginDetailsSchema)

// module.exports = UserLogin
module.exports = mongoose.model("Login", loginDetailsSchema)
