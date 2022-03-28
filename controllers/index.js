const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashbaordRoutes = require("./dashboard");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
// router.use("/dashboard", dashbaordRoutes); crashes server because empty.

router.use((req, res) => res.status(404).end());

module.exports = router;
