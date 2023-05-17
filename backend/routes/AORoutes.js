import express from 'express';
import { addFertilizer, addHarvest, getFarmers, getFertilizers, getHarvests } from '../controllers/AOControllers.js';

const router = express.Router();

//farmers
router.get('/getfarmers', getFarmers);

//harvest
router.post('/addharvest', addHarvest);
router.get('/getharvests', getHarvests);

//fertilizer
router.post('/addfertilizer', addFertilizer);
router.get('/getfertilizers', getFertilizers);

export default router;
