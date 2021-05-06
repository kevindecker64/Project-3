const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  userId: { type: String },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  year: { type: Number },
  forSale: { type: Boolean, required: true },
  condition: {
    type: String,
    enum: ["Mint", "Very Good", "Good", "Meh", "Poor"],
  },
  price: { type: Number },
  sellerName: { type: String },
  sellerInfo: { email: { type: String }, phoneNum: { type: String } },
  reviews: [ {type: Schema.Types.ObjectId, ref: "Review"} ],
});

module.exports = mongoose.model("Record", recordSchema);
