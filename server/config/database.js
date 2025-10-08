import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // mongoose.connection.on('connected', ()=>console.log('connected DB'));
    await mongoose.connect(`${process.env.MONGODB_URI}/InkPix`);
    console.log("MongoDB Connected...");

  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
