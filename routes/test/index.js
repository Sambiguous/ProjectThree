const router = require("express").Router();
const testRoutes = require("./api")

// Book routes
router.use("/api", testRoutes);

module.exports = router;
