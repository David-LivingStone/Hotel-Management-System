import express from "express";
import {createHotel, deleteHotel, getHotel, getAllHotels, 
    updateHotel, countByCity, countByType, getHotelRooms} from './../controllers/hotelController.js';
import { verifyUser, checkAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.post("/", checkAdmin, createHotel);
router.put("/:id", verifyUser, updateHotel);
router.delete("/:id", verifyUser, deleteHotel);
router.get("/find/:id", getHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)
router.get("/room/:id", getHotelRooms)

export default router;