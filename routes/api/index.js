const router = require("express").Router();
const storesRoutes = require("./stores");
const userRoutes = require("./user");

// Book routes
router.use("/stores", storesRoutes);
router.use("/user", userRoutes);

module.exports = router;
