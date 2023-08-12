import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "jobs",
    });
    console.log("MongoDb connected");
  } catch (err) {
    console.log(err);
  }
};
