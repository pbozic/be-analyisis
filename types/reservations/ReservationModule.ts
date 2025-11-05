import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

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
import type { UserRole } from '../userRoles/UserRole.js';
import { BusinessResponseSchema } from '../business/Business';
import { ActionBundleResponseBaseSchema } from '../subscriptions/ActionBundle';
import { BusinessAddonResponseBaseSchema } from '../subscriptions/BusinessAddon';
import { BusinessUsageResponseBaseSchema } from '../subscriptions/BusinessUsage';
import { LocationResponseBaseSchema } from './Location';
import { ServiceResponseBaseSchema } from './Service';
import { EmployeeResponseBaseSchema } from './Employee';
import { BookingResponseBaseSchema } from './Booking';
import { CustomerResponseBaseSchema } from './Customer';
import { ServiceCategoryResponseBaseSchema } from './ServiceCategory';
import { UserRoleResponseBaseSchema } from '../userRoles/UserRole';
import { UserPermissionResponseBaseSchema } from '../userRoles/UserPermission';
import { BookingCourseTimeResponseBaseSchema } from './BookingCourseTime';
import { BookingCourseParticipantResponseBaseSchema } from './BookingCourseParticipant';
import { NotificationTemplateResponseBaseSchema } from '../reservationNotifications/NotificationTemplate';
import { NotificationMappingResponseBaseSchema } from '../reservationNotifications/NotificationMapping';
import { NotificationPreferenceResponseBaseSchema } from '../reservationNotifications/NotificationPreference';
import { NotificationProviderCredentialResponseBaseSchema } from '../reservationNotifications/NotificationProviderCredential';
import { NotificationMessageResponseBaseSchema } from '../reservationNotifications/NotificationMessage';
import { FileResponseBaseSchema } from '../files/File';
import { ReviewableResponseBaseSchema } from '../reviews/Reviewable';

extendZodWithOpenApi(z);

export const CreateReservationModuleSchema = z
	.object({
		reservation_module_id: z.string().uuid(),
		public_link_hash: z.string().nullable().optional(),
		business_id: z.string().uuid(),
		action_bundle_id: z.string().uuid().nullable().optional(),
		subscription_active_until: z.unknown().nullable().optional(),
		subscription_expires_at: z.unknown().nullable().optional(),
		stripe_subscription_schedule_id: z.string().uuid().nullable().optional(),
		hours_before_reschedule: z.number().nullable().optional(),
		hours_before_cancel: z.number().nullable().optional(),
		publicly_visible: z.boolean(),
		logo_id: z.string().uuid().nullable().optional(),
		banner_id: z.string().uuid().nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateReservationModule');

export type CreateReservationModuleInput = z.infer<typeof CreateReservationModuleSchema>;

export const UpdateReservationModuleSchema = CreateReservationModuleSchema.partial().openapi('UpdateReservationModule');
export type UpdateReservationModuleInput = z.infer<typeof UpdateReservationModuleSchema>;

export const ReservationModuleResponseBaseSchema = z
	.object({
		reservation_module_id: z.string(),
		public_link_hash: z.string().nullable().optional(),
		business_id: z.string(),
		action_bundle_id: z.string().nullable().optional(),
		subscription_active_until: z.string().datetime().nullable().optional(),
		subscription_expires_at: z.string().datetime().nullable().optional(),
		stripe_subscription_schedule_id: z.string().nullable().optional(),
		hours_before_reschedule: z.number().nullable().optional(),
		hours_before_cancel: z.number().nullable().optional(),
		publicly_visible: z.boolean(),
		logo_id: z.string().nullable().optional(),
		banner_id: z.string().nullable().optional(),
		reviewable_id: z.string().nullable().optional(),
	})
	.openapi('ReservationModuleResponseBase');

export const ReservationModuleResponseSchema = ReservationModuleResponseBaseSchema.extend({
	business: BusinessResponseSchema,
	action_bundle: ActionBundleResponseBaseSchema.nullable().optional(),
	addons: z.array(BusinessAddonResponseBaseSchema),
	usages: z.array(BusinessUsageResponseBaseSchema),
	locations: z.array(LocationResponseBaseSchema),
	services: z.array(ServiceResponseBaseSchema),
	employees: z.array(EmployeeResponseBaseSchema),
	bookings: z.array(BookingResponseBaseSchema),
	customers: z.array(CustomerResponseBaseSchema),
	service_categories: z.array(ServiceCategoryResponseBaseSchema),
	user_roles: z.array(UserRoleResponseBaseSchema),
	user_permissions: z.array(UserPermissionResponseBaseSchema),
	booking_course_times: z.array(BookingCourseTimeResponseBaseSchema),
	booking_course_participants: z.array(BookingCourseParticipantResponseBaseSchema),
	notification_templates: z.array(NotificationTemplateResponseBaseSchema),
	notification_mappings: z.array(NotificationMappingResponseBaseSchema),
	notification_preferences: z.array(NotificationPreferenceResponseBaseSchema),
	notification_provider_credentials: z.array(NotificationProviderCredentialResponseBaseSchema),
	notification_messages: z.array(NotificationMessageResponseBaseSchema),
	logo: FileResponseBaseSchema.nullable().optional(),
	banner: FileResponseBaseSchema.nullable().optional(),
	reviewable: ReviewableResponseBaseSchema.nullable().optional(),
}).openapi('ReservationModuleResponse');

export const UpdateReservationSettingsSchema = UpdateReservationModuleSchema.pick({
	hours_before_reschedule: true,
	hours_before_cancel: true,
	publicly_visible: true,
}).openapi('UpdateReservationSettings');

export type UpdateReservationSettingsInput = z.infer<typeof UpdateReservationSettingsSchema>;

export type ReservationModuleBase = z.infer<typeof ReservationModuleResponseBaseSchema>;
export type ReservationModuleResponse = z.infer<typeof ReservationModuleResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateReservationModule', CreateReservationModuleSchema);
	registry.register('UpdateReservationModule', UpdateReservationModuleSchema);
	registry.register('ReservationModuleResponseBase', ReservationModuleResponseBaseSchema);
	registry.register('ReservationModuleResponse', ReservationModuleResponseSchema);

	registry.register('UpdateReservationSettings', UpdateReservationSettingsSchema);
}

export type ReservationModule = {
	reservation_module_id: string;
	public_link_hash?: string | null;
	business_id: string;
	action_bundle_id?: string | null;
	subscription_active_until?: Date | null;
	business?: Business;
	action_bundle?: ActionBundle | null;
	subscription_expires_at?: Date | null;
	stripe_subscription_schedule_id?: string | null;
	hours_before_reschedule?: number | null;
	hours_before_cancel?: number | null;
	publicly_visible: boolean;
	addons?: BusinessAddon[];
	usages?: BusinessUsage[];
	locations?: Location[];
	services?: Service[];
	employees?: Employee[];
	bookings?: Booking[];
	customers?: Customer[];
	service_categories?: ServiceCategory[];
	user_roles?: UserRole[];
	user_permissions?: UserPermission[];
	booking_course_times?: BookingCourseTime[];
	booking_course_participants?: BookingCourseParticipant[];
	notification_templates?: NotificationTemplate[];
	notification_mappings?: NotificationMapping[];
	notification_preferences?: NotificationPreference[];
	notification_provider_credentials?: NotificationProviderCredential[];
	notification_messages?: NotificationMessage[];
	logo_id?: string | null;
	logo?: File | null;
	banner_id?: string | null;
	banner?: File | null;
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
};
