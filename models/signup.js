const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  suburb: { type: String, required: true },
  nameOfStore: { type: String, required: true },
  phoneNumber: String,
  pickup:Boolean,
  delivery:Boolean,
  website:String,
  details:String
  //date: { type: Date, default: Date.now }
});

const Signup = mongoose.model("SuburbStores", storesSchema);

module.exports = SignUp;
