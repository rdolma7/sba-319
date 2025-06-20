import express from "express"
import mongoose from "mongoose"

import 'dotenv/config'

const app = express()
const port = process.env.PORT
mongoose.connect(process.env.MONGO_URI)
console.log("DB is connected")

app.get('/', (req,res)=>{
    res.json("HELLO WORLD!! HAPPY FRIDAY")
})

app.listen(port,()=>{
    console.log(`Server is running on port  ${port}`)
})
