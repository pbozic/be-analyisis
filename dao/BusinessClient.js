import prisma from '../prisma/prisma.js';
import { getBusinessById } from './Business.js';
/**
 * Get all business clients
 * @returns {Promise<Array>} Array of business clients
 */
const getAllBusinessClients = async () => {
	try {
		return await prisma.business_clients.findMany({
			include: {
				business: true,
				taxi_orders: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving all business clients:', error);
		throw new Error(error);
	}
};
/**
 * Get a business client by ID
 * @param {string} businessClientsId - The ID of the business client to retrieve
 * @returns {Promise<Object>} The business client
 */
const getBusinessClientById = async (businessClientsId) => {
	try {
		return await prisma.business_clients.findUnique({
			where: { business_clients_id: businessClientsId },
			include: {
				business: true,
				taxi_orders: true,
			},
		});
	} catch (error) {
		console.error(`Error retrieving business client with ID ${businessClientsId}:`, error);
		throw new Error(error);
	}
};
/**
 * Get business clients by business ID
 * @param {string} businessId - The ID of the business
 * @returns {Promise<Array>} Array of business clients for the business
 */
const getBusinessClientsByBusinessId = async (businessId) => {
	try {
		const business = await getBusinessById(businessId);
		return await prisma.business_clients.findMany({
			where: { crm_module_id: business.crm_module_id },
			include: {
				taxi_orders: true,
			},
		});
	} catch (error) {
		console.error(`Error retrieving business clients for business ID ${businessId}:`, error);
		throw new Error(error);
	}
};
/**
 * Create a new business client
 * @param {Object} clientData - The data for the new business client
 * @returns {Promise<Object>} The created business client
 */
const createBusinessClient = async (clientData) => {
	try {
		// Normalize telephone fields
		const { telephone_code, telephone } = clientData;
		// Construct the data object
		const data = {
			crm_module_id: clientData.crm_module_id,
			first_name: clientData.first_name,
			last_name: clientData.last_name,
			email: clientData.email,
			telephone,
			telephone_code,
			// telephone_number,
		};
		return await prisma.business_clients.create({
			data,
		});
	} catch (error) {
		console.error('Error creating a business client:', error);
		throw new Error(error);
	}
};
/**
 * Update a business client
 * @param {string} businessClientsId - The ID of the business client to update
 * @param {Object} updates - The data to update
 * @returns {Promise<Object>} The updated business client
 */
const updateBusinessClient = async (businessClientsId, updates) => {
	try {
		// If telephone_code and telephone_number are provided, update the telephone field as well
		if (updates.telephone_code && updates.telephone_number) {
			updates.telephone = `${updates.telephone_code}${updates.telephone_number}`;
		}
		return await prisma.business_clients.update({
			where: { business_clients_id: businessClientsId },
			data: updates,
		});
	} catch (error) {
		console.error(`Error updating business client with ID ${businessClientsId}:`, error);
		throw new Error(error);
	}
};
/**
 * Delete a business client
 * @param {string} businessClientsId - The ID of the business client to delete
 * @returns {Promise<Object>} The deleted business client
 */
const removeBusinessClient = async (businessClientsId) => {
	try {
		return await prisma.business_clients.delete({
			where: { business_clients_id: businessClientsId },
		});
	} catch (error) {
		console.error(`Error removing business client with ID ${businessClientsId}:`, error);
		throw new Error(error);
	}
};
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
