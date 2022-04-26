const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        productName: {type: String, required: true, unique: true},
        imageUrl: {type: String, required: true},
        description: {type: String, required: true},
        brand: {type: String, required: true},
        brandId: {type: String, required: true},
        productCategory: {type: String, required: true},
        subcategory: {type: String, default:"N/A"},
        price: {type: Number, required: true},
        productCollection: {type: Array, default:"N/A"},

    },
    {timestamps: true}
);

module.exports = mongoose.model ("Product", ProductSchema);