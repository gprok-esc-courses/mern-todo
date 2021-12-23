const express = require("express") 
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on: ${PORT}`))

mongoose.connect(process.env.MONGO_CONN, () => console.log("DB connected"))

app.use("/users", require("./controllers/users"))

