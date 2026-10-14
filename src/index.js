import dotenv from "dotenv";
dotenv.config({path:"/.env"});

import connectDb from "./db";

connectDb();