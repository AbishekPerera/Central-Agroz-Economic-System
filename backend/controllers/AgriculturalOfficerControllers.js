import { AgriculturalOfficers } from "../models/AgriculturalOfficers.js";

//register agricultural officer
export const registerAgriculturalOfficer = async (req, res) => {
  const newAgriculturalOfficer = new AgriculturalOfficers(req.body);

  try {
    await newAgriculturalOfficer.save();
    res.status(201).json(newAgriculturalOfficer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all agricultural officers
export const getAgriculturalOfficers = async (req, res) => {
  try {
    const agriculturalOfficers = await AgriculturalOfficers.find(
      {},
      "-password"
    );
    res.status(200).json(agriculturalOfficers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get agricultural officer by id
export const getAgriculturalOfficerById = async (req, res) => {
  const { id } = req.params;

  try {
    const agriculturalOfficer = await AgriculturalOfficers.findById(
      id,
      "-password"
    );
    res.status(200).json(agriculturalOfficer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update agricultural officer
export const updateAgriculturalOfficer = async (req, res) => {
  const { id } = req.body;
  let {
    name,
    email,
    contact,
    address,
    gramaNiladariDivision,
    district,
    province,
    image,
    password,
  } = req.body;

  try {
    const updateAgriculturalOfficer = await AgriculturalOfficers.findById(id);

    if (!name) {
      name = updateAgriculturalOfficer.name;
    }
    if (!email) {
      email = updateAgriculturalOfficer.email;
    }
    if (!contact) {
      contact = updateAgriculturalOfficer.contact;
    }
    if (!address) {
      address = updateAgriculturalOfficer.address;
    }
    if (!gramaNiladariDivision) {
      gramaNiladariDivision = updateAgriculturalOfficer.gramaNiladariDivision;
    }
    if (!district) {
      district = updateAgriculturalOfficer.district;
    }
    if (!province) {
      province = updateAgriculturalOfficer.province;
    }
    if (!image) {
      image = updateAgriculturalOfficer.image;
    }
    if (!password) {
      password = updateAgriculturalOfficer.password;
    }

    const updatedAgriculturalOfficer =
      await AgriculturalOfficers.findByIdAndUpdate(
        id,
        {
          name,
          email,
          contact,
          address,
          gramaNiladariDivision,
          district,
          province,
          image,
          password,
        },
        { new: true }
      );

    res.status(200).json(updatedAgriculturalOfficer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete agricultural officer
export const deleteAgriculturalOfficer = async (req, res) => {
  const { id } = req.params;

  try {
    await AgriculturalOfficers.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Agricultural officer deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
