const router = require("express").Router();
const signupController = require("../../controllers/signupController");

// Matches with "/api/stores"
router.route("/")
  .get(signupController.findAll)
  .post(signupController.create);


  router.route("/search/:suburb")
  .get(signupController.findSignUp);

// Matches with "/api/stores/:id"
router
  .route("/:id")
  .get(signupController.findById)
  .put(signupController.update)
  .delete(signupController.remove);

module.exports = router;