const express = require("express");
const router = express.Router();
const recordsCtrl = require("../../controllers/api/records");
const reviewsCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn"); // add to routes that need authorization

router.get("/", recordsCtrl.index);
router.get("/:id", recordsCtrl.show);
router.post("/", recordsCtrl.create);
router.post("/:id/reviews", reviewsCtrl.create);
router.put("/:id", recordsCtrl.update);
router.delete("/:id", recordsCtrl.delete);

module.exports = router;
