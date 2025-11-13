import prisma from '../../prisma/prisma';
import type {
	CustomerDAOResponse,
	CreateCustomerRequest,
	UpdateCustomerRequest,
	CustomerByCodeDAOResponse,
} from '../../schemas/dto/reservations/customer/customer.dto.js';
import { toCustomerDAOResponse, toCustomerDAOList } from '../../schemas/dto/reservations/customer/customer.mappers.js';
import { customerBase } from '../../prisma/includes/reservation/customer.js';

/**
 * Retrieves all customers for a given reservation module.
 * @param {string} reservationModuleId - The ID of the reservation module to retrieve customers for.
 * @returns {Promise<CustomerDAOResponse[]>} A promise that resolves to an array of customers.
 * @throws {Error} If there is an error retrieving the customers.
 */
export async function getCustomersByReservationModuleId(reservationModuleId: string): Promise<CustomerDAOResponse[]> {
	try {
		const customers = await prisma.customers.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: customerBase,
		});
		return toCustomerDAOList(customers);
	} catch (error) {
		throw new Error('Error retrieving customers');
	}
}
/**
 * Creates a new customer.
 * @param {CreateCustomerRequest} customerData - The data for the new customer.
 * @returns {Promise<CustomerDAOResponse>} A promise that resolves to the created customer.
 * @throws {Error} If there is an error creating the customer.
 */
export async function createCustomer(
	customerData: CreateCustomerRequest,
	reservationModuleId: string
): Promise<CustomerDAOResponse> {
	try {
		const userExists = await prisma.users.findUnique({
			where: { telephone: customerData.telephone },
		});
		const userRelation = userExists ? { user: { connect: { user_id: userExists.user_id } } } : {};
		const customer = await prisma.customers.create({
			data: {
				first_name: customerData.first_name,
				last_name: customerData.last_name,
				email: customerData.email,
				telephone: customerData.telephone,
				reservation_module: {
					connect: { reservation_module_id: reservationModuleId },
				},
				...userRelation,
			},
		});
		return toCustomerDAOResponse(customer);
	} catch (error) {
		throw new Error('Error creating customer');
	}
}

/**
 * Updates an existing customer.
 * @param {string} customerId - The ID of the customer to update.
 * @param {UpdateCustomerRequest} customerData - The data to update the customer with.
 * @returns {Promise<CustomerDAOResponse>} A promise that resolves to the updated customer.
 * @throws {Error} If there is an error updating the customer.
 */
export async function updateCustomer(
	customerId: string,
	customerData: UpdateCustomerRequest
): Promise<CustomerDAOResponse> {
	try {
		const customer = await prisma.customers.update({
			where: {
				customer_id: customerId,
			},
			data: {
				first_name: customerData.first_name,
				last_name: customerData.last_name,
				email: customerData.email,
				telephone: customerData.telephone,
			},
		});
		return toCustomerDAOResponse(customer);
	} catch (error) {
		throw new Error('Error updating customer');
	}
}

/**
 * Deletes a customer by its ID.
 * @param {string} customerId - The ID of the customer to delete.
 * @returns {Promise<void>} A promise that resolves when the customer is deleted.
 * @throws {Error} If there is an error deleting the customer.
 */
export async function deleteCustomer(customerId: string): Promise<void> {
	try {
		await prisma.customers.delete({
			where: {
				customer_id: customerId,
			},
		});
	} catch (error) {
		throw new Error(error instanceof Error ? error.message : 'Error deleting customer');
	}
}

/**
 * Retrieves a customer by its ID.
 * @param {string} customerId - The ID of the customer to retrieve.
 * @returns {Promise<CustomerDAOResponse | null>} A promise that resolves to the retrieved customer.
 * @throws {Error} If there is an error retrieving the customer.
 */
export async function getCustomerById(customerId: string): Promise<CustomerDAOResponse | null> {
	try {
		const customer = await prisma.customers.findUnique({
			where: {
				customer_id: customerId,
			},
			include: customerBase,
		});
		return customer ? toCustomerDAOResponse(customer) : null;
	} catch (error) {
		throw new Error('Error retrieving customer');
	}
}

/**
 * Retrieves a customer by its code.
 * @param {string} code - The code of the customer to retrieve.
 * @returns {Promise<CustomerByCodeDAOResponse | null>} A promise that resolves to the retrieved customer.
 * @throws {Error} If there is an error retrieving the customer.
 */
export async function getCustomerByCode(code: string): Promise<CustomerByCodeDAOResponse | null> {
	try {
		const customer = await prisma.customers.findUnique({
			where: {
				code: code,
			},
			include: {
				reservation_module: {
					include: {
						business: { include: { address: true } },
					},
				},
				bookings: {
					where: { status: 'reserved' },
					include: {
						service: true,
						employee: true,
						location: true,
					},
				},
			},
		});
		return customer as CustomerByCodeDAOResponse | null;
	} catch (error) {
		throw new Error('Error retrieving customer');
	}
}

export default {
	getCustomersByReservationModuleId,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	getCustomerById,
	getCustomerByCode,
};
