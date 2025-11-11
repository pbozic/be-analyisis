import { Request, Response } from 'express';

import ServiceDao from '../../dao/reservation/Service.ts';
import ServiceCategoryDao from '../../dao/reservation/ServiceCategory.ts';
import EmployeeDao from '../../dao/reservation/Employee.ts';
import TaxDao from '../../dao/Tax.ts';
import {
	CreateServiceInput,
	UpdateServiceInput,
	CreateServiceWithEmployeesInput,
	UpdateServiceWithEmployeesInput,
} from '../../types/reservations/Service.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';

/**
 * GET /reservation/services
 * @tag Reservation
 * @summary Get all reservation services
 * @description Retrieves all reservation services.
 * @operationId getReservationServices
 * @response 200 - Reservation services retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving services
 * @prisma_model service
 */
export async function getServices(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let services = await ServiceDao.getServicesByReservationModuleId(reservationModuleId);
		res.status(200).json(services);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving services', error });
	}
}

/**
 * POST /reservation/services
 * @tag Reservation
 * @summary Create a new reservation service
 * @description Creates a new reservation service.
 * @operationId createReservationService
 * @bodyContent {object} application/json
 * @response 201 - Service created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating service
 * @prisma_model service
 * @prisma_model reservation_module
 */
export async function createService(req: ValidatedRequest<CreateServiceInput>, res: Response): Promise<void> {
	try {
		let serviceData = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let service = await ServiceDao.createService(serviceData, reservationModuleId);
		res.status(201).json(service);
	} catch (error) {
		res.status(500).json({ message: 'Error creating service', error });
	}
}

/**
 * DELETE /reservation/services/:service_id
 * @tag Reservation
 * @summary Delete a reservation service
 * @description Deletes a reservation service by its ID.
 * @operationId deleteReservationService
 * @pathParam {string} service_id - The ID of the service to delete.
 * @response 204 - Service deleted successfully
 * @response 404 - Service not found
 * @response 500 - Error deleting service
 * @prisma_model service
 */
export async function deleteService(req: Request, res: Response): Promise<void> {
	try {
		let serviceId = req.params.service_id as string;
		await ServiceDao.deleteService(serviceId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting service', error });
	}
}
/**
 * PUT /reservation/services/:service_id
 * @tag Reservation
 * @summary Update a reservation service
 * @description Updates a reservation service by its ID.
 * @operationId updateReservationService
 * @pathParam {string} service_id - The ID of the service to update.
 * @bodyContent {object} application/json
 * @response 200 - Service updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid input data
 * @response 404 - Service not found
 * @response 500 - Error updating service
 * @prisma_model service
 */
export async function updateService(
	req: ValidatedRequest<UpdateServiceInput, { service_id: string }>,
	res: Response
): Promise<void> {
	try {
		let serviceId = req.params.service_id;
		let serviceData = req.body;
		let service = await ServiceDao.updateService(serviceId, serviceData);
		res.status(200).json(service);
	} catch (error) {
		res.status(500).json({ message: 'Error updating service', error });
	}
}

export async function getServiceById(req: Request, res: Response): Promise<void> {
	try {
		let serviceId = req.params.service_id as string;
		let service = await ServiceDao.getServiceById(serviceId);
		if (!service) {
			res.status(404).json({ message: 'Service not found' });
			return;
		}
		res.status(200).json(service);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving service', error });
	}
}

/**
 * GET /reservation/services/category/:service_category_id
 * @tag Reservation
 * @summary Get services by service category ID
 * @description Retrieves all services associated with a specific service category ID.
 * @operationId getServicesByCategoryId
 * @pathParam {string} service_category_id - The ID of the service category to retrieve services for.
 * @response 200 - Services retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - No services found for this category
 * @response 500 - Error retrieving services by category
 * @prisma_model service
 * @prisma_model service_category
 */

export async function getServicesByCategoryId(req: Request, res: Response): Promise<void> {
	try {
		let serviceCategoryId = req.params.service_category_id as string;
		let services = await ServiceDao.getServicesByCategoryId(serviceCategoryId);
		if (!services || services.length === 0) {
			res.status(404).json({ message: 'No services found for this category' });
			return;
		}
		res.status(200).json(services);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving services by category', error });
	}
}

/**
 * POST /reservation/services/:service_id/connect-category/:service_category_id
 * @tag Reservation
 * @summary Connect a service to a service category
 * @description Connects a service to a specific service category.
 * @operationId connectServiceToCategory
 * @pathParam {string} service_id - The ID of the service to connect.
 * @pathParam {string} service_category_id - The ID of the service category to connect to.
 * @response 200 - Service connected to category successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Service or category not found
 * @response 500 - Error connecting service to category
 * @prisma_model service
 * @prisma_model service_category
 */
export async function connectServiceToCategory(
	req: ValidatedRequest<null, { service_id: string; service_category_id: string }>,
	res: Response
): Promise<void> {
	try {
		let { service_id, service_category_id } = req.params;
		let service = await ServiceDao.connectServiceToCategory(service_id, service_category_id);
		res.status(200).json(service);
	} catch (error) {
		res.status(500).json({ message: 'Error connecting service to category', error });
	}
}

/**
 * DELETE /reservation/services/:service_id/disconnect-category
 * @tag Reservation
 * @summary Disconnect a service from its service category
 * @description Disconnects a service from its current service category.
 * @operationId disconnectServiceFromCategory
 * @pathParam {string} service_id - The ID of the service to disconnect.
 * @response 200 - Service disconnected from category successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Service not found
 * @response 500 - Error disconnecting service from category
 * @prisma_model service
 */

export async function disconnectServiceFromCategory(
	req: ValidatedRequest<null, { service_id: string }>,
	res: Response
): Promise<void> {
	try {
		let { service_id } = req.params;
		let service = await ServiceDao.disconnectServiceFromCategory(service_id);
		res.status(200).json(service);
	} catch (error) {
		res.status(500).json({ message: 'Error disconnecting service from category', error });
	}
}

/**
 * GET /reservation/services/form-data
 * @tag Reservation
 * @summary Get all data for service form
 * @description Retrieves all data needed for the service creation/edit form.
 * @operationId getDataForServiceForm
 * @response 200 - Data retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving data
 * @prisma_model service_category
 * @prisma_model employee
 * @prisma_model tax_rates
 */
export async function getDataForServiceForm(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let serviceCategories = await ServiceCategoryDao.getServiceCategoriesByReservationModuleId(reservationModuleId);
		let employees = await EmployeeDao.getEmployeesByReservationModuleId(reservationModuleId);
		let taxes = await TaxDao.getActiveTaxRates();

		res.status(200).json({ serviceCategories, employees, taxes });
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving data for service form', error });
	}
}

/**
 * POST /reservation/services/service-with-employees
 * @tag Reservation
 * @summary Create a new reservation service with employees
 * @description Creates a new reservation service along with its assigned employees.
 * @operationId createServiceWithData
 * @bodyContent {object} application/json
 * @response 200 - Schedule created successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Related entity not found
 * @response 500 - Error creating schedule
 * @prisma_model service
 * @prisma_model service_assignment
 * @prisma_model employee
 */
export async function createServiceWithData(
	req: ValidatedRequest<CreateServiceWithEmployeesInput>,
	res: Response
): Promise<void> {
	try {
		const { formData, added } = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let service = await ServiceDao.createService(formData, reservationModuleId);
		const serviceId = service.service_id;
		const createdEmployees = await Promise.all(
			added.map(async (el) => {
				let data = await ServiceDao.createServiceAssigment(el, serviceId);
				return data;
			})
		);
		res.status(200).json({ service, createdEmployees });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unknown error';
		res.status(500).json({ message: 'Error creating service with employees', error: message });
	}
}

/**
 * PUT /reservation/services/service-with-employees/:service_id
 * @tag Reservation
 * @summary Update a reservation service with employees
 * @description Updates a reservation service by its ID along with its assigned employees.
 * @operationId updateServiceWithData
 * @pathParam {string} service_id - The ID of the service to update.
 * @bodyContent {object} application/json
 * @response 200 - Service updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid input data
 * @response 404 - Service not found
 * @response 500 - Error updating service
 * @prisma_model service
 * @prisma_model service_assignment
 */
export async function updateServiceWithData(
	req: ValidatedRequest<UpdateServiceWithEmployeesInput, { service_id: string }>,
	res: Response
): Promise<void> {
	try {
		let serviceId = req.params.service_id;
		const { formData, added, removed } = req.body;
		let service = Object.keys(formData).length !== 0 ? await ServiceDao.updateService(serviceId, formData) : {};
		const removedEmployees = await Promise.all(
			removed.map(async (el) => {
				let data = await ServiceDao.deleteServiceAssigment(el, serviceId);
				return {
					data,
				};
			})
		);
		const createdEmployees = await Promise.all(
			added.map(async (el) => {
				let data = await ServiceDao.createServiceAssigment(el, serviceId);
				return data;
			})
		);
		res.status(200).json({ service, createdEmployees, removedEmployees });
	} catch (error) {
		res.status(500).json({ message: 'Error updating service', error });
	}
}

export default {
	getServices,
	createService,
	deleteService,
	updateService,
	getServiceById,
	connectServiceToCategory,
	disconnectServiceFromCategory,
	getServicesByCategoryId,
	getDataForServiceForm,
	createServiceWithData,
	updateServiceWithData,
};
