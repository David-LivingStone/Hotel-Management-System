import express from "express";
import {createRoom, deleteRoom, getRoom, getAllRooms, updateRoom, updateRoomAvailability} from './../controllers/roomController.js';
import { verifyUser, checkAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", checkAdmin, createRoom);
//UPDATE
router.put("/:id", checkAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid", checkAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GETALL
router.get("/", getAllRooms);

export default router;