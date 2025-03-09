import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Ensuring name is required
    email: { type: String, required: true, unique: true }, // Ensuring uniqueness for email
    password: { type: String, required: true },
    usertype: {
        type: String,
        default: "user",
        enum: ["user", "warden"]
    },
    phone: {
        type: String,
        unique: true,
        sparse: true // Ensures uniqueness only when `phone` is provided
    }
});

// The model name should be "User" instead of "userSchema"
const User = mongoose.model("User", userSchema);

export default User;
