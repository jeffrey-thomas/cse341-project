import { dbInit, getDbClient } from "../data/database.js";
import { ObjectId} from 'mongodb'

await dbInit();
const mongo = getDbClient();

export const contactsController = {

    getAll: async (req, res) =>{
        const result = await mongo.db('cse341').collection('contacts').find();
        result.toArray().then((contacts)=>{
            res.setHeader('Content-Type','application/json');
            res.status(200).json(contacts);
        });
    },

    getSingle: async (req, res)=>{
        const contactId = new ObjectId(req.params.id)
        const result = await mongo.db('cse341').collection('contacts').find({_id:contactId});
        result.toArray().then((contacts)=>{
            res.setHeader('Content-Type','application/json');
            res.status(200).json(contacts[0]);
        });
    }
}