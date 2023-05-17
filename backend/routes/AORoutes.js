import express from 'express';
import { addFertilizer, addHarvest } from '../controllers/AOControllers.js';

const router = express.Router();

router.post('/addharvest', addHarvest);
router.post('/addfertilizer', addFertilizer);

export default router;
