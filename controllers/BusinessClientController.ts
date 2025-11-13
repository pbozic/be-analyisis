import { Request, Response } from 'express';

import BusinessClientDao from '../dao/BusinessClient.js';
import { getBusinessById } from '../dao/Business.js';
import prisma from '../prisma/prisma.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import {
	CreateBusinessClientInput,
	UpdateBusinessClientInput,
} from '../schemas/dto/BusinessClient/BusinessClient.validation.ts';

/**
 * GET /business-clients
 * @tag BusinessClients
 * @summary Get a list of all business clients
 * @description Returns a list of all business clients.
 * @operationId getAllBusinessClients
 * @response 200 - successful operation
 * @responseContent {BusinessClientDetailResponse[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business client list
 * @prisma_model business_clients
 */
export async function getAllBusinessClients(req: Request, res: Response): Promise<void> {
	try {
		const businessClients = await BusinessClientDao.getAllBusinessClients();
		res.status(200).json(businessClients);
	} catch (error: any) {
		console.error('Error retrieving all business clients:', error);
		res.status(400).json({
			error: 'Error retrieving all business clients',
			detail: error?.message ?? String(error),
		});
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
 * @responseContent {BusinessClientDetailResponse} 200.application/json
 * @response 400 - Error occurred while obtaining the business client
 * @prisma_model business_clients
 */
export async function getBusinessClientById(
	req: ValidatedRequest<never, { business_clients_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessClient = await BusinessClientDao.getBusinessClientById(req.params.business_clients_id);
		if (!businessClient) {
			res.status(404).json({ error: 'Business client not found' });
			return;
		}
		res.status(200).json(businessClient);
	} catch (error: any) {
		console.error('Error retrieving business client:', error);
		res.status(400).json({ error: 'Error retrieving business client', detail: error?.message ?? String(error) });
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
 * @responseContent {BusinessClientWithOrdersResponse[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business client list
 * @prisma_model business_clients
 */
export async function getBusinessClientsByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessClients = await BusinessClientDao.getBusinessClientsByBusinessId(req.params.business_id);
		res.status(200).json(businessClients);
	} catch (error: any) {
		console.error('Error retrieving business clients by business ID:', error);
		res.status(400).json({
			error: 'Error retrieving business clients by business ID',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 * POST /business-clients
 * @tag BusinessClients
 * @summary Create a new business client
 * @description Creates a new business client and links it to a business.
 * @operationId createBusinessClient
 * @bodyDescription The data to create a new business client
 * @bodyContent {CreateBusinessClient} application/json
 * @bodyRequired
 * @response 201 - Business client created successfully. Returns the created business client.
 * @responseContent {BusinessClientResponse} 201.application/json
 * @response 400 - Error creating business client.
 * @prisma_model business_clients
 */
export async function createBusinessClient(
	req: ValidatedRequest<CreateBusinessClientInput>,
	res: Response
): Promise<void> {
	try {
		const business = await getBusinessById(req.body.business_id);
		if (!business) {
			res.status(404).json({ error: 'Business not found' });
			return;
		}
		if (!business.crm_module_id) {
			await prisma.crm_module.create({ data: { business: { connect: { business_id: business.business_id } } } });
		}
		const businessClient = await BusinessClientDao.createBusinessClient({
			...(req.body || {}),
			crm_module_id: business.crm_module_id,
		} as any);
		res.status(201).json(businessClient);
	} catch (error: any) {
		console.error('Error creating a business client:', error);
		res.status(400).json({ error: 'Error creating a business client', detail: error?.message ?? String(error) });
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
 * @bodyContent {UpdateBusinessClient} application/json
 * @bodyRequired
 * @response 200 - Business client updated successfully. Returns the updated business client.
 * @responseContent {BusinessClientResponse} 200.application/json
 * @response 400 - Error updating business client.
 * @response 404 - Business client not found.
 * @prisma_model business_clients
 */
export async function updateBusinessClient(
	req: ValidatedRequest<UpdateBusinessClientInput, { business_clients_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessClient = await BusinessClientDao.updateBusinessClient(req.params.business_clients_id, req.body);
		if (!businessClient) {
			res.status(404).json({ error: 'Business client not found' });
			return;
		}
		res.status(200).json(businessClient);
	} catch (error: any) {
		console.error('Error updating business client:', error);
		res.status(400).json({ error: 'Error updating business client', detail: error?.message ?? String(error) });
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
 * @responseContent {BusinessClientResponse} 200.application/json
 * @response 400 - Error removing business client.
 * @prisma_model business_clients
 */
export async function removeBusinessClient(
	req: ValidatedRequest<never, { business_clients_id: string }>,
	res: Response
): Promise<void> {
	try {
		await BusinessClientDao.removeBusinessClient(req.params.business_clients_id);
		res.status(200).json({ message: 'Business client removed successfully.' });
	} catch (error: any) {
		console.error('Error removing a business client:', error);
		res.status(400).json({ error: 'Error removing a business client', detail: error?.message ?? String(error) });
	}
}

export default {
	getAllBusinessClients,
	getBusinessClientById,
	getBusinessClientsByBusinessId,
	createBusinessClient,
	updateBusinessClient,
	removeBusinessClient,
};
