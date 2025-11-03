import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.Port || 3000;

// Database Connection


await connectDB();

// ✅ Allow frontend (Vercel) to access backend
app.use(cors({
  origin: ["https://your-vercel-app-name.vercel.app"], // replace this with your actual Vercel frontend URL
  credentials: true,
}));





app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> res.send("Server is live..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});