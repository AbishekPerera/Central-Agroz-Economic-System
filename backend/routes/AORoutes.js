import express from 'express';
import {
  addFertilizer,
  addHarvest,
  deleteFertilizer,
  deleteHarvest,
  getFarmers,
  getFertilizerById,
  getFertilizers,
  getHarvestById,
  getHarvests,
  updateFertilizer,
  updateHarvest,
} from '../controllers/AOControllers.js';

const router = express.Router();

//farmers
router.get('/getfarmers', getFarmers);

//harvest
router.post('/addharvest', addHarvest);
router.get('/getharvests', getHarvests);
router.get('/getharvests/:id', getHarvestById);
router.put('/updateharvest/:id', updateHarvest);
router.delete('/deleteharvest/:id', deleteHarvest);

//fertilizer
router.post('/addfertilizer', addFertilizer);
router.get('/getfertilizers', getFertilizers);
router.get('/getfertilizers/:id', getFertilizerById);
router.put('/updatefertilizer/:id', updateFertilizer);
router.delete('/deletefertilizer/:id', deleteFertilizer);

export default router;
