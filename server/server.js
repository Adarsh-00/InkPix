import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());

await connectDB();

app.use('/api/user', userRouter);
app.get('/', (req, res)=>{
    res.json({message: "hello world"});
});

app.listen(PORT, () => {
    console.log(`listening at localhost:${PORT}`);
})