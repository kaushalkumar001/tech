// Import necessary modules
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Database connection function
export const dbConnect = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables.");
        }

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ DB CONNECTION SUCCESSFUL");
    } catch (err) {
        console.error("❌ DB CONNECTION ERROR:", err.message);
        process.exit(1); // Exit process with failure
    }
};
