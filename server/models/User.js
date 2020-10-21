const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fistName: String,
  lastName: String,
  role: { type: String, enum: ["teacher", "student"], default: "student" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  description:String,
  language:{ type: String, enum: ["Javascript", "React.js","Vue.js","Angular"], default: "Javascript" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
