import { Farmer } from '../models/Farmer.js';
import { Harvest } from '../models/Harvest.js';
import { Fertilizer } from '../models/Fertilizer.js';

// FARMER
export const registerFarmer = async (req, res) => {
  const newFarmer = new Farmer(req.body);
  try {
    await newFarmer.save();
    res.status(200).json(newFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// HARVEST
export const addHarvest = async (req, res) => {
  const newHarvest = new Harvest(req.body);
  try {
    await newHarvest.save();
    res.status(200).json(newHarvest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FERTILIZER

export const addFertilizer = async (req, res) => {
  const newFertilizer = new Fertilizer(req.body);
  try {
    await newFertilizer.save();
    res.status(200).json(newFertilizer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
