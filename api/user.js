import { connectToDatabase } from "../lib/mongodb";


export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            let { db } = await connectToDatabase();
            let results = await db.collection("user").find({}).toArray();
            return res.status(200).json({ status: { code: 200, message: 'OK'}})
        }   catch (error) {
            return res.json({
                message: new Error(error).message,
                success: false,
            });
        }
    }
}