const mongoose = require("mongoose")

const userDetailsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    unique: false,
  },
  lastname: {
    type: String,
    require: true,
    unique: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: false,
  },
})

// module.exports = mongoose.model.User || mongoose.model("User", userDetails)
module.exports = mongoose.model("User", userDetailsSchema)
