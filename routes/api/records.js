const express = require("express");
const router = express.Router();
const recordsCtrl = require("../../controllers/api/records");
const reviewsCtrl = require("../../controllers/api/reviews");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", recordsCtrl.index);
router.post("/", ensureLoggedIn, recordsCtrl.create);
router.get("/:id", recordsCtrl.show);
router.post("/:id/reviews", ensureLoggedIn, reviewsCtrl.create);
router.put("/:id", ensureLoggedIn, recordsCtrl.update);
router.delete("/:id", ensureLoggedIn, recordsCtrl.delete);

module.exports = router;
