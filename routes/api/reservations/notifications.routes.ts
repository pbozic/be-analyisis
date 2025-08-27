// src/routes/notifications.ts
import express from 'express';
import { z } from 'zod';

import AuthoringController from '../../../controllers/reservationNotifications/NotificationAuthoringController';
import RuntimeController from '../../../controllers/reservationNotifications/NotificationRuntimeController';
import { validate } from '../../../middleware/zod';

// ---- Schemas (imported from your types) ----
import {
	CreateNotificationEventSchema,
	UpdateNotificationEventSchema,
} from '../../../types/reservationNotifications/NotificationEvent';
import {
	CreateNotificationTemplateSchema,
	UpdateNotificationTemplateSchema,
} from '../../../types/reservationNotifications/NotificationTemplate';
import {
	CreateNotificationTemplateVersionSchema,
	UpdateNotificationTemplateVersionByIdSchema,
} from '../../../types/reservationNotifications/NotificationTemplateVersion';
import {
	CreateNotificationMappingSchema,
	UpdateNotificationMappingSchema,
} from '../../../types/reservationNotifications/NotificationMapping';
import { UpsertNotificationPreferenceSchema } from '../../../types/reservationNotifications/NotificationPreference';
import {
	CreateNotificationMessageSchema,
	UpdateNotificationMessageStatusSchema,
} from '../../../types/reservationNotifications/NotificationMessage';
import { CreateNotificationMessageEventSchema } from '../../../types/reservationNotifications/NotificationMessageEvent';
import {
	CreateNotificationProviderCredentialSchema,
	UpdateNotificationProviderCredentialSchema,
} from '../../../types/reservationNotifications/NotificationProviderCredential';
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
router.post('/events', validate(CreateNotificationEventSchema), AuthoringController.createNotificationEvent);
router.put(
	'/events/:notification_event_id',
	validate(UpdateNotificationEventSchema),
	AuthoringController.updateNotificationEvent
);
router.delete('/events/:notification_event_id', AuthoringController.deleteNotificationEvent);

// Templates
router.get('/templates', AuthoringController.listNotificationTemplates);
router.post('/templates', validate(CreateNotificationTemplateSchema), AuthoringController.createNotificationTemplate);
router.put(
	'/templates/:notification_template_id',
	validate(UpdateNotificationTemplateSchema),
	AuthoringController.updateNotificationTemplate
);
router.delete('/templates/:notification_template_id', AuthoringController.deleteNotificationTemplate);

// Template versions
router.post(
	'/templates/:notification_event_id/versions',
	validate(CreateNotificationTemplateVersionSchema.omit({ notification_event_id: true })), // body excludes path param
	AuthoringController.createNotificationTemplateVersion
);
router.put(
	'/versions/:notification_template_version_id',
	validate(UpdateNotificationTemplateVersionByIdSchema.omit({ notification_template_version_id: true })), // body excludes path param
	AuthoringController.updateNotificationTemplateVersionById
);
router.delete('/versions/:notification_template_version_id', AuthoringController.deleteNotificationTemplateVersionById);

// Mappings
router.get('/mappings', AuthoringController.listNotificationMappings);
router.post('/mappings', validate(CreateNotificationMappingSchema), AuthoringController.createNotificationMapping);
router.put(
	'/mappings/:notification_mapping_id',
	validate(UpdateNotificationMappingSchema),
	AuthoringController.updateNotificationMapping
);
router.post('/mappings/active', validate(ActiveMappingSchema), AuthoringController.upsertActiveNotificationMapping);
router.get('/events/:notification_event_id/template', AuthoringController.getLatestTemplateForEvent);
// Preferences
router.get('/preferences', AuthoringController.listNotificationPreferences);
router.put(
	'/preferences',
	validate(UpsertNotificationPreferenceSchema),
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
router.post('/messages', validate(CreateNotificationMessageSchema), RuntimeController.createNotificationMessage);
router.put(
	'/messages/:notification_message_id/status',
	validate(UpdateNotificationMessageStatusSchema.omit({ notification_message_id: true })), // body excludes path param
	RuntimeController.updateNotificationMessageStatus
);

// Message events
router.get('/messages/:notification_message_id/events', RuntimeController.listNotificationMessageEvents);
router.post(
	'/messages/:notification_message_id/events',
	validate(CreateNotificationMessageEventSchema.omit({ notification_message_id: true })), // body excludes path param
	RuntimeController.createNotificationMessageEvent
);

// Provider credentials
router.get('/providers', RuntimeController.listNotificationProviderCredentials); // optional channel via query
router.post(
	'/providers',
	validate(CreateNotificationProviderCredentialSchema),
	RuntimeController.createNotificationProviderCredential
);
router.put(
	'/providers/:notification_provider_credential_id',
	validate(UpdateNotificationProviderCredentialSchema),
	RuntimeController.updateNotificationProviderCredential
);
router.delete(
	'/providers/:notification_provider_credential_id',
	RuntimeController.deleteNotificationProviderCredential
);

export default router;
