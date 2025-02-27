//require statements
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();



export const dbConnect=async()=>{
  await mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("DB CONNECTION SUCCESSFUL")})
  .catch((err)=>{
    console.log("DB CONNECTION ISSUES");
    console.error(err);
    process.exit(1);
  })
}

// module.exports = dbConnect