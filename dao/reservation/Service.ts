import prisma from '../../prisma/prisma';
import type { Service, CreateServiceInput, UpdateServiceInput } from '../../types/reservations/Service.ts';
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
export async function createService(serviceData: CreateServiceInput, reservationModuleId: string): Promise<Service> {
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
				tax_rate: {
					connect: serviceData.tax_rate_id ? { tax_rates_id: serviceData.tax_rate_id } : undefined,
				},
				reservation_module: {
					connect: { reservation_module_id: reservationModuleId },
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
/**
 * Retrieves all services for a given service category ID.
 *
 * @param {string} serviceCategoryId - The ID of the service category to retrieve services for.
 * @returns {Promise<Service[]>} A promise that resolves to an array of services.
 */
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

/**
 * Creates a new service assignment to an employee.
 * @param {string} employee_id - The ID of the employee to assign the service to.
 * @param {string} service_id - The ID of the service to be assigned.
 * @returns {Promise<Service>} A promise that resolves to the created service assignment.
 * @throws {Error} If there is an error creating the service assignment.
 */
export async function createServiceAssigment(employee_id: string, service_id: string): Promise<Service> {
	try {
		let serviceAssignment = await prisma.service_assignment.create({
			data: {
				employee: {
					connect: {
						employee_id: employee_id,
					},
				},
				service: {
					connect: {
						service_id: service_id,
					},
				},
			},
		});
		return serviceAssignment;
	} catch (error) {
		throw new Error('Error creating service assignment');
	}
}

/**
 * Deletes a service assignment from an employee.
 * @param {string} employee_id - The ID of the employee to assign the service to.
 * @param {string} service_id - The ID of the service to be assigned.
 * @returns {Promise<void>} A promise that resolves when the service assignment is deleted.
 * @throws {Error} If there is an error deleting the service assignment.
 */

export async function deleteServiceAssigment(employee_id: string, service_id: string): Promise<void> {
	try {
		await prisma.service_assignment.delete({
			where: {
				employee_id_service_id: {
					employee_id,
					service_id,
				},
			},
		});
	} catch (error) {
		throw new Error('Error deleting service assignment');
	}
}

/**
 * Retrieves all services for a given reservation module ID.
 * @param {string} reservationModuleId - The ID of the reservation module to retrieve services for.
 * @returns {Promise<Service[]>} A promise that resolves to an array of services.
 * @throws {Error} If there is an error retrieving the services.
 */
export async function getServicesByReservationId(reservationModuleId: string): Promise<Service[]> {
	try {
		let services = await prisma.service.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				service_category: true,
				assigned_employees: true,
			},
		});
		return services;
	} catch (error) {
		throw new Error('Error retrieving services');
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
	createServiceAssigment,
	deleteServiceAssigment,
	getServicesByReservationId,
	// Add other service-related methods here
};
