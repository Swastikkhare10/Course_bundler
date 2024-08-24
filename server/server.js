import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from 'cloudinary';

connectDB();

cloudinary.v2

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port: ${process.env.PORT}`);
})