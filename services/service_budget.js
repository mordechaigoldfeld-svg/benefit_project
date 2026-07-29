import { createBudget, getQuery } from "../DAL/dal_budget.js";
import { newError } from "../utils/createError.js";







export async function newBudget(filters) {
    const exists = await getQuery(filters)
    if(exists.length === 0){
        throw newError(409,"budget alrredy exists")
    }
    return await createBudget(filters)
    
}