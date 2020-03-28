const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user/signup"
router.route("/signup")
  //.get(userController.findAll)
  .post(userController.create);
  // .get(userController.find);

  // router.route("/search/:user")
  // .get(storesController.findStoreInSuburb);


  router.route("/login")
  //.get(userController.findAll)
  .post(userController.find);


  
module.exports = router;