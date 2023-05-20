import { Farmer } from '../models/Farmer.js';
import { Harvest } from '../models/Harvest.js';
import { Fertilizer } from '../models/Fertilizer.js';
import bcrypt from 'bcryptjs';

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

//get harvest by id
export const getHarvestById = async (req, res) => {
  let id = req.params.id;

  await Harvest.findById(id)
    .then((harvest) => {
      res.status(200).send({ status: 'Harvest fetched', harvest });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with get harvest', error: err.message });
    });
};

// update harvest
export const updateHarvest = async (req, res) => {
  try {
    let id = req.params.id;
    const {
      farmerUsername,
      cropType,
      season,
      year,
      month,
      expectedHarvest,
      actualHarvest,
    } = req.body;

    const updateHarvest = {
      farmerUsername,
      cropType,
      season,
      year,
      month,
      expectedHarvest,
      actualHarvest,
    };

    const update = await Harvest.findByIdAndUpdate(id, updateHarvest)
      .then(() => {
        res.status(200).send({ status: 'Harvest updated' });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: 'Error with updating data', error: err.message });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete harvest
export const deleteHarvest = async (req, res) => {
  let id = req.params.id;

  await Harvest.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: 'Harvest deleted' });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with delete harvest', error: err.message });
    });
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
};

//get fertilizer by id
export const getFertilizerById = async (req, res) => {
  let id = req.params.id;

  await Fertilizer.findById(id)
    .then((fertilizer) => {
      res.status(200).send({ status: 'Fertilizer fetched', fertilizer });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with get fertilizer', error: err.message });
    });
};

// update fertilizer
export const updateFertilizer = async (req, res) => {
  try {
    let id = req.params.id;
    const { farmerUsername, fertilizerType, year, month, quantity } = req.body;

    const updateFertilizer = {
      farmerUsername,
      fertilizerType,
      year,
      month,
      quantity,
    };

    const update = await Fertilizer.findByIdAndUpdate(id, updateFertilizer)
      .then(() => {
        res.status(200).send({ status: 'Fertilizer updated' });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: 'Error with updating data', error: err.message });
      });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete fertilizer
export const deleteFertilizer = async (req, res) => {
  let id = req.params.id;

  await Fertilizer.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: 'Fertilizer deleted' });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with delete fertilizer', error: err.message });
    });
};
