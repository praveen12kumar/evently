import {Schema, model, models} from "mongoose";


import { Document } from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
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
    },
    location:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    imageUrl:{
        type:String,
        required:[true, "imageUrl is required"]
    },
    startDateTime:{
        type:Date,
        default:Date.now,
    },
    endDateTime:{
        type:Date,
        default:Date.now,
    },
    price:{
        type:String,
    },
    isFree:{
        type:Boolean,
        default:false,
    },
    url:{
        type:String,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    organiser:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})


const Event = models.Event || model("Event", eventSchema);

export default Event;