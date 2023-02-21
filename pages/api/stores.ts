import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("storeDB");

    const stores = await db.collection("store").find({}).toArray();

    res.json(stores);
  } catch (e) {
    console.error(e);
  }
};
