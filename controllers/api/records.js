const Record = require("../../models/record");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const records = await Record.find({});
  res.status(200).json(records);
}

async function create(req, res) {
  const record = Record.create(req.body);
  res.status(201).json(record);
}
