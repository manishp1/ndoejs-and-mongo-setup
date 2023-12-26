const express  = require('express')
const app = express()
const connectDB = require('./config/db')
const RegisterRouter = require('./Routes/Register')

connectDB()
app.use(express.json())
app.use('/' , RegisterRouter)

app.listen(8081, ()=>{
    console.log(`server is running on port 8081`)
})