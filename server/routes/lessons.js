const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

router.get("/all", (req, res, next) => {
	Lesson.find({ isHomework: false })
	  .then((lessons) => {
		if (!lessons) return res.status(400).json({ message: "Invalid owner" });
		res.status(200).json(lessons);
	  })
	  .catch(next);
});

router.get("/all/:student", (req, res, next) => {
	Lesson.find({ owner: req.params.student })
	  .then((lessons) => {
		if (!lessons) return res.status(400).json({ message: "Invalid owner" });
		res.status(200).json(lessons);
	  })
	  .catch(next);
  });

router.get("/:id", (req, res, next) => {
	Lesson.findById(req.params.id)
	  .then((lesson) => {
		if (!lesson) return res.status(400).json({ message: "Invalid owner" });
		res.status(200).json(lesson);
	  })
	  .catch(next);
});

router.post("/", (req, res, next) => {
	console.log('post', req.body)
	Lesson.create(req.body)
	.then((newLessonSaved) => {
		res.status(201).json(newLessonSaved)
	})
	.catch(next);
});

router.delete("/:id", (req, res, next) => {
	Lesson.findByIdAndDelete(req.params.id)
	.then((lesson) => {
	res.status(200).json(lesson);
	})
	.catch(next);
});

module.exports = router;
