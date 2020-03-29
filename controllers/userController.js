const db = require("../models");

// Defining methods for the storesController
module.exports = {
  // findAll: function (req, res) {
  //   db.SignUp
  //     .find(req.query)  {email: req.body.email}
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.SignUp
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findSignUp: function (req, res) {
  //   db.SignUp
  //   .find({"suburb":req.params.suburb})
  //   .sort({ date: -1 })
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },



  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  find: function (req, res) {
      db.User
        .find({email:req.params.email})
        // .find({"password":req.params.password})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }



};
