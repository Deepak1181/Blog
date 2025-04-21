

 const express = require('express')
 const mongoose=require("mongoose")
 const cors = require('cors')
const cookieParser = require('cookie-parser')
 const dotenv = require('dotenv')


 const  app = express()
 mongoose.connect("mongodb+srv://dkp041297:dkp041297@cluster0.bommwto.mongodb.net/").then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err))

 const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization',"cache-control","Expires","Pragma"],
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}   )