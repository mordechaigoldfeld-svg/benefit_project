import { createRecord, getById } from "../DAL/dal.benefit.js";
import { isValidBody, isValidBodyDetails, isValidType, validBenefitType } from "../utils/benefitValidator.js";
import { newError } from "../utils/createError.js";



export async function getfinalBody(body,id) {

    if(await getById(id) !== null){
        throw newError(409,"soldier alrredy are a open record")
    }
    if(!isValidBody(body)){
        throw newError(400,"invalid body fields")
    }
    const {unit,benefitType,details,decisionReason,budgetAprovved} = body
    if(!isValidType(unit,"string")){
        throw newError(400,"unit invalid type")
    } 
    if(!isValidType(benefitType,"string")){
        throw newError(400,"benefitType invalid type")
    } 
    if(!isValidType(decisionReason,"string")){
        throw newError(400,"decisionReason invalid type")
    } 
    if(!isValidType(details,"object")){
        throw newError(400,"details invalid type")
    } 
    if(!isValidType(budgetAprovved,"boolean")){
        throw newError(400,"budgetAprovved invalid type")
    }
    if(!await validBenefitType(benefitType)){
        throw newError(400,"invalid benefit type")
    }
    if(!await isValidBodyDetails(body)){
        console.log(body)
        throw newError(400,"invalid body details fields")
    }
    const finalBody ={
        soldierId:id,
        unit:unit,
        currentBenefitType:benefitType,
        history:[{
            startDate:Date(),
            endDate:null,
            decisionReason,
            budgetAprovved,
            benefitType,
            details
        }]
    }
    return await createRecord(finalBody)
    
   
    
}


//  const test = {unit:"8200",benefitType:'giftCard',details:{cardProvider:1,monthlyValue:2,validMerchants:3},decisionReason:"test",budgetAprovved:true}
//  console.log(await getfinalBody(test,2));
 

export async function getSoldierById(soldierId) {
    const soldier = await getById(soldierId)
    if( soldier === null){
        throw newError(404,"id not found")
    }
    return soldier
}


// console.log(await getSoldierById(82));
