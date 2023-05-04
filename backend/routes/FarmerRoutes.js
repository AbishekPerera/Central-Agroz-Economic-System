import express from "express";
import { registerFarmer } from '../controllers/AOControllers.js';

const router = express.Router();

router.post("/register", registerFarmer);

export default router;