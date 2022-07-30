const addressController = require("../controllers/addressController");

const router = require("express").Router();

//GET
router.get("/", addressController.getAllAddress);


module.exports = router;