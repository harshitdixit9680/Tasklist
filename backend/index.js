const connectToMongo = require("./db")
const express = require('express')
var cors = require('cors')

const mongoose = require("mongoose");
const routes = require("./routes/TaskRoutes");
connectToMongo();



const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
// Avaible Routes
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/get',require('./routes/get'))

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Login SignUp Backend  listening on port ${port}`)
})

