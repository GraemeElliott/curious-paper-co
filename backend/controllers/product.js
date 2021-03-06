const Product = require ("../models/Product")

const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)

    } catch (err) {
        res.status(500).json(err)
    }
};

const getProduct = async (req, res) => {
  try {
    let product;
      product = await Product.findById(req.params.id)
      res.status(200).json(product);
  } catch (err) {
      res.status(500).json(err)
  }
};

const getAllProducts = async (req, res) => {
    const queryNewProducts = req.query.new;
    const queryCategory = req.query.category;
    const querySubcategory = req.query.subcategory;
    const queryBrand = req.query.brandId;
    const queryCollection = req.query.collection;

    try {
        let products;
        if(queryNewProducts) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (queryCategory) {
            products = await Product.find({
                productCategory: {
                  $in: [queryCategory],
                },
              });
        } else if (queryBrand) {
            products = await Product.find({
                brandId: {
                  $in: queryBrand,
                },
              });
        } else if (queryCollection) {
            products = await Product.find({
                productCollection: {
                  $in: [queryCollection],
                },
              });
        } else {
            products = await Product.find()
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
};

const updateProduct = async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedProduct)
    }catch (err){
        res.status(500).json(err)
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
    };

exports.createProduct = createProduct;
exports.getAllProducts = getAllProducts;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getProduct = getProduct;