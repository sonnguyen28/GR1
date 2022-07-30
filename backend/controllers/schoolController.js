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
        admissionScore: {
          nomarl: req.body.admissionScore.nomarl,
          gifted: req.body.typeSchool ? {
            van: req.body.admissionScore.gifted.van,
            toan: req.body.admissionScore.gifted.toan,
            ly: req.body.admissionScore.gifted.ly,
            sinh: req.body.admissionScore.gifted.sinh,
            dia: req.body.admissionScore.gifted.dia,
            tin: req.body.admissionScore.gifted.tin,
            anh: req.body.admissionScore.gifted.anh,
            trung: req.body.admissionScore.gifted.trung,
            nga: req.body.admissionScore.gifted.nga,
            phap: req.body.admissionScore.gifted.phap,
          } : null,
        },
        slot: req.body.slot,
        typeSchool: req.body.typeSchool,
        address: req.body.address,
      });

      //Save user to DB
      const school = await newSchool.save();
      return res.status(200).json(school);
    } catch (error) {
      console.log(error)
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
