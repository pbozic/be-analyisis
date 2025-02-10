const express = require("express");
const router = express.Router();

const OrderLobbyUserController = require("../../controllers/OrderLobbyUserController");

// Update order lobby user's spending limit
router.patch("/limit/:order_lobby_users_id", OrderLobbyUserController.setOrderLobbyUserLimit);

module.exports = router;