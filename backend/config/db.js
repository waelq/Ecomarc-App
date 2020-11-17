import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    // change color in consloe
    console.log("MongoDB Connected".cyan.underline.bold);
  } catch (error) {
    console.error(error.message.red.underline.bold);
  }
};

export default connectDB;
