import { NextRequest, NextResponse } from "next/server";
import {client} from '../../dbConnection'


export  async function POST(req: NextRequest, res: NextResponse):Promise<any> {
    const data = await req.json();
    const {name, email, id} = data;
    try {
        const db = client.db("clone");
        const user = await client.db("clone").collection("usuarios").insertOne({
            data: {
                email,
                name,
                id
            }
        })

        /* await client.db("clone").collection("usuarios").insertOne({email: 'henrique@gmail.com'}) */
        
        /* const users = await db
            .collection("usuarios")
            .find()
            .toArray(); */

        return NextResponse.json(user);
    } catch (e) {
        console.error(e);
    }
}