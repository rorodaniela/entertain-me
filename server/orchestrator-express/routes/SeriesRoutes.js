const router = require("express").Router();
const SeriesController = require("../controllers/SeriesController");

router.get("/", SeriesController.find);
router.post("/", SeriesController.create);
router.put("/:id", SeriesController.update);
router.delete("/:id", SeriesController.delete);

module.exports = router;
