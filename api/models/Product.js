import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    brandId: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, default: 'N/A' },
    productCollection: { type: String, default: 'N/A' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
