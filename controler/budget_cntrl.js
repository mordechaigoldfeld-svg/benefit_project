import { getTransactionHandler, createTransaction, newBudget } from "../services/service_budget.js";




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



export async function getTransaction(req,res) {

    try{
        const {id} = req.params
        const transaction = await getTransactionHandler(id) 
        res.status(200).json(transaction)

    }catch(err){
        if(err.status){
            return res.status(err.status).json(err.message)
        }

        res.status(500).json("server error")
    }
    
}



export async function postTransaction(req,res) {

    try{
        const {id} = req.params
        const body = req.body
        const response = await createTransaction(id,body)
        res.status(201).json(response)

    }catch(err){
        if(err.status){
            return res.status(err.status).json(err.message)
        }
        res.status(500).json("server error")
    }
    
}