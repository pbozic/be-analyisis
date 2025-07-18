import prisma from '../../prisma/prisma';
import type { Customer, CreateCustomerInput, UpdateCustomerInput } from '../../types/reservation/Customer.ts';
/**
 * Retrieves all customers for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve customers for.
 * @returns {Promise<Customer[]>} A promise that resolves to an array of customers.
 * @throws {Error} If there is an error retrieving the customers.
 */
export async function getCustomersByReservationModuleId(reservationModuleId: string): Promise<Customer[]> {
	try {
		let customers = await prisma.customers.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				reservation_module: true,
				bookings: true,
			},
		});
		return customers;
	} catch (error) {
		throw new Error('Error retrieving customers');
	}
}
/**
 * Creates a new customer.
 * @param {Customer} customerData - The data for the new customer.
 * @returns {Promise<Customer>} A promise that resolves to the created customer.
 * @throws {Error} If there is an error creating the customer.
 */
export async function createCustomer(
	customerData: CreateCustomerInput,
	reservationModuleId: string
): Promise<Customer> {
	try {
		let userExists = await prisma.users.findUnique({
			where: { telephone: customerData.phone },
		});
		let userRelation = userExists ? { user: { connect: { user_id: userExists.user_id } } } : {};
		let customer = await prisma.customers.create({
			data: {
				first_name: customerData.first_name,
				last_name: customerData.last_name,
				email: customerData.email,
				telephone: customerData.phone,
				reservation_module: {
					connect: { reservation_module_id: reservationModuleId },
				},
				...userRelation,
			},
		});
		return customer;
	} catch (error) {
		throw new Error('Error creating customer');
	}
}

/**
 * Updates an existing customer.
 * @param {string} customerId - The ID of the customer to update.
 * @param {UpdateCustomerInput} customerData - The data to update the customer with.
 * @returns {Promise<Customer>} A promise that resolves to the updated customer.
 * @throws {Error} If there is an error updating the customer.
 */
export async function updateCustomer(customerId: string, customerData: UpdateCustomerInput): Promise<Customer> {
	try {
		let customer = await prisma.customers.update({
			where: {
				customer_id: customerId,
			},
			data: {
				first_name: customerData.first_name,
				last_name: customerData.last_name,
				email: customerData.email,
				telephone: customerData.phone,
			},
		});
		return customer;
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
		await prisma.customer.delete({
			where: {
				customer_id: customerId,
			},
		});
	} catch (error) {
		throw new Error('Error deleting customer');
	}
}

/**
 * Retrieves a customer by its ID.
 * @param {string} customerId - The ID of the customer to retrieve.
 * @returns {Promise<Customer>} A promise that resolves to the retrieved customer.
 * @throws {Error} If there is an error retrieving the customer.
 */
export async function getCustomerById(customerId: string): Promise<Customer | null> {
	try {
		let customer = await prisma.customers.findUnique({
			where: {
				customer_id: customerId,
			},
			include: {
				reservation_module: true,
				bookings: true,
			},
		});
		return customer;
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
};
