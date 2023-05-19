import { Farmer } from '../models/Farmer.js';
import { Harvest } from '../models/Harvest.js';
import { Fertilizer } from '../models/Fertilizer.js';
import bcrypt from 'bcryptjs'

// FARMER

    // register farmer
export const registerFarmer = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPswrd = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPswrd;

  const newFarmer = new Farmer(req.body);
  
  try {
    await newFarmer.save();
    res.status(200).json(newFarmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

    //get all farmers
export const getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// HARVEST

  //add harvest
export const addHarvest = async (req, res) => {
  const newHarvest = new Harvest(req.body);
  try {
    await newHarvest.save();
    res.status(200).json(newHarvest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  //get all harvests
export const getHarvests = async (req, res) => { 
  try {
    const harvests = await Harvest.find();
    res.status(200).json(harvests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// FERTILIZER

  //add fertilizer
export const addFertilizer = async (req, res) => {
  const newFertilizer = new Fertilizer(req.body);
  try {
    await newFertilizer.save();
    res.status(200).json(newFertilizer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  //get all fertilizers
export const getFertilizers = async (req, res) => {
  try {
    const fertilizers = await Fertilizer.find();
    res.status(200).json(fertilizers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
