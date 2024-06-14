var express = require("express");
const router = express.Router();

const MenuController = require("../../controllers/MenuController");

// Menu routes
router.get("/business/:business_id", MenuController.getMenuByBusinessId);
router.post("/", MenuController.createMenu);
router.delete("/:menu_id", MenuController.deleteMenu);
router.patch("/active", MenuController.setActiveMenu);

// Menu Category routes
router.post("/menu-categories/create", MenuController.createMenuCategory);
router.get("/menu-categories/:menu_id", MenuController.getMenuCategoriesByMenuId);
router.delete("/menu-categories/:menu_category_id", MenuController.deleteMenuCategory);
router.patch("/menu-categories", MenuController.updateMenuCategory);

// Menu Item routes
router.post("/menu-items/create", MenuController.createMenuItem);
router.get("/menu-items/:category_id", MenuController.getMenuItemsByCategoryId);
router.delete("/menu-items/:menu_item_id", MenuController.deleteMenuItem);
router.patch("/menu-items", MenuController.updateMenuItem);
router.patch("/menu-items/price", MenuController.updateMenuItemPrice);
router.patch("/menu-items/category/add", MenuController.updateMenuItemMenuCategory);
router.patch("/menu-items/category/remove", MenuController.removeMenuItemFromCategory);

module.exports = router;