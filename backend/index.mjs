import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import router from './Routes/RoutesItem.mjs';
import cors from 'cors';
dotenv.config();
let PORT = process.env.PORT || 8080;
let app = express();
connectDB();
app.use(express.json());
  app.use(cors({
    origin: 'https://deploy-mern-app-3-ui.vercel.app' // Replace with your frontend's URL
  }));
app.use("/api/",router)

app.listen(PORT,()=>{
  console.log('http://localhost:8080');
});