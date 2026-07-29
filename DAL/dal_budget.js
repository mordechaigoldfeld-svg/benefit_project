import { client } from "../DB/supabase_connect.js";
import { newError } from "../utils/createError.js";




export async function getAll() {
    
    return await client.from("spend_transaction").select()

}





export async function createBudget(budget) {
    
    const {data,error} = await client.from("budget_allocation").insert(budget).select().single()
    if(error){
        return error
    }
    return data
}

// console.log(await createBudget({unit:"8200",benefit_type:"test",month:"may",allocated_amount:345,}));



export async function getQuery(body) {
    
    const {unit,month,benefit_type} = body
    
    const {data,error} = await client.from("budget_allocation").select().eq("unit",unit).eq("month",month).eq("benefit_type",benefit_type)
    if(error){
        return error
    }
    return data
    
}
// console.log(await getQuery({unit:"8200",month:"may",benefit_type:"test"}))


// ==========================
// Router
// import { getAll } from '../../../js_exercises/week15/mongodb/DAL/usersdal.js'
// import { get } from 'node:http'

// Router.get("/",async(req,res)=>{
//     const {data,error} = await getAll()
//     if(error){
//         console.log(error);
// 	return res.status(500).json("server error")
        
//     }
// 	return res.json(data)
// }) 