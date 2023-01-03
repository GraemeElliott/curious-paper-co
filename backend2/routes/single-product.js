import express from 'express';
import Product from '../models/Product.js';

const singleProductRouter = express.Router();

singleProductRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default singleProductRouter;
