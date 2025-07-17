import prisma from '../../prisma/prisma';
import type { Service, CreateServiceInput } from '../../types/reservation/Service.ts';
/**
 * Retrieves all services for a given business ID.
 * @param {string} businessId - The ID of the business to retrieve services for.
 * @returns {Promise<Service[]>} A promise that resolves to an array of services.
 * @throws {Error} If there is an error retrieving the services.
 */
export async function getServicesByBusinessId(businessId: string): Promise<Service[]> {
	try {
		let services = await prisma.service.findMany({
			where: {
				business_id: businessId,
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

export async function createService(data: CreateServiceInput): Promise<Service> {
	try {
		let service = await prisma.service.create({
			data: {
				name: data.name,
				description: data.description,
				image_url: data.image_url,
				price_cents: data.price_cents,
				discount_percent: data.discount_percent,
				discount_amount: data.discount_amount,
				duration_minutes: data.duration_minutes,
				available_online: data.available_online,
				reservation_module: {
					connect: { reservation_module_id: data.reservation_module_id },
				},
				service_category: {
					connect: data.service_category_id ? { service_category_id: data.service_category_id } : undefined,
				},
			},
		});
		return service;
	} catch (error) {
		throw new Error('Error creating service');
	}
}
export default {
	getServicesByBusinessId,
	// Add other service-related methods here
};
