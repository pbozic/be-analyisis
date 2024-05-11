var express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const {
	loginSchema,
	registerSchema,
	refreshSchema,
} = require("../joi/userSchemas");

const joi = require("../middleware/joi");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.post("/login", joi(loginSchema), AuthController.login);
router.post("/register", joi(registerSchema), AuthController.register);
router.post("/refresh", joi(refreshSchema), AuthController.refreshToken);

module.exports = router;
