const router = require('express').Router()
const moviesRoutes = require('./MoviesRoutes')
const seriesRoutes = require("./seriesRoutes");
const entertainMeRoutes = require("./EntertainMeRoutes");

router.use("/", entertainMeRoutes);
router.use("/series", seriesRoutes);
router.use("/movies", moviesRoutes);

module.exports = router