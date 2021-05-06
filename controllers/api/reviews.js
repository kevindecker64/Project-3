const Review = require("../../models/review");
const Record = require("../../models/record");

module.exports = {
  index,
  create,
};

async function index(req, res) {}

async function create(req, res) {
  const review = await Review.create(req.body);
  const record = await Record.findById(req.body.recordId);
  record.reviews.push(review._id);
  record.save().then(res.status(201).json(record));
}
