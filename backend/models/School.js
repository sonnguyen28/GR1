const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  idSchool: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  admissionScore: {
    nomarl: String,
    gifted: {
      van: String,
      toan: String,
      ly: String,
      sinh: String,
      dia: String,
      tin: String,
      anh: String,
      trung: String,
      nga: String,
      phap: String,
    },
  },
  slot: {
    type: String,
    required: true,
  },
  studentsList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
  typeSchool: {
    type: Boolean,
    required: true,
  },
  address: {
    district: {
      name: String,
      areaCode: String,
    },
  },
});

module.exports = mongoose.model("School", schoolSchema);
