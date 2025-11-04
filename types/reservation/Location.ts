// --- ENUMS ---
import { z } from 'zod';

import type { ReservationModule } from './ReservationModule.js';
import type { Schedule } from './Schedule.js';
import type { Booking } from './Booking.js';
import type { Address } from '../addresses/Address.js';
import type { Service } from './Service.js';

export const CreateLocationSchema = z.object({
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
});

export const UpdateLocationSchema = CreateLocationSchema.partial();
export const DeleteLocationSchema = z.object({ location_id: z.string().uuid() });

export type CreateLocationInput = z.infer<typeof CreateLocationSchema>;
export type UpdateLocationInput = z.infer<typeof UpdateLocationSchema>;

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
	reservation_module: ReservationModule;
	schedules: Schedule[];
	bookings: Booking[];
	address?: Address | null;
	service_locations: Service[];
};
