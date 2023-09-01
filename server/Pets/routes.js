const express = require("express");
const { getPets, getPetsById } = require("./controllers");
const router = express.Router();

router.get("/", getPets);
router.get("/:id", getPetsById);

module.exports = router;
