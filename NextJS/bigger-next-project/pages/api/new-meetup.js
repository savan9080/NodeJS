import {MongoClient} from 'mongodb'
async function handler(req,res){
    
    if(req.method==='POST'){
        const data=req.body;

        const client= await MongoClient.connect("mongodb+srv://savan:savan@cluster0.ooba3.mongodb.net/Meetups?retryWrites=true&w=majority")
        const db=client.db();

        const meetupsCollection = db.collection('Meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message:'Meetup inserted'});

      
    }
}
export default handler;