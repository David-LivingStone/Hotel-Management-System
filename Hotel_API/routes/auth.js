import express from "express";
const router = express.Router();
import {register, login} from '../controllers/authController.js';


router.get("/", (req, res) => {
    res.send("Hello, this is Auth")
})
router.post("/register", register)
router.post("/login", login)

export default router