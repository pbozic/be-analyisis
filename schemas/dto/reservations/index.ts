/**
 * Reservation System DTOs
 *
 * This module exports all DTOs for the reservation system following the DTO reuse contract:
 * - Base schemas contain scalars only, no relations
 * - Ref schemas provide minimal identity for embedding
 * - Response schemas extend Base and embed other models' Ref variants only
 * - No circular imports - use Ref variants instead of Response schemas
 */

import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

export {
	BookingBaseSchema,
	BookingRefSchema,
	BookingWithRelationsSchema,
	CreateBookingRequestSchema,
	UpdateBookingRequestSchema,
	BookingResponseSchema,
	BookingAnalyticsCardSchema,
	DailyBookingStatsSchema,
	BookingsAnalyticsResponseSchema,
	BookingGroupResponseSchema,
	BookingGroupUpdateResultSchema,
	MultipleBookingGroupUpdateResponseSchema,
	BookingGroupStartUpdateResponseSchema,
	UpdateBookingGroupResponseSchema,
	EmployeeWithSlotsSchema,
	BookingsAndEmployeesWithSlotsResponseSchema,
} from './booking/booking.dto';
export {
	CustomerBaseSchema,
	CustomerRefSchema,
	CreateCustomerRequestSchema,
	UpdateCustomerRequestSchema,
	CustomerResponseSchema,
} from './customer/customer.dto';
export {
	EmployeeBaseSchema,
	EmployeeRefSchema,
	EmployeeWithBusinessUserSchema,
	CreateEmployeeRequestSchema,
	UpdateEmployeeRequestSchema,
	EmployeeResponseSchema,
} from './employee/employee.dto';
export {
	LocationBaseSchema,
	LocationRefSchema,
	LocationWithAddressSchema,
	CreateLocationRequestSchema,
	UpdateLocationRequestSchema,
	LocationResponseSchema,
	LocationsAndEmployeesResponseSchema,
} from './location/location.dto';
export {
	ServiceBaseSchema,
	ServiceRefSchema,
	ServiceWithCategorySchema,
	CreateServiceRequestSchema,
	UpdateServiceRequestSchema,
	ServiceResponseSchema,
	ServicesEmployeesAndCustomersResponseSchema,
	ServiceFormDataResponseSchema,
} from './service/service.dto';
export {
	ServiceCategoryBaseSchema,
	ServiceCategoryRefSchema,
	CreateServiceCategoryRequestSchema,
	UpdateServiceCategoryRequestSchema,
	ServiceCategoryResponseSchema,
} from './service-category/service-category.dto';
export * from './reservation-module/reservation-module.dto';

export {
	ScheduleBaseSchema,
	ScheduleRefSchema,
	CreateScheduleRequestSchema,
	UpdateScheduleRequestSchema,
	ScheduleResponseSchema,
} from './schedule/schedule.dto';
export {
	ScheduleSlotBaseSchema,
	ScheduleSlotRefSchema,
	CreateScheduleSlotRequestSchema,
	UpdateScheduleSlotRequestSchema,
	ScheduleSlotResponseSchema,
} from './schedule-slot/schedule-slot.dto';
export {
	ScheduleEmployeeBaseSchema,
	ScheduleEmployeeRefSchema,
	CreateScheduleEmployeeRequestSchema,
	ScheduleEmployeeResponseSchema,
} from './schedule-employee/schedule-employee.dto';
export {
	ScheduleSlotExceptionBaseSchema,
	ScheduleSlotExceptionRefSchema,
	CreateScheduleSlotExceptionRequestSchema,
	UpdateScheduleSlotExceptionRequestSchema,
	ScheduleSlotExceptionResponseSchema,
} from './schedule-slot-exception/schedule-slot-exception.dto';

export {
	BookingHistoryLogBaseSchema,
	BookingHistoryLogRefSchema,
	CreateBookingHistoryLogRequestSchema,
	BookingHistoryLogResponseSchema,
} from './booking-history-log/booking-history-log.dto';
export {
	BookingCourseTimeBaseSchema,
	BookingCourseTimeRefSchema,
	CreateBookingCourseTimeRequestSchema,
	UpdateBookingCourseTimeRequestSchema,
	BookingCourseTimeResponseSchema,
} from './booking-course-time/booking-course-time.dto';
export {
	BookingCourseParticipantBaseSchema,
	BookingCourseParticipantRefSchema,
	CreateBookingCourseParticipantRequestSchema,
	UpdateBookingCourseParticipantRequestSchema,
	BookingCourseParticipantResponseSchema,
} from './booking-course-participant/booking-course-participant.dto';
export {
	BookingSlotBaseSchema,
	BookingSlotRefSchema,
	CreateBookingSlotRequestSchema,
	UpdateBookingSlotRequestSchema,
	BookingSlotResponseSchema,
} from './booking-slot/booking-slot.dto';

export {
	ServiceAssignmentBaseSchema,
	ServiceAssignmentRefSchema,
	CreateServiceAssignmentRequestSchema,
	ServiceAssignmentResponseSchema,
} from './service-assignment/service-assignment.dto';
export {
	ServiceLocationBaseSchema,
	ServiceLocationRefSchema,
	CreateServiceLocationRequestSchema,
	ServiceLocationResponseSchema,
} from './service-location/service-location.dto';

export {
	NotificationTemplateBaseSchema,
	NotificationTemplateRefSchema,
	CreateNotificationTemplateRequestSchema,
	UpdateNotificationTemplateRequestSchema,
	NotificationTemplateResponseSchema,
} from './notification-template/notification-template.dto';
export {
	NotificationPreferenceBaseSchema,
	NotificationPreferenceRefSchema,
	CreateNotificationPreferenceRequestSchema,
	UpsertNotificationPreferenceRequestSchema,
	UpdateNotificationPreferenceRequestSchema,
	NotificationPreferenceResponseSchema,
} from './notification-preference/notification-preference.dto';
export {
	NotificationMessageBaseSchema,
	NotificationMessageRefSchema,
	CreateNotificationMessageRequestSchema,
	UpdateNotificationMessageStatusRequestSchema,
	NotificationMessageResponseSchema,
} from './notification-message/notification-message.dto';
export {
	NotificationEventBaseSchema,
	NotificationEventRefSchema,
	CreateNotificationEventRequestSchema,
	UpdateNotificationEventRequestSchema,
	NotificationEventResponseSchema,
} from './notification-event/notification-event.dto';
export {
	NotificationMappingBaseSchema,
	NotificationMappingRefSchema,
	CreateNotificationMappingRequestSchema,
	UpdateNotificationMappingRequestSchema,
	NotificationMappingResponseSchema,
} from './notification-mapping/notification-mapping.dto';
export {
	NotificationMessageEventBaseSchema,
	NotificationMessageEventRefSchema,
	CreateNotificationMessageEventRequestSchema,
	NotificationMessageEventResponseSchema,
} from './notification-message-event/notification-message-event.dto';
export {
	NotificationProviderCredentialBaseSchema,
	NotificationProviderCredentialRefSchema,
	CreateNotificationProviderCredentialRequestSchema,
	UpdateNotificationProviderCredentialRequestSchema,
	NotificationProviderCredentialResponseSchema,
} from './notification-provider-credential/notification-provider-credential.dto';
export {
	NotificationTemplateVersionBaseSchema,
	NotificationTemplateVersionRefSchema,
	CreateNotificationTemplateVersionRequestSchema,
	UpdateNotificationTemplateVersionRequestSchema,
	UpdateNotificationTemplateVersionByCompositeRequestSchema,
	NotificationTemplateVersionResponseSchema,
} from './notification-template-version/notification-template-version.dto';

// Import individual registerSchemas functions
import { registerSchemas as registerBookingSchemas } from './booking/booking.dto.js';
import { registerSchemas as registerCustomerSchemas } from './customer/customer.dto.js';
import { registerSchemas as registerEmployeeSchemas } from './employee/employee.dto.js';
import { registerSchemas as registerLocationSchemas } from './location/location.dto.js';
import { registerSchemas as registerServiceSchemas } from './service/service.dto.js';
import { registerSchemas as registerServiceCategorySchemas } from './service-category/service-category.dto.js';
import { registerSchemas as registerReservationModuleSchemas } from './reservation-module/reservation-module.dto.js';
import { registerSchemas as registerScheduleSchemas } from './schedule/schedule.dto.js';
import { registerSchemas as registerScheduleSlotSchemas } from './schedule-slot/schedule-slot.dto.js';
import { registerSchemas as registerScheduleEmployeeSchemas } from './schedule-employee/schedule-employee.dto.js';
import { registerSchemas as registerScheduleSlotExceptionSchemas } from './schedule-slot-exception/schedule-slot-exception.dto.js';
import { registerSchemas as registerBookingHistoryLogSchemas } from './booking-history-log/booking-history-log.dto.js';
import { registerSchemas as registerBookingCourseTimeSchemas } from './booking-course-time/booking-course-time.dto.js';
import { registerSchemas as registerBookingCourseParticipantSchemas } from './booking-course-participant/booking-course-participant.dto.js';
import { registerSchemas as registerBookingSlotSchemas } from './booking-slot/booking-slot.dto.js';
import { registerSchemas as registerServiceAssignmentSchemas } from './service-assignment/service-assignment.dto.js';
import { registerSchemas as registerServiceLocationSchemas } from './service-location/service-location.dto.js';
import { registerSchemas as registerNotificationTemplateSchemas } from './notification-template/notification-template.dto.js';
import { registerSchemas as registerNotificationPreferenceSchemas } from './notification-preference/notification-preference.dto.js';
import { registerSchemas as registerNotificationMessageSchemas } from './notification-message/notification-message.dto.js';
import { registerSchemas as registerNotificationEventSchemas } from './notification-event/notification-event.dto.js';
import { registerSchemas as registerNotificationMappingSchemas } from './notification-mapping/notification-mapping.dto.js';
import { registerSchemas as registerNotificationMessageEventSchemas } from './notification-message-event/notification-message-event.dto.js';
import { registerSchemas as registerNotificationProviderCredentialSchemas } from './notification-provider-credential/notification-provider-credential.dto.js';
import { registerSchemas as registerNotificationTemplateVersionSchemas } from './notification-template-version/notification-template-version.dto.js';

/**
 * Register all reservation-related schemas with the OpenAPI registry
 */
export function registerAllReservationSchemas(registry: OpenAPIRegistry) {
	// Core reservation entities
	registerBookingSchemas(registry);
	registerCustomerSchemas(registry);
	registerEmployeeSchemas(registry);
	registerLocationSchemas(registry);
	registerServiceSchemas(registry);
	registerServiceCategorySchemas(registry);
	registerReservationModuleSchemas(registry);

	// Schedule-related entities
	registerScheduleSchemas(registry);
	registerScheduleSlotSchemas(registry);
	registerScheduleEmployeeSchemas(registry);
	registerScheduleSlotExceptionSchemas(registry);

	// Booking-related entities
	registerBookingHistoryLogSchemas(registry);
	registerBookingCourseTimeSchemas(registry);
	registerBookingCourseParticipantSchemas(registry);
	registerBookingSlotSchemas(registry);

	// Service-related entities
	registerServiceAssignmentSchemas(registry);
	registerServiceLocationSchemas(registry);

	// Notification-related entities
	registerNotificationTemplateSchemas(registry);
	registerNotificationPreferenceSchemas(registry);
	registerNotificationMessageSchemas(registry);
	registerNotificationEventSchemas(registry);
	registerNotificationMappingSchemas(registry);
	registerNotificationMessageEventSchemas(registry);
	registerNotificationProviderCredentialSchemas(registry);
	registerNotificationTemplateVersionSchemas(registry);
}
