const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const route = require('./routes');

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Route init
route(app);
const db = require('./config/db');

// Connect to DB
db.connect();

app.listen(8000, () => {
  console.log("Server is running");
});
