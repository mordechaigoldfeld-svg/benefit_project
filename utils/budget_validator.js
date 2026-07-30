






export function isValidBodyBudget(body){
    try{
         const {benefitType,unit,month,allocated_amount} = body
        if(!benefitType || !unit || !month || !allocated_amount){
            return false
        }
        return true

    }catch(err){
        console.log(err)
    }
}




// export function isValidBodyTransaction(body){
//     try{
//          const {benefitType,unit,month,allocated_amount} = body
//         if(!benefitType || !unit || !month || !allocated_amount){
//             return false
//         }
//         return true

//     }catch(err){
//         console.log(err)
//     }
// }

