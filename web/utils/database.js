import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mohan19:GZLKiThQoM48Kmnr@cluster0.va5mzwh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "jobs",
      }
    );
    console.log("MongoDb connected");
  } catch (err) {
    console.log(err);
  }
};
