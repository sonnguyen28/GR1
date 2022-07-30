const Student = require("../models/Student");
const School = require("../models/School");

const studentController = {
  //CREATE STUDENT
  createStudent: async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).send("Content can not be emtypy!");
      }
      //find school
      const schools = await School.find();
      // new student
      const newStudent = new Student({
        idStudent: req.body.idstudent,
        name: req.body.name,
        scores: req.body.scores,
        schoolsNV: schools,
        address: req.body.address,
      });
      //Save user to DB
      const student = await newStudent.save();
      console.log(student);
      return res.status(200).json(student);
    } catch (err) {
      console.log(err)
      return res.status(500).json(err);
    }
  },
  getAllStudents: async (req, res) => {
    if (!req.body) {
      return res.status(400).send("Content can not be emtypy!");
    }
    try {
      const students = await Student.find();
      res.status(200).json(students);
  } catch (error) {
      res.status(500).json(error);
  }
  },
};

module.exports = studentController;
