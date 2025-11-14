import { Response } from 'express';

import CustomerDao from '../../dao/reservation/Customer.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';
import type {
	CreateCustomerRequest,
	UpdateCustomerRequest,
} from '../../schemas/dto/reservations/customer/customer.dto';

// Import DTO types for API documentation
//import type { CustomerDAOResponse, CustomerByCodeDAOResponse } from '../../schemas/dto/reservations/customer/customer.dto.js';
/**
 * GET /reservation/customers
 * @tag Reservation
 * @summary Get all reservation customers for a business
 * @description Retrieves all reservation customers for a specific business.
 * @operationId getReservationCustomers
 * @response 200 - Reservation customers retrieved successfully
 * @responseContent {CustomerDAOResponse[]} 200.application/json
 * @response 500 - Error retrieving customers
 * @prisma_model customers
 */
export async function getCustomers(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let customers = await CustomerDao.getCustomersByReservationModuleId(reservationModuleId);
		res.status(200).json(customers);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving customers', error });
	}
}

/**
 * POST /reservation/customers
 * @tag Reservation
 * @summary Create a new reservation customer
 * @description Creates a new reservation customer.
 * @operationId createReservationCustomer
 * @bodyContent {CreateCustomerRequest} application/json
 * @response 201 - Customer created successfully
 * @responseContent {CustomerDAOResponse} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating customer
 * @prisma_model customers
 */
export async function createCustomer(req: ValidatedRequest<CreateCustomerRequest>, res: Response): Promise<void> {
	try {
		let customerData = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		if (!reservationModuleId) {
			res.status(400).json({ message: 'User has no reservation module' });
			return;
		}
		let customer = await CustomerDao.createCustomer(customerData, reservationModuleId);
		res.status(201).json(customer);
	} catch (error) {
		res.status(500).json({ message: 'Error creating customer', error });
	}
}

/**
 * PUT /reservation/customers/:customer_id
 * @tag Reservation
 * @summary Update a reservation customer
 * @description Updates an existing reservation customer.
 * @operationId updateReservationCustomer
 * @pathParam {string} customer_id - The ID of the customer to update.
 * @bodyContent {UpdateCustomerRequest} application/json
 * @response 200 - Customer updated successfully
 * @responseContent {CustomerDAOResponse} 200.application/json
 * @response 400 - Invalid input data
 * @response 404 - Customer not found
 * @response 500 - Error updating customer
 * @prisma_model customers
 */
export async function updateCustomer(
	req: ValidatedRequest<UpdateCustomerRequest, { customer_id: string }>,
	res: Response
): Promise<void> {
	try {
		let customerId = req.params.customer_id;
		let customerData = req.body;
		let customer = await CustomerDao.updateCustomer(customerId, customerData);
		res.status(200).json(customer);
	} catch (error) {
		res.status(500).json({ message: 'Error updating customer', error });
	}
}

/**
 * DELETE /reservation/customers/:customer_id
 * @tag Reservation
 * @summary Delete a reservation customer
 * @description Deletes a reservation customer by its ID.
 * @operationId deleteReservationCustomer
 * @pathParam {string} customer_id - The ID of the customer to delete.
 * @response 204 - Customer deleted successfully
 * @response 404 - Customer not found
 * @response 500 - Error deleting customer
 * @prisma_model customers
 */
export async function deleteCustomer(
	req: ValidatedRequest<null, { customer_id: string }>,
	res: Response
): Promise<void> {
	try {
		let customerId = req.params.customer_id as string;
		await CustomerDao.deleteCustomer(customerId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({
			message: 'Error retrieving service categories',
			m: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /reservation/customers/:customer_id
 * @tag Reservation
 * @summary Get a reservation customer by ID
 * @description Retrieves a reservation customer by its ID.
 * @operationId getReservationCustomerById
 * @pathParam {string} customer_id - The ID of the customer to retrieve.
 * @response 200 - Customer retrieved successfully
 * @responseContent {CustomerDAOResponse} 200.application/json
 * @response 404 - Customer not found
 * @response 500 - Error retrieving customer
 * @prisma_model customers
 */

export async function getCustomerById(
	req: ValidatedRequest<null, { customer_id: string }>,
	res: Response
): Promise<void> {
	try {
		let customerId = req.params.customer_id as string;
		let customer = await CustomerDao.getCustomerById(customerId);
		if (!customer) {
			res.status(404).json({ message: 'Customer not found' });
			return;
		}
		res.status(200).json(customer);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving customer', error });
	}
}

/**
 * GET /reservation/booking/customer/:code
 * @tag Reservation
 * @summary Get a reservation customer by code
 * @description Retrieves a reservation customer by their unique booking code.
 * @operationId getReservationCustomerByCode
 * @pathParam {string} code - Customer code from booking link.
 * @response 200 - Customer retrieved successfully
 * @responseContent {CustomerByCodeDAOResponse} 200.application/json
 * @response 404 - Customer not found
 * @response 500 - Error retrieving customer
 * @prisma_model customers
 */

export async function getCustomerByCode(req: ValidatedRequest<null, { code: string }>, res: Response): Promise<void> {
	try {
		let customerCode = req.params.code as string;
		let customer = await CustomerDao.getCustomerByCode(customerCode);
		if (!customer) {
			res.status(404).json({ message: 'Customer not found' });
			return;
		}
		res.status(200).json(customer);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving customer', error });
	}
}

export default {
	getCustomers,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	getCustomerById,
	getCustomerByCode,
};
