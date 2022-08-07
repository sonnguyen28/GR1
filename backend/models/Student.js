const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    idStudent: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    scores: {
      van: String,
      toan: String,
      anh: String,
      diemchuyen1: String,
      diemchuyen2: String,
    },
    schoolsNV: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        default: [],
      },
    ],
    schoolDo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      default: null,
    },
    address: {
      district: {
        name: String,
        areaCode: String,
        ward: {
          name: String,
          prefix: String,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
