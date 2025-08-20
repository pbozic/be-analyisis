import { z } from 'zod';

import type { reservation_module } from '../../prisma/schemas/interfaces';

export type ReservationModule = reservation_module;

/**
 * --- SCHEMAS ---
 */
export const UpdateReservationModuleSchema = z.object({
	hours_before_reschedule: z.number().int().min(0).max(168).nullable().optional(), // up to 7 days
	hours_before_cancel: z.number().int().min(0).max(168).nullable().optional(),
	publicly_visible: z.boolean().optional(),
	subscription_id: z.string().uuid().nullable().optional(),
	subscription_active_until: z.coerce.date().nullable().optional(),
	subscription_expires_at: z.coerce.date().nullable().optional(),
});

export const UpdateReservationSettingsSchema = UpdateReservationModuleSchema.pick({
	hours_before_reschedule: true,
	hours_before_cancel: true,
	publicly_visible: true,
});

/**
 * --- INPUT TYPES ---
 */
export type UpdateReservationModuleInput = z.infer<typeof UpdateReservationModuleSchema>;
export type UpdateReservationSettingsInput = z.infer<typeof UpdateReservationSettingsSchema>;
