import { newBudget } from "../services/service_budget.js";




export async function insertBudget(req,res) {
        try{
        const body = req.body
        const budget = await newBudget(body)
        res.status(201).json(budget) 

        }catch(err){
            if(err.status){
        return res.status(err.status).json(err.message)
        }
        res.status(500).json("server error")
        }
    
}