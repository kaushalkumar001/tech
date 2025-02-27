// const { useAsyncValue } = require('react-router-dom');
import User from '../model/model.js'
import bcrypt from 'bcrypt'

export const login=async(req,res)=>{
    try{
      //get data
      const {email,password}=req.body;
      //validate data
      if(!email || !password){
        return res.status(403).json({
          success:false,
          message:"All fields are required,please try again"
        })
      }
  
      //check if user exists or not
      const user=await User.findOne({email});
      if(!user){
        return res.status(401).json({
          success:false,
          message:"User does not exist, Sign up first please"
        })
      }
  
      //password Check
      if(await bcrypt.compare(password,user.password)){
  
  
         //create cookie and send response
        
        res.status(200).json({
          success:true,
          user,
          message:"Logged in successfully"
        })
      }
  
      else{
        return res.status(401).json({
          success:false,
          message:"Password is incorrect"
        })
      }
     
    } 
    catch(err){
      console.log(err);
      return res.status(500).json({
        success:false,
        message:"Login Failure, please try again"
      })
    }

  }

export const signup=async(req, res)=>{

  const {name,email,password} = req.body;
  const user = await User.findOne({email});
  if(user){
    return res.status().json({
      success:false,
      message: "user already exist"
    })
  }
  const hashedPassword = await bcrypt.hash(password,10)
  let newUser = await User.create({
    name,
    email,
    password:hashedPassword,
  })
  await newUser.save()

  return res.status(200).json({
    success:true,
    message: "user added successfully"
  })

}
  