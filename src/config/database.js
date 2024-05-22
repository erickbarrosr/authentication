import mongoose from "mongoose";

const dbUri = process.env.DB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbUri);

    console.log("> Database successfully connected!");
    console.log();
  } catch (error) {
    console.error(error);
  }
}

export default connectToDatabase();
