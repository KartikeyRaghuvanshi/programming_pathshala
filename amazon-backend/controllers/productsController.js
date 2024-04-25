const productModel = require("../modules/productsModel.js");

// for GET method..............................................................
const getAllProducts = async (req, res) => {
  //   const q = req.query;
  //   console.log(q);
  //   const data = await productModel.find(q);
  const { sort = "price", page = 1, pagesize = 3, fields, ...q } = req.query;
  const sortStr = sort.split(",").join(" ");
  const fieldStr = fields.split(",").join(" ");

  let query = productModel.find(q);
  query = query.sort(sortStr);

  const skip = pagesize * (page - 1);
  query = query.skip(skip).limit(limit);

  query = query.select(fieldStr);

  const product = await query;
  console.log(req.url);
  res.send({
    status: "success",
    results: 0,
    data: {
      products: data,
    },
  });
};

// for POST method..............................................................
const addProduct = async (req, res) => {
  try {
    // const {_id, ...req}
    const { _id, ...data } = await productModel.create(req.body);
    console.log(data);
    res.json({
      status: "success",
      result: 1,
      data: {
        products: data,
      },
    });
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

// for PUT method ...............................................................
const replaceProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    // const data = {...req.body, _reqId};
    const result = await productModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
      status: "success",
      data: {
        product: result,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};
// const replaceProduct = async (req, res) => {
//   try {
//     const reqId = req.params.id;
//     const newData = req.body; // Use the request body directly for new data

//     // Use findByIdAndReplace() to find the document by ID and replace it with the new data
//     const updatedProduct = await productModel.findByIdAndUpdate(
//       reqId, // ID of the document to update
//       newData, // New data to replace existing data
//       { new: true } // Return the updated document
//     );

//     res.json({
//       status: "success",
//       data: {
//         product: updatedProduct,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "fail",
//       message: err.message, // Return error message
//     });
//   }
// };

// for DELETE method ...........................................................

// DELETE method
const deleteProduct = async (req, res) => {
  try {
    const reqId = req.params.id;

    // Use findByIdAndDelete() to find the document by ID and delete it
    const deletedProduct = await productModel.findByIdAndDelete(reqId);

    if (!deletedProduct) {
      // If no product found with the given ID
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      data: {
        product: deletedProduct,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};

// "_id":"6620afa07cb69ea8bc6320ae"
