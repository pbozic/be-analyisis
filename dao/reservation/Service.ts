import prisma from '../../prisma/prisma';
import type { Service, CreateServiceInput, UpdateServiceInput } from '../../types/reservation/Service.ts';
/**
 * Retrieves all services for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve services for.
 * @returns {Promise<Service[]>} A promise that resolves to an array of services.
 * @throws {Error} If there is an error retrieving the services.
 */
export async function getServicesByReservationModuleId(reservationModuleId: string): Promise<Service[]> {
	try {
		let services = await prisma.service.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				service_category: true,
				bookings: true,
				assigned_employees: true,
			},
		});
		return services;
	} catch (error) {
		throw new Error('Error retrieving services');
	}
}

/**
 * Creates a new service.
 * @param {CreateServiceInput} serviceData - The data for the new service.
 * @returns {Promise<Service>} A promise that resolves to the created service.
 * @throws {Error} If there is an error creating the service.
 */
export async function createService(serviceData: CreateServiceInput): Promise<Service> {
	try {
		let service = await prisma.service.create({
			data: {
				name: serviceData.name,
				description: serviceData.description,
				image_url: serviceData.image_url,
				price_cents: serviceData.price_cents,
				discount_percent: serviceData.discount_percent,
				discount_amount: serviceData.discount_amount,
				duration_minutes: serviceData.duration_minutes,
				available_online: serviceData.available_online,
				reservation_module: {
					connect: { reservation_module_id: serviceData.reservation_module_id },
				},
				service_category: {
					connect: serviceData.service_category_id
						? { service_category_id: serviceData.service_category_id }
						: undefined,
				},
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error creating service');
	}
}

/**
 * Updates an existing service.
 * @param {string} serviceId - The ID of the service to update.
 * @param {Partial<CreateServiceInput>} serviceData - The data to update the service with.
 * @returns {Promise<Service>} A promise that resolves to the updated service.
 * @throws {Error} If there is an error updating the service.
 */

export async function updateService(serviceId: string, serviceData: UpdateServiceInput): Promise<Service> {
	try {
		const current = await prisma.service.findUnique({
			where: { service_id: serviceId },
			select: { service_category_id: true },
		});

		const shouldUpdateRelation = current?.service_category_id !== serviceData.service_category_id;

		let service = await prisma.service.update({
			where: { service_id: serviceId },
			data: {
				...serviceData,
				...(shouldUpdateRelation && {
					service_category: serviceData.service_category_id
						? { connect: { service_category_id: serviceData.service_category_id } }
						: { disconnect: true },
				}),
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error updating service');
	}
}

/**
 * Deletes a service by its ID.
 * @param {string} serviceId - The ID of the service to delete.
 * @returns {Promise<void>} A promise that resolves when the service is deleted.
 * @throws {Error} If there is an error deleting the service.
 */

export async function deleteService(serviceId: string): Promise<void> {
	try {
		await prisma.service.delete({
			where: { service_id: serviceId },
		});
	} catch (error) {
		throw new Error('Error deleting service');
	}
}

/**
 * Retrieves a service by its ID.
 * @param {string} serviceId - The ID of the service to retrieve.
 * @returns {Promise<Service | null>} A promise that resolves to the service or null if not found.
 * @throws {Error} If there is an error retrieving the service.
 */

export async function getServiceById(serviceId: string): Promise<Service | null> {
	try {
		let service = await prisma.service.findUnique({
			where: { service_id: serviceId },
			include: {
				service_category: true,
				bookings: true,
				assigned_employees: true,
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error retrieving service');
	}
}

/**
 * Connects a service to a service category.
 * @param {string} serviceId - The ID of the service to connect.
 * @param {string} serviceCategoryId - The ID of the service category to connect to.
 * @returns {Promise<Service>} A promise that resolves to the updated service.
 * @throws {Error} If there is an error connecting the service to the category.
 */

export async function connectServiceToCategory(serviceId: string, serviceCategoryId: string): Promise<Service> {
	try {
		let service = await prisma.service.update({
			where: { service_id: serviceId },
			data: {
				service_category: {
					connect: { service_category_id: serviceCategoryId },
				},
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error connecting service to category');
	}
}

/**
 * Disconnects a service from its service category.
 * @param {string} serviceId - The ID of the service to disconnect.
 * @returns {Promise<Service>} A promise that resolves to the updated service.
 * @throws {Error} If there is an error disconnecting the service from the category.
 */

export async function disconnectServiceFromCategory(serviceId: string): Promise<Service> {
	try {
		let service = await prisma.service.update({
			where: { service_id: serviceId },
			data: {
				service_category: {
					disconnect: true,
				},
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error disconnecting service from category');
	}
}

export async function getServicesByCategoryId(serviceCategoryId: string): Promise<Service[]> {
	try {
		let services = await prisma.service.findMany({
			where: { service_category_id: serviceCategoryId },
			include: {
				service_category: true,
				bookings: true,
				assigned_employees: true,
			},
		});
		return services;
	} catch (error) {
		throw new Error('Error retrieving services by category');
	}
}
export default {
	getServicesByReservationModuleId,
	createService,
	updateService,
	deleteService,
	getServiceById,
	connectServiceToCategory,
	disconnectServiceFromCategory,
	getServicesByCategoryId,
	// Add other service-related methods here
};
