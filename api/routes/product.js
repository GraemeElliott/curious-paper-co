import express from 'express';
import Product from '../models/Product.js';
import { isAdmin, isAuth } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

const PAGE_SIZE = 3;
const PRODUCT_LIST_PAGE_SIZE = 10;

productRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PRODUCT_LIST_PAGE_SIZE;

    const products = await Product.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countProducts = await Product.countDocuments();
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.slug = req.body.slug;
      product.image = req.body.image;
      product.images = req.body.images;
      product.brand = req.body.brand;
      product.brandId = req.body.brandId;
      product.category = req.body.category;
      product.subcategory = req.body.subcategory;
      product.productCollection = req.body.productCollection;
      product.description = req.body.description;
      product.price = req.body.price;
      product.countInStock = req.body.countInStock;

      await product.save();
      res.send({ message: 'Product Updated' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newProduct = new Product({
      firstName: req.body.firstName,
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      brandId: req.body.brandId,
      category: req.body.category,
      subcategory: req.body.subcategory,
      productCollection: req.body.productCollection,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
    });
    const product = await newProduct.save();
    res.send({ message: 'Product Created', product });
  })
);

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/brands/:brandId', async (req, res) => {
  const product = await Product.find({
    brandId: req.params.brandId,
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

productRouter.get('/:category/:subcategory/:slug', async (req, res) => {
  const product = await Product.findOne({
    category: req.params.category,
    subcategory: req.params.subcategory,
    slug: req.params.slug,
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

productRouter.get('/:category', async (req, res) => {
  const product = await Product.find({
    category: req.params.category,
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

productRouter.get('/:category/:subcategory', async (req, res) => {
  const product = await Product.find({
    category: req.params.category,
    subcategory: req.params.subcategory,
  });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;
