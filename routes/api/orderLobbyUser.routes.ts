import express from 'express';

import OrderLobbyUserController from '../../controllers/OrderLobbyUserController.js';
import { validate } from '../../middleware/zod.ts';
import { UpdateOrderLobbyUserLimitRequestSchema } from '../../schemas/dto/OrderLobby/orderLobbyUser.dto.ts';

const router = express.Router();

// Update order lobby user's spending limit
router.patch(
	'/limit/:order_lobby_users_id',
	validate(UpdateOrderLobbyUserLimitRequestSchema),
	OrderLobbyUserController.setOrderLobbyUserLimit
);

module.exports = router;
