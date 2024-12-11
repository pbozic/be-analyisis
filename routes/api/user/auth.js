var express = require("express");
const router = express.Router();
const AuthController = require("../../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordSchema } = require("../../../joi/authSchemas");

const joi = require("../../../middleware/joi");
const { updateUserLanguageSchema } = require("../../../joi/userSchemas");
const UserController = require("../../../controllers/UserController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.patch("/language",joi(updateUserLanguageSchema), UserController.updateUserLanguage);
router.post("/login", joi(loginSchema), AuthController.login);
router.post("/register", joi(registerSchema), AuthController.register);
router.post("/refresh", joi(refreshSchema), AuthController.refreshToken);
router.post("/reset-password", joi(resetPasswordSchema), AuthController.requestPasswordReset);

module.exports = router;
