const router = require("express").Router();
const storesRoutes = require("./stores");

// Book routes
router.use("/stores", storesRoutes);

module.exports = router;
