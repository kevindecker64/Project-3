const Review = require("../../models/review");

module.exports = {
  create,
};

async function create(req, res) {
  console.log("You Made it to the Controller");
  const review = await Review.create(req.body);
  res.status(201).json(review);
}
