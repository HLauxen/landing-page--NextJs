import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://henriqueseefeld:BdrfGntgs07JDuEk@cluster0.1jnzxnj.mongodb.net/?retryWrites=true&w=majority";


export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});