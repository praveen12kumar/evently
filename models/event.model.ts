import {Schema, model, models} from "mongoose";


import { Document } from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string | undefined;
    createdAt: string;
    imageUrl: string;
    startDateTime: string;
    endDateTime: string;
    price: number;
    isFree: boolean;
    url: string;
    category: { _id: string; name: string };
    organiser: { _id: string; firstname: string; lastname: string };
}



const eventSchema:Schema<IEvent> = new Schema({
    title:{
        type:String,
        required:[true, "title is required"]
    },
    description:{
        type:String,
        required:[true, "description is required"]
    },
    location:{
        type:String,
        required:[true, "location is required"]
    },
    createdAt:{
        type:String,
        required:[true, "createdAt is required"]
    },
    imageUrl:{
        type:String,
        required:[true, "imageUrl is required"]
    },
    startDateTime:{
        type:String,
        required:[true, "startDateTime is required"]
    },
    endDateTime:{
        type:String,
        required:[true, "endDateTime is required"]
    },
    price:{
        type:Number,
        required:[true, "price is required"]
    },
    isFree:{
        type:Boolean,
        required:[true, "isFree is required"]
    },
    url:{
        type:String,
        required:[true, "url is required"]
    },
    category:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    organiser:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
})


const Event = models.Event || model("Event", eventSchema);

export default Event;