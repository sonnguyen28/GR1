const middlewareController = require("../controllers/middlewareController");
const schoolController = require("../controllers/schoolController");

const router = require("express").Router();

//CREATE
router.post("/", schoolController.createSchool);
//GET ALL SCHOOL
router.get("/", schoolController.getAllSchools);

module.exports = router;