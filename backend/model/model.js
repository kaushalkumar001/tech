import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    usertype: {
        type: String,
        default: "user",
        enum: ["user", "warden"]
    },
    phone: {
        type: String,
        unique: true,
        sparse: true // This ensures uniqueness only when `phone` is provided
    }
});

const User = mongoose.model("userSchema",userSchema)
export default User