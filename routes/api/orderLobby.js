import express from 'express';

import OrderLobbyController from '../../controllers/OrderLobbyController.js';
const router = express.Router();
router.get('/:order_lobbies_id', OrderLobbyController.getOrderLobbyById);
router.post('/create', OrderLobbyController.createLobby);
router.post('/submit/:order_lobbies_id', OrderLobbyController.submitLobby);
router.patch('/users/:order_lobbies_id', OrderLobbyController.setLobbyUsersWithLimits);
router.patch('/items/:order_lobbies_id', OrderLobbyController.setUserOrderLobbyItems);
router.delete('/cancel/:order_lobbies_id', OrderLobbyController.cancelLobby);
router.delete('/delete_user/:order_lobbies_id/:user_id', OrderLobbyController.deleteUserFromLobby);
export default router;
