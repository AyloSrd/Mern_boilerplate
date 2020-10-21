const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  lessonName: String,
  teacher: String,
  isHomework: Boolean,
  subject: String,
  html: String,
  css: String,
  js: String,
  id_owner: { type: Schema.Types.ObjectId, ref: "User" }
});

const Lesson = mongoose.model("Lesson" ,lessonSchema);

module.exports = Lesson;
