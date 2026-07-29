import { MongoClient } from 'mongodb'
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI

const client = new MongoClient(MONGO_URI)


try{
    await client.connect()
    console.log("mongodb connect...");
    

}catch(err){
    console.log(err)
    process.exit(1)
}


const db = client.db("benefit")


export default db

