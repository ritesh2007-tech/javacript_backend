import dotenv from "dotenv";
import { connectToMongoDB } from "./src/db/index.js";

dotenv.config({path:"./env"});

connectToMongoDB();