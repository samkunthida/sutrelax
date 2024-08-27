import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // Check the cached.
    if(cachedClient && cachedDb){
        // Load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true},)
    await client.connect();
    let db = client.db(MONGODB_DB);

    // Set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}