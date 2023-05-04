import {Farmer} from '../models/Farmer.js';

//register farmer
export const registerFarmer = async (req, res) => {
    const newFarmer = new Farmer(req.body);
    try {
        await newFarmer.save();
        res.status(200).json(newFarmer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
