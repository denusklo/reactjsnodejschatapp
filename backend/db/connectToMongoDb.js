import mongoose from "mongoose";

const connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('connected to MongoDb');
    } catch (error) {
        console.log("Error while connecting MongoDb", error.message);
    }

};

export default connection;