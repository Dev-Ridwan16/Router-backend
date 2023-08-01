const mongoose = require("mongoose")
require("dotenv").config()

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("Connected to MongoDB Atlas successfully")
  } catch (err) {
    console.error("An error occurred while connecting to MongoDB Atlas", err)
  }
}

module.exports = dbConnect
