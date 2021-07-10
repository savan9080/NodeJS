import { MongoClient,ObjectID } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props){
    console.log(props);
    return <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description}/>
    // return <MeetupDetail image="11" title="11" address="11" description="11"/>

}

export async function getStaticPaths(){
    const client= await MongoClient.connect("mongodb+srv://savan:savan@cluster0.ooba3.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db=client.db();

    const meetupsCollection = db.collection('Meetups');
    
    const meetups=await meetupsCollection.find({},{_id:1}).toArray();
    
    client.close();

    return {
        fallback:'blocking',
        paths:meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}})),
       
    }
} 
export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    const client= await MongoClient.connect("mongodb+srv://savan:savan@cluster0.ooba3.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db=client.db();

    const meetupsCollection = db.collection('Meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id:ObjectID( meetupId)});
    client.close();
    
    return {
        props:{
            meetupData:{
                id:selectedMeetup._id.toString(),
                title:selectedMeetup.title,
                address:selectedMeetup.address,
                description:selectedMeetup.description,
                image:selectedMeetup.image,
                
            }
        }
    }
}
export default MeetupDetails;