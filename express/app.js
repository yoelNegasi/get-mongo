const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yoelnegasi:yoel123@test1.w3ihr.mongodb.net/Test1?retryWrites=true&w=majority"
);
let PersonSchema = require("./people.model");
mongoose.connection.once("open", function () {
  console.log("mongoose connected");
});
app.get("/add", function (req, res) {
  let newPerson = {
    name: "yonas",
    age: 40,
    job: "doctor",
    married: true,
  };
  let baba = {
    name: "Alex",
    age: 20,
    job: "pilot",
    married: false,
  };
  let personObj = new PersonSchema(newPerson);
  let babaObj = new PersonSchema(baba);
  personObj.save().then((res) => {
    console.log(res);
    babaObj.save().then((res) => {
      console.log(res);
    });
  });
});
app.get("/find", function (req, res) {
  PersonSchema.find(function (err, res) {
    console.log(res);
  });
});
app.listen("3001", function (req, res) {
  console.log("running on 3001");
});
