const express = require('express');
const router = express.Router();

const OrderLobbyController = require('../../controllers/OrderLobbyController');

router.post('/create', OrderLobbyController.createLobby);
router.post('/submit/:order_lobbies_id', OrderLobbyController.submitLobby);

router.patch('/users/:order_lobbies_id', OrderLobbyController.setLobbyUsersWithLimits);
router.patch('/items/:order_lobbies_id', OrderLobbyController.setUserOrderLobbyItems);

router.delete('/cancel/:order_lobbies_id', OrderLobbyController.cancelLobby);

module.exports = router;
