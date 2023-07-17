import { NextRequest, NextResponse } from "next/server";
import {client} from '../dbConnection'


export  async function GET(req: NextRequest, res: NextResponse):Promise<any> {
    try {
        const db = client.db("clone");
        
        /* await client.db("clone").collection("usuarios").insertOne({email: 'henrique@gmail.com'}) */
        
        const users = await db
            .collection("usuarios")
            .find()
            .toArray();

        return NextResponse.json(users);
    } catch (e) {
        console.error(e);
    }
}