import { get } from "node:http";
import { client } from "../DB/supabase_connect.js";
import { newError } from "../utils/createError.js";
import { log } from "node:console";









export async function createBudget(budget) {
    
    const {data,error} = await client.from("budget_allocation").insert(budget).select().single()
    if(error){
        throw newError(400,error.message)
    }
    return data
}

export async function getQuery(body) {
    
    const {unit,month,benefit_type,allocated_amount} = body
    
    const {data,error} = await client.from("budget_allocation").select().eq("unit",unit).eq("month",month).eq("benefit_type",benefit_type).eq("allocated_amount",allocated_amount)
    if(error){
        throw newError(400,error.message)
    }
    return data
    
}



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

// console.log(await client.from("budget_allocation").select("allocated_amount").eq("id",1));







// console.log(await getBudgetQuery(client.from('budget_allocation').select().eq('id',1)));
// console.log(await client.from("spend_transaction").select("amount").eq("budget_id",4))











export async function getTotalAmount(budget_id){
    ;
    
    const allocatedAmount = await getBudgetQuery(client.from('budget_allocation').select('allocated_amount').eq('id',budget_id))
    const totalAmount = await getBudgetQuery(client.from("spend_transaction").select("amount").eq("budget_id",budget_id))
    const spentAmmount = totalAmount.reduce((acc,ind)=>{
        return acc +ind.amount
    },0)
    console.log(allocatedAmount)
    if(allocatedAmount.length === 0){
        throw newError(400,"error invalid id")
    }
    const remainingAmount = allocatedAmount[0].allocated_amount - spentAmmount

    return{

    
    "allocatedAmount":allocatedAmount[0].allocated_amount,
    allSpent:totalAmount,
    "spentAmmount":spentAmmount,
    "remainingAmount":remainingAmount
    
}
}


export async function getBudgetQuery(fillters) {
    let query = client.from("budget_allocation").select()
    if(!fillters){
        return await query
    }
    const {unit,month,benefit_type} = fillters

    
    if(unit){
        query=query.eq("unit",unit)
    }
    if(month){
        query=query.eq("month",month)
    }
    if(benefit_type){
        
        query=query.eq("benefit_type",benefit_type)
    }
    
    
    return await query
    
}

// const a = await getBudgetQuery({month:"jun",unit:"9900",benefit_type:"giftCard"});
// console.log(a.data);












