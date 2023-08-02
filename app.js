const express = require("express")
const dbConnect = require("./Database/dbConnector")
const userRoutes = require("./routes/userRoutes")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000

dbConnect()
app.use(express.json())
app.use(cors())
app.use("/user-details", userRoutes)

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
