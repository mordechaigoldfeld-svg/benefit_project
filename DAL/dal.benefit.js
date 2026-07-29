import db from "../DB/mongodg_conect.js";

const benefitClient = db.collection("welfare_record")


// const res =await benefit.insertOne({"moty":"test"})
// console.log(res);

export async function createRecord(newRecord) {
    try{
        const response  = await benefitClient.insertOne(newRecord)
        return response.insertedId

    }catch(err){
        console.log(err)
    }
    
}


