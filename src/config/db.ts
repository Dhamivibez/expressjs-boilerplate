import mongoose from "mongoose";

const connectDB = async (MONGODB_URI: string): Promise<void> => {
  await mongoose.connect(MONGODB_URI, {
    dbName: process.env.DB_NAME,
  });
  console.log("Database Connected");
};

export default connectDB;
