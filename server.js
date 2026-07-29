import express from "express"
import "dotenv/config"
import benefitRouter from "./routes/benefit_router.js"
import budgetRouter from "./routes/budget_router.js"

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/soldiers",benefitRouter)

app.use("/budget",budgetRouter)

app.get("/test",(req,res)=>{
    res.json("test server ok")
})


app.listen(PORT,()=>{
    console.log("server running...")
})