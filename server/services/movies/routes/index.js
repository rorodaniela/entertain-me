const router = require('express').Router()
const MoviesController = require('../controllers/moviesController')

router.get('/movies', MoviesController.find)
router.get("/movies/:id", MoviesController.findById);
router.post("/movies", MoviesController.create)
router.put("/movies/:id", MoviesController.update);
router.delete("/movies/:id", MoviesController.delete);

module.exports = router