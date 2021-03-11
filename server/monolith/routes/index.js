const router = require('express').Router()
const MoviesController = require('../controllers/moviesController')

router.get('/', MoviesController.find)
router.post("/", MoviesController.create)
router.put("/:id", MoviesController.update);
router.delete("/:id", MoviesController.delete);

module.exports = router