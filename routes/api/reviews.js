const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/api/reviews");

router.post("/", reviewsCtrl.create);

module.exports = router;
