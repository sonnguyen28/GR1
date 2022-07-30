const School = require("../models/School");

const schoolController = {
  //CREATE SCHOOL
  createSchool: async (req, res) => {
    try {
      if (!req.body) {
        return res.status(400).send("Content can not be emtypy!");
      }
      // new school
      const newSchool = new School({
        idSchool: req.body.idSchool,
        name: req.body.name,
        admissionScore: req.body.admissionScore,
        isGifted: req.body.isGifted,
        slot: req.body.slot,
        typeSchool: req.body.typeSchool,
        address: req.body.address,
      });

      //Save user to DB
      const school = await newSchool.save();
      return res.status(200).json(school);
    } catch (error) {
      return res.status(500).json(err);
    }
  },
  getAllSchools: async (req, res) => {
    if (!req.body) {
      return res.status(400).send("Content can not be emtypy!");
    }
    try {
      const school = await School.find();
      res.status(200).json(school);
  } catch (error) {
      res.status(500).json(error);
  }
  },
};

module.exports = schoolController;
