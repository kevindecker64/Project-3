const express = require("express");
const router = express.Router();
const recordsCtrl = require("../../controllers/api/records");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", recordsCtrl.index);
router.get("/:id", recordsCtrl.show);
router.post("/", recordsCtrl.create);
router.delete("/:id", recordsCtrl.delete);

module.exports = router;
