import express from 'express';
import dotenv from 'dotenv'
import { dbConnect } from './config/config.js';
import cors from 'cors'
import route from './routes/routes.js';

dotenv.config()
const app = express()
app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));

app.use(express.json())

dbConnect()

app.use('/api/auth',route)
app.get("/",(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})
app.listen(process.env.PORT||4500,()=>{
    console.log("SERVER CONNECTED!")
})