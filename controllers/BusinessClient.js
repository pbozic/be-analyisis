import BusinessClientDao from '../dao/BusinessClient.js';
/**
 * GET /business-clients
 * @tag BusinessClients
 * @summary Get a list of all business clients
 * @description Returns a list of all business clients.
 * @operationId getAllBusinessClients
 * @response 200 - successful operation
 * @responseContent {BusinessClient[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business client list
 * @responseContent {object} 400.application/json The error object
 */
async function getAllBusinessClients(req, res) {
	try {
		const businessClients = await BusinessClientDao.getAllBusinessClients();
		res.status(200).json(businessClients);
	} catch (error) {
		console.error('Error retrieving all business clients:', error);
		res.status(400).json({ error: 'Error retrieving all business clients', detail: error.message });
	}
}
/**
 * GET /business-clients/{business_clients_id}
 * @tag BusinessClients
 * @summary Get a business client by ID
 * @description Returns a business client.
 * @operationId getBusinessClientById
 * @pathParam {string} business_clients_id - The ID of the business client
 * @response 200 - successful operation
 * @responseContent {BusinessClient} 200.application/json
 * @response 400 - Error occurred while obtaining the business client
 * @responseContent {object} 400.application/json The error object
 */
async function getBusinessClientById(req, res) {
	try {
		const businessClient = await BusinessClientDao.getBusinessClientById(req.params.business_clients_id);
		if (!businessClient) {
			return res.status(404).json({ error: 'Business client not found' });
		}
		res.status(200).json(businessClient);
	} catch (error) {
		console.error('Error retrieving business client:', error);
		res.status(400).json({ error: 'Error retrieving business client', detail: error.message });
	}
}
/**
 * GET /business-clients/business/{business_id}
 * @tag BusinessClients
 * @summary Get business clients by business ID
 * @description Returns a list of business clients for a specific business ID.
 * @operationId getBusinessClientsByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - successful operation
 * @responseContent {BusinessClient[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business client list
 * @responseContent {object} 400.application/json The error object
 */
async function getBusinessClientsByBusinessId(req, res) {
	try {
		const businessClients = await BusinessClientDao.getBusinessClientsByBusinessId(req.params.business_id);
		res.status(200).json(businessClients);
	} catch (error) {
		console.error('Error retrieving business clients by business ID:', error);
		res.status(400).json({ error: 'Error retrieving business clients by business ID', detail: error.message });
	}
}
/**
 * POST /business-clients
 * @tag BusinessClients
 * @summary Create a new business client
 * @description Creates a new business client and links it to a business.
 * @operationId createBusinessClient
 * @bodyDescription The data to create a new business client
 * @bodyContent {CreateBusinessClientRequest} application/json
 * @bodyRequired
 * @response 201 - Business client created successfully. Returns the created business client.
 * @responseContent {BusinessClient} 201.application/json
 * @response 400 - Error creating business client.
 */
async function createBusinessClient(req, res) {
	try {
		const businessClient = await BusinessClientDao.createBusinessClient(req.body);
		res.status(201).json(businessClient);
	} catch (error) {
		console.error('Error creating a business client:', error);
		res.status(400).json({ error: 'Error creating a business client', detail: error.message });
	}
}
/**
 * PATCH /business-clients/{business_clients_id}
 * @tag BusinessClients
 * @summary Update a business client
 * @description Updates a business client's information.
 * @operationId updateBusinessClient
 * @pathParam {string} business_clients_id - The ID of the business client to update
 * @bodyDescription The data to update
 * @bodyContent {UpdateBusinessClientRequest} application/json
 * @bodyRequired
 * @response 200 - Business client updated successfully. Returns the updated business client.
 * @responseContent {BusinessClient} 200.application/json
 * @response 400 - Error updating business client.
 * @response 404 - Business client not found.
 */
async function updateBusinessClient(req, res) {
	try {
		const businessClient = await BusinessClientDao.updateBusinessClient(req.params.business_clients_id, req.body);
		if (!businessClient) {
			return res.status(404).json({ error: 'Business client not found' });
		}
		res.status(200).json(businessClient);
	} catch (error) {
		console.error('Error updating business client:', error);
		res.status(400).json({ error: 'Error updating business client', detail: error.message });
	}
}
/**
 * DELETE /business-clients/{business_clients_id}
 * @tag BusinessClients
 * @summary Remove a business client
 * @description Removes a business client by their ID.
 * @operationId removeBusinessClient
 * @pathParam {string} business_clients_id - The ID of the business client to remove
 * @response 200 - Business client removed successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing business client.
 */
async function removeBusinessClient(req, res) {
	try {
		await BusinessClientDao.removeBusinessClient(req.params.business_clients_id);
		res.status(200).json({ message: 'Business client removed successfully.' });
	} catch (error) {
		console.error('Error removing a business client:', error);
		res.status(400).json({ error: 'Error removing a business client', detail: error.message });
	}
}
export { getAllBusinessClients };
export { getBusinessClientById };
export { getBusinessClientsByBusinessId };
export { createBusinessClient };
export { updateBusinessClient };
export { removeBusinessClient };
export default {
	getAllBusinessClients,
	getBusinessClientById,
	getBusinessClientsByBusinessId,
	createBusinessClient,
	updateBusinessClient,
	removeBusinessClient,
};
