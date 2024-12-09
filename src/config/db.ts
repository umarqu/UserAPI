import mongoose from "mongoose";

// load env variables using dotenv
const mongoURI = "mongodb://admin:password123@localhost:27017";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('MongoDB connection established successfully');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
}

export default connectDB;