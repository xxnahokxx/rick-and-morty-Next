import mongoose from "mongoose";
const { MONGODB_URI } = process.env

const connectDB = async () => {
    try {

        if (mongoose.connection.readyState === 0 && MONGODB_URI) {
            await mongoose.connect(MONGODB_URI);
        }

    } catch (error) {
        console.log(error);

    }
}

export default connectDB;
