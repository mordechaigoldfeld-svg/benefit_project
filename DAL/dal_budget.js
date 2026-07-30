import { client } from "../DB/supabase_connect.js";
import { newError } from "../utils/createError.js";









export async function createBudget(budget) {
    
    const {data,error} = await client.from("budget_allocation").insert(budget).select().single()
    if(error){
        throw newError(400,error.message)
    }
    return data
}

// console.log(await createBudget({unit:"8200",benefit_type:"test",month:"may",allocated_amount:345,}));



export async function getQuery(body) {
    
    const {unit,month,benefit_type,allocated_amount} = body
    
    const {data,error} = await client.from("budget_allocation").select().eq("unit",unit).eq("month",month).eq("benefit_type",benefit_type).eq("allocated_amount",allocated_amount)
    if(error){
        throw newError(400,error.message)
    }
    return data
    
}
// console.log(await getQuery({unit:"8200",month:"may",benefit_type:"test"}))



export async function insertTransaction(body) {

    const {data,error} = await client.from("spend_transaction").insert(body).select().single()
    if(error){
        throw newError(400,error.message)
    }
    return data
    
}




export async function getTransactionById(budget_id) {

        const {data,error}  = await client.from("spend_transaction").select().eq("budget_id",budget_id)
        if(error){
            throw newError(400,error.message)
        }
        return data
    
    
}

// console.log(await insertTransaction({budget_id:4,amount:244,reason:"test"}));
// console.log(await getTransactionById(4));



export async function getBudgetQuery(filters) {

    const {data,error} = await client.from("")

    
}
