import stock from "../../models/ECMOmodels/stock.js";

//add stock details
export async function addStock(req, res, next) {
  const {
    CenterName,
    SupplierName,
    FarmerID,
    MobileNo,
    Address,
    NoOfItems,
    Item,
    Role,
    Date,
  } = req.body;

  const newStock = new stock({
    CenterName,
    SupplierName,
    FarmerID,
    MobileNo,
    Address,
    NoOfItems,
    Item,
    Role,
    Date,
  });

  newStock
    .save()
    .then(() => {
      return res
        .status(200)
        .json({ message: "Your stock added successfully." });
    })
    .catch((err) => {
      console.log(err);
    });
}

//all stocks
export async function allStocks(req, res) {
  stock
    .find()
    .then((stock) => {
      return res.status(200).json(stock);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getStockByID(req, res) {
  const stockId = req.params.id;
  const stocks = await stock
    .findById(stockId)
    .then((stocks) => {
      return res.status(200).json(stocks);
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

export async function deleteStockByID(req, res) {
  const stockId = req.params.id;
  await stock
    .findByIdAndDelete(stockId)
    .then(() => {
      res.status(200).json({ status: "Stock deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ status: "Error with delete Stock" });
    });
}

export async function updateStockByID(req, res) {
  const stockId = req.params.id;
  console.log(stockId);
  const { SupplierName, FarmerID, MobileNo, Address, NoOfItems, Item } =
    req.body;

  const updateStock = {
    SupplierName,
    FarmerID,
    MobileNo,
    Address,
    NoOfItems,
    Item,
  };

  await stock
    .findByIdAndUpdate(stockId, updateStock, {
      new: true,
    })
    .then(() => {
      res.status(200).json({ status: "Stock updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: "Error with update stock" });
    });
}

// Get stock by date
export async function getStocksByDate(req, res) {
  try {
    const date = req.params.date;

    const result = await stock.find({ Date: date });

    return res.status(200).json({ result });
  } catch (err) {
    return res.status(422).json("error", err);
  }
}

export async function getStocksByDateCenterName(req, res) {
  try {
    const date = req.params.date;
    const centerName = req.params.centerName;

    const result = await stock.find({ CenterName: centerName, Date: date });

    return res.status(200).json({ result });
  } catch (err) {
    return res.status(422).json("error", err);
  }
}
