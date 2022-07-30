const middlewareController = require("../controllers/middlewareController");
const studentController = require("../controllers/studentController");

const router = require("express").Router();

//CREATE STUDENT
router.post("/", studentController.createStudent);
//GET ALL STUDENT
router.get("/", studentController.getAllStudents);

module.exports = router;