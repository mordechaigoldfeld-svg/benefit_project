import { createBudget, getQuery, getTransactionById } from "../DAL/dal_budget.js";
import { isValidBodyBudget } from "../utils/budget_validator.js";
import { newError } from "../utils/createError.js";







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