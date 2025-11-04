// --- ENUMS ---
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { ReservationModule } from './ReservationModule.js';
import type { Schedule } from './Schedule.js';
import type { Booking } from './Booking.js';
import type { Address } from '../addresses/Address.js';
import type { ServiceLocation } from './ServiceLocation.js';
import { ReservationModuleResponseSchema } from './ReservationModule';
import { ScheduleResponseSchema } from './Schedule';
import { BookingResponseSchema } from './Booking';
import { AddressResponseSchema } from '../addresses/Address';
import { ServiceLocationResponseSchema } from './ServiceLocation';

extendZodWithOpenApi(z);

export const CreateLocationSchema = z
	.object({
		name: z.string().min(1),
		address: z.object({
			address: z.string().min(1),
			latitude: z.string().min(1),
			longitude: z.string().min(1),
		}),
		phone: z.string().optional().nullable(),
		color: z.string().optional(),
		address_id: z.string().uuid().optional(),
		accepts_online: z.boolean().default(false),
		closed_on_holidays: z.boolean().default(false),
		working_days: z.any(),
	})
	.openapi('CreateLocation');

export const UpdateLocationSchema = CreateLocationSchema.partial().openapi('UpdateLocation');
export const DeleteLocationSchema = z.object({ location_id: z.string().uuid() });

export type CreateLocationInput = z.infer<typeof CreateLocationSchema>;
export type UpdateLocationInput = z.infer<typeof UpdateLocationSchema>;

export const LocationResponseSchema = z
	.object({
		location_id: z.string(),
		reservation_module_id: z.string(),
		name: z.string(),
		address_id: z.string().nullable().optional(),
		phone: z.string().nullable().optional(),
		color: z.string().nullable().optional(),
		accepts_online: z.boolean(),
		closed_on_holidays: z.boolean(),
		working_days: z.unknown(),
		reservation_module: ReservationModuleResponseSchema,
		schedules: z.array(ScheduleResponseSchema),
		bookings: z.array(BookingResponseSchema),
		address: AddressResponseSchema.nullable().optional(),
		service_locations: z.array(ServiceLocationResponseSchema),
	})
	.openapi('LocationResponse');

export type LocationResponse = z.infer<typeof LocationResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateLocation', CreateLocationSchema);
	registry.register('UpdateLocation', UpdateLocationSchema);
	registry.register('LocationResponse', LocationResponseSchema);
}

export type Location = {
	location_id: string;
	reservation_module_id: string;
	name: string;
	address_id?: string | null;
	phone?: string | null;
	color?: string | null;
	accepts_online: boolean;
	closed_on_holidays: boolean;
	working_days: unknown;
	reservation_module?: ReservationModule;
	schedules?: Schedule[];
	bookings?: Booking[];
	address?: Address | null;
	service_locations?: ServiceLocation[];
};
