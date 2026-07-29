import express from "express"
import "dotenv/config"

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.get("/test",(req,res)=>{
    res.json("test server ok")
})


app.listen(PORT,()=>{
    console.log("server running...")
})