import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from '../utils/constants';

const connectDb = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB Connected: ",connectionInstance);
    } catch (error) {
        console.log("Connection Failed: ",error);
        process.exit(1);
        
    }
}