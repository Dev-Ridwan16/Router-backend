const express = require("express")
const dbConnect = require("./Database/dbConnector")
const userRoutes = require("./routes/user_signup_route")
const loginRoutes = require("./routes/user_login_route")
const userDetailsRoutes = require("./routes/user_details_route")
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 5000

dbConnect()
app.use(express.json())
app.use(cors())
app.use("/sign-up", userRoutes)
app.use("/login", loginRoutes)
app.use("/user-details", userDetailsRoutes)

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
