const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Person = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  job: {
    type: String,
  },
  married: {
    type: Boolean,
  },
});
module.exports = mongoose.model("Person", Person);
