const mongoose = require("mongoose");
const express = require("express");
const converter = require("./routes/converter");
const cors = require("cors")

const app = express();
app.use(cors());
require("dotenv").config();

app.use(express.json());

app.use("/code", converter);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }
};


app.listen(process.env.PORT, () => {
  connect();
  console.log("listening on PORT");
});
