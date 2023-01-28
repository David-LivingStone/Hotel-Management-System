import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async ( )=> {
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to mongoDB")
    }
    catch(error) {
        throw error;
    }
}; 

mongoose.connection.on("disconnected",() => {
    console.log('mongoDB Disconnected')
})
mongoose.connection.on("Conected",() => {
    console.log('mongoDB Connected')
})


app.use (cors())
app.use (cookieParser())
app.use(express.json())

// Routes Middleware
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/hotels", hotelsRoute)
app.use("/api/v1/rooms", roomsRoute)

app.listen(8800, () => {
    connect()
    console.log("Connected to Backend")
});