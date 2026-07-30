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
import { validBenefitType } from "../utils/benefitValidator.js";





export async function newBudget(filters) {
    const exists = await getQuery(filters)
   console.log(filters.benefit_type);
   
    if(!isValidBodyBudget(filters)){
        throw newError(400,"invalid body fields")
    }
    if(!await validBenefitType(filters.benefit_type)){
        throw newError(400,"invalid benefit type")
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

export async function getTotalAll(filters) {

    const data = await getBudgetQuery(filters)
    // console.log(data.data)
    const spentAmmount = data.data.reduce((acc,ind)=>{
        return acc +ind.allocated_amount
    },0)
    console.log(data.data)
    console.log(spentAmmount);
    return {
        unit:data.data[0].unit,
        benefit_type:data.data[0].benefit_type,
        month:data.data[0].month,
        allocated_amount:data.data[0].allocated_amount,
        spentAmmount:spentAmmount,
        remainingAmount:data.data[0].allocated_amount - spentAmmount,
        data:data.data
    }
    
    
}
console.log(await getTotalAll({unit:"9900"}))