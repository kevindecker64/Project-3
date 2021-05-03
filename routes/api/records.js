const express = require("express");
const router = express.Router();
const recordsCtrl = require("../../controllers/api/records");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", recordsCtrl.index);
router.post("/", recordsCtrl.create);

module.exports = router;
