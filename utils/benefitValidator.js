export function isValidBody(body){
    try{
        const {unit,benefitType,details,decisionReason,budgetAprovved} = body
        if(!unit || !benefitType || !details || !decisionReason || !budgetAprovved){
            return false
        }
        return true


    }catch(err){
        console.log(err)
    }
}

// console.log(isValidBody({unit:"8200",benefitType:'test',details:{},decisionReason:true,budgetAprovved:true}));


export async function isValidBodyDetails(body){
    try{
        const {benefitType,details}  = body
        
        if(benefitType === "giftCard"){
            const {cardProvider,monthlyValue,validMerchants} =details
            if(!cardProvider || !monthlyValue || !validMerchants){
            return false
        }
        return true
        }
         if(benefitType === "diningHall"){
            const {baseId,kosherLevel,mealTimes} = details
            if(!baseId || !kosherLevel || !mealTimes){
            return false
        }
        return true
        }

    }catch(err){
        console.log(err)
    }
}


// const test = {unit:"8200",benefitType:'giftCard',details:{cardProvider:1,monthlyValue:2,validMerchants:3},decisionReason:"test",budgetAprovved:true}

// if(await isValidBodyDetails(test)){
//     console.log("ok");
// }




export async function validBenefitType(benefitType) {
    try{
        
        const valid = ["giftCard","diningHall"]
        if(valid.includes(benefitType)){
            return true
        }
        return false

    }catch(err){
        console.log(err)
    }
    
}





export function isValidType(key,type) {
    try{
        if(typeof(key)===type){
            return true         
        }
        return false

    }catch(err){
        console.log(err)
    }   
}




export function isValidBodyPeriod(body){
    try{
         const {benefitType,details,decisionReason,budgetAprovved} = body
        if(!benefitType || !details || !decisionReason || !budgetAprovved){
            return false
        }
        return true

    }catch(err){
        console.log(err)
    }
}
