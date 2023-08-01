const mongoose = require("mongoose")

const userDetails = new mongoose.Schema({
  firstname: {
    type: String,
    require: "Please provide your first name",
    unique: false,
  },
  lastname: {
    type: String,
    require: "Please provide your last name",
    unique: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: "Password should contain atleast 8 character",
    unique: false,
  },
})

module.exports = mongoose.model.User || mongoose.model("User", userDetails)
