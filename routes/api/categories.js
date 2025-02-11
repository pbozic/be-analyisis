var express = require("express");
const router = express.Router();

// Middleware and validation schemas (if applicable)

const CategoriesController = require("../../controllers/CategoriesController");

router.get("/", CategoriesController.getCategories);
router.post("/", CategoriesController.createCategory);
router.patch("/:id", CategoriesController.updateCategory);
router.delete("/:id", CategoriesController.deleteCategory);
router.get("/:id", CategoriesController.getCategoryById);

module.exports = router;