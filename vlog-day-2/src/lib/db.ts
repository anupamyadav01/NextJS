import { connect } from "mongoose";

const mongodburl = process.env.MONGODB_URL;
// console.log(mongodburl);

if(!mongodburl){
    throw Error("MongoDB URL not found");
}

let cached = global.mongoose;
// console.log("cached", cached);

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

const connectDB = async() => {
    if(cached.conn){
        // console.log("DB connected from cached...")
        return cached.conn
    }
    console.log("we are inside connectDB and outside cached.conn");
    
    if(!cached.promise){
        // console.log("inside connecting db")
        cached.promise=  connect(mongodburl).then((c) => c.connection)
        
        // console.log("after connecting db", cached.promise)

    }
    try {
       cached.conn =  await cached.promise
    //    console.log(cached.conn);
       
    //    console.log("Db connected through promise")
    } catch (error) {
        cached.promise=null;
        throw error;
    }
    return cached.conn;
}

export default connectDB;