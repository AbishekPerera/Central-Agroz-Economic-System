import { EconomicCenter } from "../models/EconomicCenter.js";

//register farmer
export const registerEconomicCenter = async (req, res) => {
  const newEconomicCenter = new EconomicCenter(req.body);
  try {
    await newEconomicCenter.save();
    res.status(200).json(newEconomicCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all eco centers
export const getEconomicCenters = async (req, res) => {
  try {
    const ecoCenters = await EconomicCenter.find({}, "-password");
    res.status(200).json(ecoCenters);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get eco center by id
export const getEconomicCenterById = async (req, res) => {
  const { id } = req.params;
  try {
    const ecoCenter = await EconomicCenter.findById(id, "-password");
    res.status(200).json(ecoCenter);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update eco center
export const updateEconomicCenter = async (req, res) => {
  const { id } = req.body;
  let {
    ecoCenterName,
    ecoCenterAddress,
    province,
    district,
    phone,
    officerName,
    officerEmail,
    officerContact,
    officerAddress,
    password,
  } = req.body;

  try {
    const updateEcoCenter = await EconomicCenter.findById(id);

    if (!ecoCenterName) {
      ecoCenterName = updateEcoCenter.ecoCenterName;
    }
    if (!ecoCenterAddress) {
      ecoCenterAddress = updateEcoCenter.ecoCenterAddress;
    }
    if (!province) {
      province = updateEcoCenter.province;
    }
    if (!district) {
      district = updateEcoCenter.district;
    }
    if (!phone) {
      phone = updateEcoCenter.phone;
    }
    if (!officerName) {
      officerName = updateEcoCenter.officerName;
    }
    if (!officerEmail) {
      officerEmail = updateEcoCenter.officerEmail;
    }
    if (!officerContact) {
      officerContact = updateEcoCenter.officerContact;
    }
    if (!officerAddress) {
      officerAddress = updateEcoCenter.officerAddress;
    }
    if (!password) {
      password = updateEcoCenter.password;
    }

    updateEcoCenter.ecoCenterName = ecoCenterName;
    updateEcoCenter.ecoCenterAddress = ecoCenterAddress;
    updateEcoCenter.province = province;
    updateEcoCenter.district = district;
    updateEcoCenter.phone = phone;
    updateEcoCenter.officerName = officerName;
    updateEcoCenter.officerEmail = officerEmail;
    updateEcoCenter.officerContact = officerContact;
    updateEcoCenter.officerAddress = officerAddress;
    updateEcoCenter.password = password;

    await updateEcoCenter.save();
    res.status(200).json(updateEcoCenter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete eco center
export const deleteEconomicCenter = async (req, res) => {
  const { id } = req.params;
  try {
    await EconomicCenter.findByIdAndDelete(id);
    res.status(200).json({ message: "Eco Center Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
