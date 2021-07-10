import { MongoClient } from 'mongodb'

import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS=[{
    id:'m1',
    title:'First Meetup',
    address:'Some Address 1',
    image:'https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg',
    description:'Some Desc 1'
},{
    id:'m2',
    title:'Second Meetup',
    address:'Some Address 2',
    image:'https://image.shutterstock.com/image-photo/beautiful-exterior-newly-built-luxury-260nw-529108441.jpg',
    description:'Some Desc 2'
}]
function HomePage(props){
    
    return <MeetupList meetups={props.meetups}/>

}
// export async function getServerSideProps(context){

//     const req=context.req;
//     const res=context.res;

//     return {
//         meetups:DUMMY_MEETUPS
//     }
// }

export async function getStaticProps(){

    const client= await MongoClient.connect("mongodb+srv://savan:savan@cluster0.ooba3.mongodb.net/Meetups?retryWrites=true&w=majority");
    const db=client.db();

    const meetupsCollection = db.collection('Meetups');
    
    const meetups=await meetupsCollection.find().toArray();
    console.log(meetups);
    client.close();
    return {
        props:
        {
            meetups:
            meetups.map((meetup)=>({title:meetup.title,
                image:meetup.image,
                description:meetup.description,
                address:meetup.address,
                id:meetup._id.toString()}))
        }
        ,
        revalidate:1
    }
}
export default HomePage;