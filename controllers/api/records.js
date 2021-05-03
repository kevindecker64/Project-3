const Record = require('../../models/record')

module.exports = {
    index,
}

async function index(req, res){
    const records = await Record.find({});
    res.status(200).json(records);
}
