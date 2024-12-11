var express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/AuthController");
const { loginSchema, registerSchema, refreshSchema, resetPasswordRequestSchema } = require("../../joi/authSchemas");

const joi = require("../../middleware/joi");
const { updateUserLanguageSchema } = require("../../joi/userSchemas");
const UserController = require("../../controllers/UserController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.patch("/language",joi(updateUserLanguageSchema), UserController.updateUserLanguage);
router.get("/scheduled_users", AuthController.getScheduledUsers);
router.post("/login", joi(loginSchema), AuthController.login);
router.post("/register", joi(registerSchema), AuthController.register);
router.post("/create/scheduled_user", AuthController.createScheduledUser);
router.post("/update/scheduled_user", AuthController.updateScheduledUser);
router.post("/refresh", joi(refreshSchema), AuthController.refreshToken);
router.post("/reset-password", joi(resetPasswordRequestSchema), AuthController.requestPasswordReset);

module.exports = router;
