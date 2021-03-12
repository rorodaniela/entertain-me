const router = require("express").Router();
const MovieController = require("../controllers/MoviesController")

router.get("/", MovieController.find)
router.post("/", MovieController.create);
router.put("/:id", MovieController.update);
router.delete("/:id", MovieController.delete);

module.exports = router;
