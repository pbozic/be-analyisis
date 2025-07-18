import { Request, Response } from 'express';

import ServiceDao from '../../dao/reservation/Service.ts';
import { CreateServiceInput, UpdateServiceInput } from '../../types/reservation/Service.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';

/**
 * GET /reservation/services
 * @tag Reservation
 * @summary Get all reservation services
 * @description Retrieves all reservation services.
 * @operationId getReservationServices
 * @response 200 - Reservation services retrieved successfully
 * @responseContent {Services[]} 200.application/json
 * @response 500 - Error retrieving services
 * @prisma_model services
 */
export async function getServices(req: Request, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.body.reservation_module_id as string;
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
 * @requestBody {CreateServiceInput} requestBody - The service data to create.
 * @response 201 - Service created successfully
 * @responseContent {Service} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating service
 * @prisma_model services
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
 * DELETE /reservation/services/{service_id}
 * @tag Reservation
 * @summary Delete a reservation service
 * @description Deletes a reservation service by its ID.
 * @operationId deleteReservationService
 * @pathParam {string} service_id - The ID of the service to delete.
 * @response 204 - Service deleted successfully
 * @response 404 - Service not found
 * @response 500 - Error deleting service
 * @prisma_model services
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
 * PUT /reservation/services/{service_id}
 * @tag Reservation
 * @summary Update a reservation service
 * @description Updates a reservation service by its ID.
 * @operationId updateReservationService
 * @pathParam {string} service_id - The ID of the service to update.
 * @requestBody {UpdateServiceInput} requestBody - The updated service data.
 * @response 200 - Service updated successfully
 * @responseContent {Service} 200.application/json
 * @response 400 - Invalid input data
 * @response 404 - Service not found
 * @response 500 - Error updating service
 * @prisma_model services
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
 * GET /reservation/services/category/{service_category_id}
 * @tag Reservation
 * @summary Get services by service category ID
 * @description Retrieves all services associated with a specific service category ID.
 * @operationId getServicesByCategoryId
 * @pathParam {string} service_category_id - The ID of the service category to retrieve services for.
 * @response 200 - Services retrieved successfully
 * @responseContent {Service[]} 200.application/json
 * @response 404 - No services found for this category
 * @response 500 - Error retrieving services by category
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
 * POST /reservation/services/{service_id}/connect-category/{service_category_id}
 * @tag Reservation
 * @summary Connect a service to a service category
 * @description Connects a service to a specific service category.
 * @operationId connectServiceToCategory
 * @pathParam {string} service_id - The ID of the service to connect.
 * @pathParam {string} service_category_id - The ID of the service category to connect to.
 * @response 200 - Service connected to category successfully
 * @responseContent {Service} 200.application/json
 * @response 404 - Service or category not found
 * @response 500 - Error connecting service to category
 * @prisma_model services
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
 * DELETE /reservation/services/{service_id}/disconnect-category
 * @tag Reservation
 * @summary Disconnect a service from its service category
 * @description Disconnects a service from its current service category.
 * @operationId disconnectServiceFromCategory
 * @pathParam {string} service_id - The ID of the service to disconnect.
 * @response 200 - Service disconnected from category successfully
 * @responseContent {Service} 200.application/json
 * @response 404 - Service not found
 * @response 500 - Error disconnecting service from category
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

export default {
	getServices,
	createService,
	deleteService,
	updateService,
	getServiceById,
	connectServiceToCategory,
	disconnectServiceFromCategory,
	getServicesByCategoryId,
};
