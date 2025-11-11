import { Request, Response } from 'express';

import ServiceCategoryDao from '../../dao/reservation/ServiceCategory.ts';
import { CreateServiceCategoryInput, UpdateServiceCategoryInput } from '../../types/reservations/ServiceCategory.ts';
import { ValidatedRequest } from '../../types/validatedRequest.ts';

/**
 * GET /reservation/service-categories
 * @tag Reservation
 * @summary Get all reservation service categories
 * @description Retrieves all reservation service categories.
 * @operationId getReservationServiceCategories
 * @response 200 - Reservation service categories retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving service categories
 * @prisma_model service_category
 */
export async function getServiceCategories(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let serviceCategories = await ServiceCategoryDao.getServiceCategoriesByReservationModuleId(reservationModuleId);
		res.status(200).json(serviceCategories);
	} catch (error) {
		res.status(500).json({
			message: 'Error retrieving service categories',
			m: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}
/**
 * POST /reservation/service-categories
 * @tag Reservation
 * @summary Create a new reservation service category
 * @description Creates a new reservation service category.
 * @operationId createReservationServiceCategory
 * @bodyContent {object} application/json
 * @response 201 - Service category created successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Invalid input data
 * @response 500 - Error creating service category
 * @prisma_model service_category
 */
export async function createServiceCategory(
	req: ValidatedRequest<CreateServiceCategoryInput>,
	res: Response
): Promise<void> {
	try {
		let serviceCategoryData = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let serviceCategory = await ServiceCategoryDao.createServiceCategory(serviceCategoryData, reservationModuleId);
		res.status(201).json(serviceCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error creating service category', error });
	}
}

/**
 * DELETE /reservation/service-categories/:service_category_id
 * @tag Reservation
 * @summary Delete a reservation service category
 * @description Deletes a reservation service category by its ID.
 * @operationId deleteReservationServiceCategory
 * @pathParam {string} service_category_id - The ID of the service category to delete.
 * @response 204 - Service category deleted successfully
 * @response 404 - Service category not found
 * @response 500 - Error deleting service category
 * @prisma_model service_category
 */
export async function deleteServiceCategory(req: Request, res: Response): Promise<void> {
	try {
		let serviceCategoryId = req.params.service_category_id as string;
		await ServiceCategoryDao.deleteServiceCategory(serviceCategoryId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting service category', error });
	}
}

/**
 * PUT /reservation/service-categories/:service_category_id
 * @tag Reservation
 * @summary Update a reservation service category
 * @description Updates a reservation service category by its ID.
 * @operationId updateReservationServiceCategory
 * @pathParam {string} service_category_id - The ID of the service category to update.
 * @bodyContent {object} application/json
 * @response 200 - Service category updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid input data
 * @response 404 - Service category not found
 * @response 500 - Error updating service category
 * @prisma_model service_category
 */
export async function updateServiceCategory(
	req: ValidatedRequest<UpdateServiceCategoryInput, { service_category_id: string }>,
	res: Response
): Promise<void> {
	try {
		let serviceCategoryId = req.params.service_category_id as string;
		let serviceCategoryData = req.body;
		let serviceCategory = await ServiceCategoryDao.updateServiceCategory(serviceCategoryId, serviceCategoryData);
		res.status(200).json(serviceCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error updating service category', error });
	}
}
/** * GET /reservation/service-categories/:service_category_id
 * @tag Reservation
 * @summary Get a reservation service category by ID
 * @description Retrieves a reservation service category by its ID.
 * @operationId getReservationServiceCategoryById
 * @pathParam {string} service_category_id - The ID of the service category to retrieve.
 * @response 200 - Service category retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Service category not found
 * @response 500 - Error retrieving service category
 * @prisma_model service_category
 */
export async function getServiceCategoryById(req: Request, res: Response): Promise<void> {
	try {
		let serviceCategoryId = req.params.service_category_id as string;
		let serviceCategory = await ServiceCategoryDao.getServiceCategoryById(serviceCategoryId);
		if (!serviceCategory) {
			res.status(404).json({ message: 'Service category not found' });
			return;
		}
		res.status(200).json(serviceCategory);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving service category', error });
	}
}

export default {
	getServiceCategories,
	createServiceCategory,
	updateServiceCategory,
	getServiceCategoryById,
	deleteServiceCategory,
};
