const mongoose = require("mongoose")

const loginDetailsSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
})

const UserLogin = mongoose.model("UserLogin", loginDetailsSchema)

module.exports = UserLogin
