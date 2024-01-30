import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

dotenv.config()

const uri = process.env.DB_URI || 'mongodb://localhost:27017'
const db = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
db.connect()

export async function insertTIL(data: any){
    await db.db('arikardasis-dev').collection('things-i-like').insertOne(data)
}

