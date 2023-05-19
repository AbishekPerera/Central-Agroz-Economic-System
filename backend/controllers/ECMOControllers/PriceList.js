import price from "../../models/ECMOmodels/PriceList.js";

// Add stockPrice details
export async function addStockPrice(req, res, next) {
  const { CenterName, Category, Type, Image, Price } = req.body;

  try {
    const newPrice = new price({
      CenterName,
      Category,
      Type,
      Image,
      Price,
    });

    await newPrice.save();

    return res
      .status(200)
      .json({ message: "Your price has been added successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

// Get stockPrice by date
export async function getAllStocksPriceByDate(req, res) {
  try {
    const date = req.params.date;

    const result = await price.find({ "Price.Date": date });
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(422).json("error", err);
  }
}

// Get all stockPrices
export async function allStockPrice(req, res) {
  try {
    const result = await price.find();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getStockPriceByID(req, res) {
  const priceId = req.params.id;
  const result = await price
    .findById(priceId)
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

export async function deletePriceByID(req, res) {
  const priceId = req.params.id;
  await price
    .findByIdAndDelete(priceId)
    .then(() => {
      res.status(200).json({ status: "Price deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ status: "Error with delete Price" });
    });
}

export async function updatePriceByID(req, res) {
  const priceId = req.params.id;
  console.log(priceId);
  const { Category, Type, Image, Price } = req.body;

  const { SellingPrice, BuyingPrice, Date } = Price[0];
  console.log(Date);
  let updatePrice;

  const result = await price.find({ "Price.Date": Date });
  if (result.length > 0) {
    // Update existing price
    const existingPriceIndex = result[0].Price.findIndex(
      (p) => p.Date === Date
    );

    updatePrice = {
      Category,
      Type,
      Image,
      $set: {
        [`Price.${existingPriceIndex}.SellingPrice`]: SellingPrice || 0,
        [`Price.${existingPriceIndex}.BuyingPrice`]: BuyingPrice || 0,
        [`Price.${existingPriceIndex}.Date`]: Date || 0,
      },
    };
  } else {
    // Insert new price
    const newPrice = {
      SellingPrice: SellingPrice,
      BuyingPrice: BuyingPrice,
      Date: Date,
    };

    updatePrice = {
      Category,
      Type,
      Image,
      $push: { Price: newPrice },
    };
  }

  console.log(updatePrice);

  await price
    .findByIdAndUpdate(priceId, updatePrice, { new: true })
    .then(() => {
      res.status(200).json({ status: "Price updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: "Error with update price" });
    });
}
