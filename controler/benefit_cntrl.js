import { getfinalBody } from "../services/service_benefit.js";






export async function insertRecord(req,res) {
    try{
        const {soldierId} = req.params
        const body = req.body
        const response = await getfinalBody(body,soldierId)
        res.status(201).json(response)

    }catch(err){
        if(err.status){
          return  res.status(err.status).json(err.message)
        }
        res.status(500).json("server error")
    }
    
}