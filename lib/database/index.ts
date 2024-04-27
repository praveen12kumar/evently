import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'evently',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}










// import { DB_NAME } from "@/constants/index";
// import mongoose  from "mongoose";

// type ConnectioObject = {
//     isConnected?:number
// }

// const connection:ConnectioObject = {}

// async function dbConnect():Promise<void>{
//     console.log("DB function called");
    
//     if(connection.isConnected){
//         console.log("Already connected to database");
//         return;
//     }

//     try {
//        const db =  await mongoose.connect(process.env.MONGO_URI || "",{
//         dbName:DB_NAME,
//         bufferCommands:false,
//        })

//        connection.isConnected = db.connections[0].readyState

//        console.log("DB Connected Successfully")
//     } catch (error) {
//         console.log("Database connection failed", error)
//         process.exit(1)
//     }
// }

//export default dbConnect;
