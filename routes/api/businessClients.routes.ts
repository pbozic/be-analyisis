import express from 'express';

import BusinessClientController from '../../controllers/BusinessClient.js';
import {
	CreateBusinessClientSchema,
	UpdateBusinessClientSchema,
} from '../../schemas/validation/Business/businessClient.validation.js';
import { validate } from '../../middleware/zod.js';
const router = express.Router();
// Get all business clients
router.get('/', BusinessClientController.getAllBusinessClients);
// Get business clients for a specific business
router.get('/business/:business_id', BusinessClientController.getBusinessClientsByBusinessId);
// Get a specific business client by ID
router.get('/:business_clients_id', BusinessClientController.getBusinessClientById);
// Create a new business client
router.post('/', validate(CreateBusinessClientSchema), BusinessClientController.createBusinessClient);
// Update a business client
router.patch(
	'/:business_clients_id',
	validate(UpdateBusinessClientSchema),
	BusinessClientController.updateBusinessClient
);
// Delete a business client
router.delete('/:business_clients_id', BusinessClientController.removeBusinessClient);
export default router;
