import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const URL = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const dbURI = URL; // Get MongoDB URI from environment variables
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;