import express from 'express';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000; 

connectDB();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
