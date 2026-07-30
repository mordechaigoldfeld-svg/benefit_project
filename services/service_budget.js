import { log } from "node:console";
import { 
    createBudget,
    getBudgetQuery,
    getQuery,
    getTotalAmount,
    getTransactionById,
    insertTransaction  
                        } from "../DAL/dal_budget.js";

import { isValidBodyBudget , isValidBodyTransaction} from "../utils/budget_validator.js";
import { newError } from "../utils/createError.js";
import { client } from "../DB/supabase_connect.js";





export async function newBudget(filters) {
    const exists = await getQuery(filters)
    console.log(exists)
   
    if(!isValidBodyBudget(filters)){
        throw newError(400,"invalid body fields")
    }
    if(exists.length > 0){
        throw newError(409,"budget alrredy exists")
    }
    return await createBudget(filters)
    
}



export async function getTransactionHandler(budget_id){
    
    const transaction = await getTransactionById(budget_id)
    if(transaction.length === 0){
        throw newError(404,"budget id not found")
    }
    return transaction
}





export async function createTransaction(budget_id,body) {

    if(!isValidBodyTransaction(body)){
        throw newError(400,"invalid body fields")
    }

    const {amount,reason} = body 
    if(amount<0){
        throw newError(400,"cannot enter negative amount")
    }
    const totalAmount = await getTotalAmount(budget_id)
    if(amount> totalAmount.remainingAmount){
        throw newError(409,"insuficient amount")
    }
    const finalBody ={
        budget_id,
        amount,
        reason
    }
    return await insertTransaction(finalBody)
    
    
} 


// export function createQuery(tableName,filters){

//     let query = client.from(tableName).select(filters)
//     console.log(query);
    
// }


// console.log(createQuery("budget_allocation"));