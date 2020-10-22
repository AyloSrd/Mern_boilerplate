const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.patch("/profile", (req, res, next) => {
  User.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
// Mettre à jour le user dans lq bqse de donnée et renvoyer le user a jour

router.post("/profile", (req, res, next) => {
  console.log( req.body);
  User.create(req.body)
    .then((userDocument) => {
      res.status(201).json(userDocument);
    })
    .catch(next);
});

router.get("/profile", (req, res, next) => {
  const id = req.session.currentUser;
  User.findById(id)
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

module.exports = router;
