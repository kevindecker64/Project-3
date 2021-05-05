const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userId: { type: String },
  userName: { type: String },
  recordId: { type: String },
  rating: { type: Number },
  review: { type: String },
});

module.exports = mongoose.model("Review", reviewSchema);
