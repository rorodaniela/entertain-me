const router = require('express').Router()
const SeriesController = require('../controllers/seriesController')

router.get('/series', SeriesController.find)
router.post("/series", SeriesController.create)
router.put("/series/:id", SeriesController.update)
router.delete("/series/:id", SeriesController.delete)

module.exports = router