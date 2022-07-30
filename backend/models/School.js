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
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  studentList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null
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
