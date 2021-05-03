const express = require("express");
const router = express.Router();
const recordsCtrl = require('../../controllers/api/records');
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", recordsCtrl.index);

module.exports = router;
