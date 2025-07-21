import prisma from '../../prisma/prisma';
import type {
	CreateServiceCategoryInput,
	ServiceCategory,
	UpdateServiceCategoryInput,
} from '../../types/reservation/ServiceCategory.ts';

/**
 * Retrieves all service categories for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve service categories for.
 * @returns {Promise<ServiceCategory[]>} A promise that resolves to an array of service categories.
 * @throws {Error} If there is an error retrieving the service categories.
 */
export async function getServiceCategoriesByReservationModuleId(
	reservationModuleId: string
): Promise<ServiceCategory[]> {
	try {
		let serviceCategories = await prisma.service_category.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				services: true,
			},
		});
		return serviceCategories;
	} catch (error) {
		throw new Error('Error retrieving service categories');
	}
}
/**
 * Creates a new service category.
 * @param {CreateServiceCategoryInput} serviceCategoryData - The data for the new service category.
 * @returns {Promise<ServiceCategory>} A promise that resolves to the created service category.
 * @throws {Error} If there is an error creating the service category.
 */
export async function createServiceCategory(
	serviceCategoryData: CreateServiceCategoryInput,
	reservationModuleId: string
): Promise<ServiceCategory> {
	try {
		const parentRelation = serviceCategoryData.parent_id
			? { parent: { connect: { parent_id: serviceCategoryData.parent_id } } }
			: {};
		let serviceCategory = await prisma.service_category.create({
			data: {
				name: serviceCategoryData.name,
				color: serviceCategoryData.color,
				...parentRelation,
				reservation_module: {
					connect: { reservation_module_id: reservationModuleId },
				},
			},
		});
		return serviceCategory;
	} catch (error) {
		throw new Error('Error creating service category');
	}
}

/**
 * Updates an existing service category.
 * @param {string} serviceCategoryId - The ID of the service category to update.
 * @param {ServiceCategory} serviceCategoryData - The data to update the service category with.
 * @returns {Promise<ServiceCategory>} A promise that resolves to the updated service category.
 * @throws {Error} If there is an error updating the service category.
 */
export async function updateServiceCategory(
	serviceCategoryId: string,
	serviceCategoryData: UpdateServiceCategoryInput
): Promise<ServiceCategory> {
	try {
		const parentRelation = serviceCategoryData.parent_id
			? { parent: { connect: { parent_id: serviceCategoryData.parent_id } } }
			: { parent: { disconnect: true } };
		let serviceCategory = await prisma.service_category.update({
			where: { service_category_id: serviceCategoryId },
			data: {
				name: serviceCategoryData.name,
				color: serviceCategoryData.color,
				...parentRelation,
			},
		});
		return serviceCategory;
	} catch (error) {
		throw new Error('Error updating service category');
	}
}
/**
 * Deletes a service category by its ID.
 * @param {string} serviceCategoryId - The ID of the service category to delete.
 * @returns {Promise<void>} A promise that resolves when the service category is deleted.
 * @throws {Error} If there is an error deleting the service category.
 */
export async function deleteServiceCategory(serviceCategoryId: string): Promise<void> {
	try {
		await prisma.service_category.delete({
			where: { service_category_id: serviceCategoryId },
		});
	} catch (error) {
		throw new Error('Error deleting service category');
	}
}

/**
 * Retrieves a service category by its ID.
 * @param {string} serviceCategoryId - The ID of the service category to retrieve.
 * @returns {Promise<ServiceCategory | null>} A promise that resolves to the service category, or null if not found.
 * @throws {Error} If there is an error retrieving the service category.
 */
export async function getServiceCategoryById(serviceCategoryId: string): Promise<ServiceCategory | null> {
	try {
		let serviceCategory = await prisma.service_category.findUnique({
			where: { service_category_id: serviceCategoryId },
			include: {
				services: true,
				parent: true,
				children: true,
			},
		});
		return serviceCategory;
	} catch (error) {
		throw new Error('Error retrieving service category');
	}
}
export default {
	getServiceCategoriesByReservationModuleId,
	createServiceCategory,
	updateServiceCategory,
	deleteServiceCategory,
	getServiceCategoryById,
};
