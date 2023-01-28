import express from "express";
import {deleteUser, getUser, getAllUsers, updateUser} from './../controllers/userController.js';
import { verifyUser, checkAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GETALL
router.get("/", checkAdmin, getAllUsers);

export default router;