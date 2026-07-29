import { timeStamp } from "console";
import db from "../DB/mongodg_conect.js";

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


// console.log(await getById(2));
