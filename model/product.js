const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: { type: String, required:true },
  description: String,
  price: {
    type: Number,
    min: [10, "inapproprate price, got {VALUE}"],
    required:true
  },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount 0, got {VALUE}"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "Must be at least 0, got {VALUE}"],
    max: [5, "Too much rating not allowed"],
    default:0
  },
  brand: { type: String, required:true },
  category: { type: String, required:true },
  thumbnail: { type: String, required:true },
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
