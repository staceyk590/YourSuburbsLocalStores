const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:String,
  password:String
    
//   suburb: { type: String, required: true },
//   nameOfStore: { type: String, required: true },
//   phoneNumber: String,
//   pickup:Boolean,
//   delivery:Boolean,
//   website:String,
//   details:String
  //date: { type: Date, default: Date.now }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
