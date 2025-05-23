var express = require('express');
const router = express.Router();

const BusinessClientController = require('../../controllers/BusinessClient');

// Get all business clients
router.get('/', BusinessClientController.getAllBusinessClients);

// Get business clients for a specific business
router.get('/business/:business_id', BusinessClientController.getBusinessClientsByBusinessId);

// Get a specific business client by ID
router.get('/:business_clients_id', BusinessClientController.getBusinessClientById);

// Create a new business client
router.post('/', BusinessClientController.createBusinessClient);

// Update a business client
router.patch('/:business_clients_id', BusinessClientController.updateBusinessClient);

// Delete a business client
router.delete('/:business_clients_id', BusinessClientController.removeBusinessClient);

module.exports = router;
