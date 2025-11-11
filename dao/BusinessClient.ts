import prisma from '../prisma/prisma.js';
import { getBusinessById } from './Business.js';
import {
	toBusinessClientDetailResponse,
	toBusinessClientResponse,
	toBusinessClientWithOrdersResponse,
} from '../schemas/dto/BusinessClient/businessClient.mappers.js';
import type {
	BusinessClientResponse,
	BusinessClientWithOrdersResponse,
	BusinessClientDetailResponse,
} from '../schemas/dto/BusinessClient/businessClient.dto.js';
import type {
	CreateBusinessClientRequest,
	UpdateBusinessClientRequest,
} from '../schemas/dto/BusinessClient/requests.js';
import type {
	BusinessClientDetailPrisma,
	BusinessClientWithOrdersPrisma,
	BusinessClientDefaultPrisma,
} from '../prisma/includes/businessClient.js';

/**
 * Get all business clients
 * @returns {Promise<BusinessClientDetailResponse[]>} Array of business clients
 */
export async function getAllBusinessClients(): Promise<BusinessClientDetailResponse[]> {
	try {
		const rows = await prisma.business_clients.findMany({
			include: {
				crm_module: { include: { business: true } },
				taxi_orders: true,
			},
		});

		return rows.map((r) => toBusinessClientDetailResponse(r as BusinessClientDetailPrisma));
	} catch (error) {
		console.error('Error retrieving all business clients:', error);
		throw new Error(String(error));
	}
}

/**
 * Get a business client by ID
 * @param {string} businessClientsId - The ID of the business client to retrieve
 * @returns {Promise<BusinessClientDetailResponse | null>} The business client
 */
export async function getBusinessClientById(businessClientsId: string): Promise<BusinessClientDetailResponse | null> {
	try {
		const row = await prisma.business_clients.findUnique({
			where: { business_clients_id: businessClientsId },
			include: { crm_module: { include: { business: true } }, taxi_orders: true },
		});

		return row ? toBusinessClientDetailResponse(row as BusinessClientDetailPrisma) : null;
	} catch (error) {
		console.error(`Error retrieving business client with ID ${businessClientsId}:`, error);
		throw new Error(String(error));
	}
}

/**
 * Get business clients by business ID
 * @param {string} businessId - The ID of the business
 * @returns {Promise<BusinessClientWithOrdersResponse[]>} Array of business clients for the business
 */
export async function getBusinessClientsByBusinessId(businessId: string): Promise<BusinessClientWithOrdersResponse[]> {
	try {
		const business = await getBusinessById(businessId);
		const rows = await prisma.business_clients.findMany({
			where: { crm_module_id: business.crm_module_id },
			include: { taxi_orders: true },
		});

		return rows.map((r: BusinessClientWithOrdersPrisma) =>
			toBusinessClientWithOrdersResponse(r as BusinessClientWithOrdersPrisma)
		);
	} catch (error) {
		console.error(`Error retrieving business clients for business ID ${businessId}:`, error);
		throw new Error(String(error));
	}
}

/**
 * Create a new business client
 * @param {CreateBusinessClientRequest} clientData - The data for the new business client
 * @returns {Promise<BusinessClientResponse>} The created business client
 */
export async function createBusinessClient(
	clientData: CreateBusinessClientRequest & { crm_module_id: string }
): Promise<BusinessClientResponse> {
	try {
		// Normalize telephone fields
		const { telephone_code, telephone_number } = clientData;

		// Construct the data object
		const data = {
			crm_module_id: clientData.crm_module_id,
			first_name: clientData.first_name,
			last_name: clientData.last_name,
			email: clientData.email,
			telephone: `${telephone_code}${telephone_number}`,
			telephone_code,
		};

		const row = await prisma.business_clients.create({ data });

		return toBusinessClientResponse(row as BusinessClientDefaultPrisma);
	} catch (error) {
		console.error('Error creating a business client:', error);
		throw new Error(String(error));
	}
}

/**
 * Update a business client
 * @param {string} businessClientsId - The ID of the business client to update
 * @param {UpdateBusinessClientRequest} updates - The data to update
 * @returns {Promise<BusinessClientResponse>} The updated business client
 */
export async function updateBusinessClient(
	businessClientsId: string,
	updates: UpdateBusinessClientRequest & { telephone?: string }
): Promise<BusinessClientResponse> {
	try {
		// If telephone_code and telephone_number are provided, update the telephone field as well
		if (updates.telephone_code && updates.telephone_number) {
			updates.telephone = `${updates.telephone_code}${updates.telephone_number}`;
		}

		const row = await prisma.business_clients.update({
			where: { business_clients_id: businessClientsId },
			data: updates,
		});

		return toBusinessClientResponse(row as BusinessClientDefaultPrisma);
	} catch (error) {
		console.error(`Error updating business client with ID ${businessClientsId}:`, error);
		throw new Error(String(error));
	}
}

/**
 * Delete a business client
 * @param {string} businessClientsId - The ID of the business client to delete
 * @returns {Promise<BusinessClientResponse>} The deleted business client
 */
export async function removeBusinessClient(businessClientsId: string): Promise<BusinessClientResponse> {
	try {
		const row = await prisma.business_clients.delete({ where: { business_clients_id: businessClientsId } });

		return toBusinessClientResponse(row as BusinessClientDefaultPrisma);
	} catch (error) {
		console.error(`Error removing business client with ID ${businessClientsId}:`, error);
		throw new Error(String(error));
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
