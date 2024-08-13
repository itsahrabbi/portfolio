import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ahmedrabbiffid:sCbcAQa%z@Vk6k4@cluster0.xkcg4bv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;