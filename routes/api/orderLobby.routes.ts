import express from 'express';

import { validate } from '../../middleware/zod.ts';
import OrderLobbyController from '../../controllers/OrderLobbyController.js';
import {
	CreateLobbyRequestSchema,
	SubmitLobbyRequestSchema,
	SetLobbyUsersWithLimitsRequestSchema,
	SetUserOrderLobbyItemsRequestSchema,
} from '../../schemas/dto/OrderLobby/orderlobby.dto.ts';
const router = express.Router();
router.get('/:order_lobbies_id', OrderLobbyController.getOrderLobbyById);
router.get('/actives/:business_id', OrderLobbyController.getActiveOrderLobbiesByBusinessId);
router.get('/user/:user_id', OrderLobbyController.getOrderLobbiesByUserId);
router.post('/create', validate(CreateLobbyRequestSchema), OrderLobbyController.createLobby);
router.post('/submit/:order_lobbies_id', validate(SubmitLobbyRequestSchema), OrderLobbyController.submitLobby);
router.put(
	'/users/:order_lobbies_id',
	validate(SetLobbyUsersWithLimitsRequestSchema),
	OrderLobbyController.setLobbyUsersWithLimits
);
router.patch(
	'/items/:order_lobbies_id',
	validate(SetUserOrderLobbyItemsRequestSchema),
	OrderLobbyController.setUserOrderLobbyItems
);
router.delete('/cancel/:order_lobbies_id', OrderLobbyController.cancelLobby);
router.delete('/delete_user/:order_lobbies_id/:user_id', OrderLobbyController.deleteUserFromLobby);
export default router;
