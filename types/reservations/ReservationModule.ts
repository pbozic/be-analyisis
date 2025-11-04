import { z } from 'zod';

import type { Business } from '../business/Business.js';
import type { ActionBundle } from '../subscriptions/ActionBundle.js';
import type { BusinessAddon } from '../subscriptions/BusinessAddon.js';
import type { BusinessUsage } from '../subscriptions/BusinessUsage.js';
import type { Location } from './Location.js';
import type { Service } from './Service.js';
import type { Employee } from './Employee.js';
import type { Booking } from './Booking.js';
import type { Customer } from './Customer.js';
import type { ServiceCategory } from './ServiceCategory.js';
import type { UserPermission } from '../userRoles/UserPermission.js';
import type { BookingCourseTime } from './BookingCourseTime.js';
import type { BookingCourseParticipant } from './BookingCourseParticipant.js';
import type { NotificationTemplate } from '../reservationNotifications/NotificationTemplate.js';
import type { NotificationMapping } from '../reservationNotifications/NotificationMapping.js';
import type { NotificationPreference } from '../reservationNotifications/NotificationPreference.js';
import type { NotificationProviderCredential } from '../reservationNotifications/NotificationProviderCredential.js';
import type { NotificationMessage } from '../reservationNotifications/NotificationMessage.js';
import type { File } from '../files/File.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { User } from '../users/User.js';
import type { UserRole } from '../userRoles/UserRole.js';

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

export type ReservationModule = {
	reservation_module_id: string;
	public_link_hash?: string | null;
	business_id: string;
	action_bundle_id?: string | null;
	subscription_active_until?: Date | null;
	business: Business;
	action_bundle?: ActionBundle | null;
	subscription_expires_at?: Date | null;
	stripe_subscription_schedule_id?: string | null;
	hours_before_reschedule?: number | null;
	hours_before_cancel?: number | null;
	publicly_visible: boolean;
	addons: BusinessAddon[];
	usages: BusinessUsage[];
	locations: Location[];
	services: Service[];
	employees: Employee[];
	bookings: Booking[];
	customers: Customer[];
	service_categories: ServiceCategory[];
	user_roles: UserRole[];
	user_permissions: UserPermission[];
	booking_course_times: BookingCourseTime[];
	booking_course_participants: BookingCourseParticipant[];
	notification_templates: NotificationTemplate[];
	notification_mappings: NotificationMapping[];
	notification_preferences: NotificationPreference[];
	notification_provider_credentials: NotificationProviderCredential[];
	notification_messages: NotificationMessage[];
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
};
