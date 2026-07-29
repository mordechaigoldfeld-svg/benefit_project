import { timeStamp } from "console";
import db from "../DB/mongodg_conect.js";
import { ObjectId } from "mongodb";

const benefitClient = db.collection("welfare_record")




export async function createRecord(newRecord) {
    try{
        const response  = await benefitClient.insertOne(newRecord)
        return response.insertedId

    }catch(err){
        console.log(err)
    }
    
}



export async function getById(soldierId) {
    try{
        const response = await benefitClient.findOne({soldierId:soldierId})
        return response

    }catch(err){
        console.log(err)
    }
    
}


export async function updatePeriod(soldierId,benefitType,newPeriod) {
    
    try{
        const response = await benefitClient.updateOne({soldierId:soldierId},{$push:{history:newPeriod},$set:{benefitType:benefitType}})
        return response
    }catch(err){
        console.log(err)
    }
    
}

// console.log(await updatePeriod("3","moty",{"ok":0}));


// const history =[{"primo":9}]
// console.log(history[history.length-1].endDate=Date());
