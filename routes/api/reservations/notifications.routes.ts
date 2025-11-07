// src/routes/notifications.ts
import express from 'express';
import { z } from 'zod';

import AuthoringController from '../../../controllers/reservationNotifications/NotificationAuthoringController';
import RuntimeController from '../../../controllers/reservationNotifications/NotificationRuntimeController';
import { validate } from '../../../middleware/zod.js';

// ---- Schemas (imported from DTOs) ----
import {
	CreateNotificationEventRequestSchema,
	UpdateNotificationEventRequestSchema,
} from '../../../schemas/dto/reservations/notification-event/notification-event.dto.js';
import {
	CreateNotificationTemplateRequestSchema,
	UpdateNotificationTemplateRequestSchema,
} from '../../../schemas/dto/reservations/notification-template/notification-template.dto.js';
import {
	CreateNotificationTemplateVersionRequestSchema,
	UpdateNotificationTemplateVersionByCompositeRequestSchema,
} from '../../../schemas/dto/reservations/notification-template-version/notification-template-version.dto.js';
import {
	CreateNotificationMappingRequestSchema,
	UpdateNotificationMappingRequestSchema,
} from '../../../schemas/dto/reservations/notification-mapping/notification-mapping.dto.js';
import { UpsertNotificationPreferenceRequestSchema } from '../../../schemas/dto/reservations/notification-preference/notification-preference.dto.js';
import {
	CreateNotificationMessageRequestSchema,
	UpdateNotificationMessageStatusRequestSchema,
} from '../../../schemas/dto/reservations/notification-message/notification-message.dto.js';
import { CreateNotificationMessageEventRequestSchema } from '../../../schemas/dto/reservations/notification-message-event/notification-message-event.dto.js';
import {
	CreateNotificationProviderCredentialRequestSchema,
	UpdateNotificationProviderCredentialRequestSchema,
} from '../../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.dto.js';
import { MessageStatusEnum } from '../../../types/reservationNotifications/enums';

// ---- Local, route-only schemas ----
const ActiveMappingSchema = z.object({
	notification_event_id: z.string().uuid(),
	notification_template_version_id: z.string().uuid(),
});

const ListMessagesSchema = z.object({
	notification_event_id: z.string().uuid().optional(),
	status: MessageStatusEnum.optional(),
	take: z.number().int().min(1).max(200).optional(),
	skip: z.number().int().min(0).optional(),
});

const router = express.Router();

// ------------------------
// Authoring
// ------------------------

// Events
router.get('/events', AuthoringController.listNotificationEvents);
router.post('/events', validate(CreateNotificationEventRequestSchema), AuthoringController.createNotificationEvent);
router.put(
	'/events/:notification_event_id',
	validate(UpdateNotificationEventRequestSchema),
	AuthoringController.updateNotificationEvent
);
router.delete('/events/:notification_event_id', AuthoringController.deleteNotificationEvent);

// Templates
router.get('/templates', AuthoringController.listNotificationTemplates);
router.post(
	'/templates',
	validate(CreateNotificationTemplateRequestSchema),
	AuthoringController.createNotificationTemplate
);
router.put(
	'/templates/:notification_template_id',
	validate(UpdateNotificationTemplateRequestSchema),
	AuthoringController.updateNotificationTemplate
);
router.delete('/templates/:notification_template_id', AuthoringController.deleteNotificationTemplate);

// Template versions
router.post(
	'/templates/:notification_event_id/versions',
	validate(CreateNotificationTemplateVersionRequestSchema), // TODO: omit path param if needed
	AuthoringController.createNotificationTemplateVersion
);
router.put(
	'/versions/:notification_template_version_id',
	validate(UpdateNotificationTemplateVersionByCompositeRequestSchema), // TODO: omit path param if needed
	AuthoringController.updateNotificationTemplateVersionById
);
router.delete('/versions/:notification_template_version_id', AuthoringController.deleteNotificationTemplateVersionById);

// Mappings
router.get('/mappings', AuthoringController.listNotificationMappings);
router.post(
	'/mappings',
	validate(CreateNotificationMappingRequestSchema),
	AuthoringController.createNotificationMapping
);
router.put(
	'/mappings/:notification_mapping_id',
	validate(UpdateNotificationMappingRequestSchema),
	AuthoringController.updateNotificationMapping
);
router.post('/mappings/active', validate(ActiveMappingSchema), AuthoringController.upsertActiveNotificationMapping);
router.get('/events/:notification_event_id/template', AuthoringController.getLatestTemplateForEvent);
// Preferences
router.get('/preferences', AuthoringController.listNotificationPreferences);
router.put(
	'/preferences',
	validate(UpsertNotificationPreferenceRequestSchema),
	AuthoringController.upsertNotificationPreference
);

// Metadata
router.get('/channels', AuthoringController.listNotificationChannels);
router.get('/variables', AuthoringController.listNotificationVariables);

// ------------------------
// Runtime
// ------------------------

// Messages
router.get('/messages/:notification_message_id', RuntimeController.getNotificationMessage);
router.post('/messages/list', validate(ListMessagesSchema), RuntimeController.listNotificationMessages);
router.post('/messages', validate(CreateNotificationMessageRequestSchema), RuntimeController.createNotificationMessage);
router.put(
	'/messages/:notification_message_id/status',
	validate(UpdateNotificationMessageStatusRequestSchema), // TODO: omit path param if needed
	RuntimeController.updateNotificationMessageStatus
);

// Message events
router.get('/messages/:notification_message_id/events', RuntimeController.listNotificationMessageEvents);
router.post(
	'/messages/:notification_message_id/events',
	validate(CreateNotificationMessageEventRequestSchema), // TODO: omit path param if needed
	RuntimeController.createNotificationMessageEvent
);

// Provider credentials
router.get('/providers', RuntimeController.listNotificationProviderCredentials); // optional channel via query
router.post(
	'/providers',
	validate(CreateNotificationProviderCredentialRequestSchema),
	RuntimeController.createNotificationProviderCredential
);
router.put(
	'/providers/:notification_provider_credential_id',
	validate(UpdateNotificationProviderCredentialRequestSchema),
	RuntimeController.updateNotificationProviderCredential
);
router.delete(
	'/providers/:notification_provider_credential_id',
	RuntimeController.deleteNotificationProviderCredential
);

export default router;
