import { Response } from 'express';
import { NOTIFICATION_CHANNEL } from '@prisma/client';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import * as AuthoringDao from '../../dao/reservationNotifications/NotificationAuthoringDao.ts';
import type {
	CreateNotificationEventRequest,
	UpdateNotificationEventRequest,
	// Response types for JSDoc
	// NotificationEventResponse,
} from '../../schemas/dto/reservations/notification-event/notification-event.dto';
import type {
	CreateNotificationTemplateRequest,
	UpdateNotificationTemplateRequest,
	// Response types for JSDoc
	// NotificationTemplateResponse,
} from '../../schemas/dto/reservations/notification-template/notification-template.dto';
import type {
	CreateNotificationTemplateVersionRequest,
	UpdateNotificationTemplateVersionRequest,
	// Response types for JSDoc
	// NotificationTemplateVersionResponse,
} from '../../schemas/dto/reservations/notification-template-version/notification-template-version.dto';
import type {
	ActiveMappingRequest,
	CreateNotificationMappingRequest,
	UpdateNotificationMappingRequest,
} from '../../schemas/dto/reservations/notification-mapping/notification-mapping.dto';
import type {
	UpsertNotificationPreferenceRequest,
	// Response types for JSDoc
	// NotificationPreferenceResponse,
} from '../../schemas/dto/reservations/notification-preference/notification-preference.dto';
import { VARIABLE_CATALOG } from '../../lib/reservationNotifications.ts';

/**
 * GET /reservation/notifications/events
 * @tag Notifications:Authoring
 * @summary List notification events
 * @operationId listNotificationEvents
 * @response 200 - Events retrieved
 * @responseContent {NotificationEventResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_event
 */
export async function listNotificationEvents(_req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const events = await AuthoringDao.listNotificationEvents();
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification events', error });
	}
}

/**
 * POST /reservation/notifications/events
 * @tag Notifications:Authoring
 * @summary Create notification event
 * @operationId createNotificationEvent
 * @bodyContent {CreateNotificationEventRequest} application/json
 * @response 201 - Event created
 * @responseContent {NotificationEventResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_event
 */
export async function createNotificationEvent(
	req: ValidatedRequest<CreateNotificationEventRequest>,
	res: Response
): Promise<void> {
	try {
		const created = await AuthoringDao.createNotificationEvent(req.body);
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification event', error });
	}
}

/**
 * PUT /reservation/notifications/events/:notification_event_id
 * @tag Notifications:Authoring
 * @summary Update notification event
 * @operationId updateNotificationEvent
 * @pathParam {string} notification_event_id
 * @bodyContent {UpdateNotificationEventRequest} application/json
 * @response 200 - Event updated
 * @responseContent {NotificationEventResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_event
 */
export async function updateNotificationEvent(
	req: ValidatedRequest<UpdateNotificationEventRequest, { notification_event_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updated = await AuthoringDao.updateNotificationEvent(req.params.notification_event_id, req.body);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating notification event', error });
	}
}

/**
 * DELETE /reservation/notifications/events/:notification_event_id
 * @tag Notifications:Authoring
 * @summary Delete notification event
 * @operationId deleteNotificationEvent
 * @pathParam {string} notification_event_id
 * @response 204 - Event deleted
 * @responseContent {void} 204.application/json
 * @response 500 - Error
 * @prisma_model notification_event
 */
export async function deleteNotificationEvent(
	req: ValidatedRequest<never, { notification_event_id: string }>,
	res: Response
): Promise<void> {
	try {
		await AuthoringDao.deleteNotificationEvent(req.params.notification_event_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting notification event', error });
	}
}

/**
 * GET /reservation/notifications/templates
 * @tag Notifications:Authoring
 * @summary List templates for current module
 * @operationId listNotificationTemplates
 * @response 200 - Templates retrieved
 * @responseContent {NotificationTemplateResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_template
 */
export async function listNotificationTemplates(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const templates = await AuthoringDao.listNotificationTemplates(reservation_module_id);
		res.status(200).json(templates);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification templates', error });
	}
}

/**
 * POST /reservation/notifications/templates
 * @tag Notifications:Authoring
 * @summary Create notification template
 * @operationId createNotificationTemplate
 * @bodyContent {CreateNotificationTemplateRequest} application/json
 * @response 201 - Template created
 * @responseContent {NotificationTemplateResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_template
 */
export async function createNotificationTemplate(
	req: ValidatedRequest<CreateNotificationTemplateRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id ?? req.body.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const created = await AuthoringDao.createNotificationTemplate({
			...req.body,
			reservation_module_id,
		});
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification template', error });
	}
}

/**
 * PUT /reservation/notifications/templates/:notification_template_id
 * @tag Notifications:Authoring
 * @summary Update notification template
 * @operationId updateNotificationTemplate
 * @pathParam {string} notification_template_id
 * @bodyContent {UpdateNotificationTemplateRequest} application/json
 * @response 200 - Template updated
 * @responseContent {NotificationTemplateResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_template
 */
export async function updateNotificationTemplate(
	req: ValidatedRequest<UpdateNotificationTemplateRequest, { notification_template_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updated = await AuthoringDao.updateNotificationTemplate(req.params.notification_template_id, req.body);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating notification template', error });
	}
}

/**
 * DELETE /reservation/notifications/templates/:notification_template_id
 * @tag Notifications:Authoring
 * @summary Delete notification template
 * @operationId deleteNotificationTemplate
 * @pathParam {string} notification_template_id
 * @response 204 - Template deleted
 * @responseContent {void} 204.application/json
 * @response 500 - Error
 * @prisma_model notification_template
 */
export async function deleteNotificationTemplate(
	req: ValidatedRequest<never, { notification_template_id: string }>,
	res: Response
): Promise<void> {
	try {
		await AuthoringDao.deleteNotificationTemplate(req.params.notification_template_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting notification template', error });
	}
}

/**
 * POST /reservation/notifications/templates/:notification_template_id/versions
 * @tag Notifications:Authoring
 * @summary Create template version (auto-increment)
 * @operationId createNotificationTemplateVersion
 * @pathParam {string} notification_template_id
 * @bodyContent {CreateNotificationTemplateVersionRequest} application/json
 * @response 201 - Version created
 * @responseContent {NotificationTemplateVersionResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_template_version
 * @prisma_model notification_mapping
 */
export async function createNotificationTemplateVersion(
	req: ValidatedRequest<
		Omit<CreateNotificationTemplateVersionRequest, 'notification_event_id' | 'created_by_user_id'>,
		{ notification_event_id: string }
	>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id as string;
		const created = await AuthoringDao.createVersionMapAndArchiveForEvent(
			reservation_module_id,
			req.params.notification_event_id,
			{
				...req.body,
				created_by_user_id: req.user?.user_id,
			}
		);
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification template version', error });
	}
}

/**
 * PUT /reservation/notifications/versions/:notification_template_version_id
 * @tag Notifications:Authoring
 * @summary Update template version by ID
 * @operationId updateNotificationTemplateVersionById
 * @pathParam {string} notification_template_version_id
 * @bodyContent {UpdateNotificationTemplateVersionRequest} application/json
 * @response 200 - Version updated
 * @responseContent {NotificationTemplateVersionResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_template_version
 */
export async function updateNotificationTemplateVersionById(
	req: ValidatedRequest<UpdateNotificationTemplateVersionRequest, { notification_template_version_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updated = await AuthoringDao.updateNotificationTemplateVersionById(
			req.params.notification_template_version_id,
			req.body
		);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating notification template version', error });
	}
}

/**
 * DELETE /reservation/notifications/versions/:notification_template_version_id
 * @tag Notifications:Authoring
 * @summary Delete template version by ID
 * @operationId deleteNotificationTemplateVersionById
 * @pathParam {string} notification_template_version_id
 * @response 204 - Version deleted
 * @responseContent {void} 204.application/json
 * @response 500 - Error
 * @prisma_model notification_template_version
 */
export async function deleteNotificationTemplateVersionById(
	req: ValidatedRequest<never, { notification_template_version_id: string }>,
	res: Response
): Promise<void> {
	try {
		await AuthoringDao.deleteNotificationTemplateVersionById(req.params.notification_template_version_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting notification template version', error });
	}
}

/**
 * GET /reservation/notifications/mappings
 * @tag Notifications:Authoring
 * @summary List mappings for current module
 * @operationId listNotificationMappings
 * @response 200 - Mappings retrieved
 * @responseContent {NotificationMappingResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_mapping
 */
export async function listNotificationMappings(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const mappings = await AuthoringDao.listNotificationMappings(reservation_module_id);
		res.status(200).json(mappings);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification mappings', error });
	}
}

/**
 * POST /reservation/notifications/mappings
 * @tag Notifications:Authoring
 * @summary Create a mapping
 * @operationId createNotificationMapping
 * @bodyContent {CreateNotificationMappingRequest} application/json
 * @response 201 - Mapping created
 * @responseContent {NotificationMappingResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_mapping
 */
export async function createNotificationMapping(
	req: ValidatedRequest<CreateNotificationMappingRequest>,
	res: Response
): Promise<void> {
	try {
		const created = await AuthoringDao.createNotificationMapping(req.body);
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification mapping', error });
	}
}

/**
 * PUT /reservation/notifications/mappings/:notification_mapping_id
 * @tag Notifications:Authoring
 * @summary Update a mapping
 * @operationId updateNotificationMapping
 * @pathParam {string} notification_mapping_id
 * @bodyContent {UpdateNotificationMappingRequest} application/json
 * @response 200 - Mapping updated
 * @responseContent {NotificationMappingResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_mapping
 */
export async function updateNotificationMapping(
	req: ValidatedRequest<UpdateNotificationMappingRequest, { notification_mapping_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updated = await AuthoringDao.updateNotificationMapping(req.params.notification_mapping_id, req.body);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating notification mapping', error });
	}
}

/**
 * POST /reservation/notifications/mappings/active
 * @tag Notifications:Authoring
 * @summary Set active mapping for module+event → version
 * @operationId upsertActiveNotificationMapping
 * @bodyContent {ActiveMappingRequest} application/json
 * @response 200 - Active mapping set
 * @responseContent {NotificationMappingResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_mapping
 */
export async function upsertActiveNotificationMapping(
	req: ValidatedRequest<ActiveMappingRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const { notification_event_id, notification_template_version_id } = req.body;
		const mapping = await AuthoringDao.upsertActiveNotificationMapping(
			reservation_module_id,
			notification_event_id,
			notification_template_version_id
		);
		res.status(200).json(mapping);
	} catch (error) {
		res.status(500).json({ message: 'Error setting active notification mapping', error });
	}
}

/**
 * GET /reservation/notifications/preferences
 * @tag Notifications:Authoring
 * @summary List channel preferences for current module
 * @operationId listNotificationPreferences
 * @response 200 - Preferences retrieved
 * @responseContent {NotificationPreferenceResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_preference
 */
export async function listNotificationPreferences(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const prefs = await AuthoringDao.listNotificationPreferences(reservation_module_id);
		res.status(200).json(prefs);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification preferences', error });
	}
}

/**
 * PUT /reservation/notifications/preferences
 * @tag Notifications:Authoring
 * @summary Upsert event+channel preference
 * @operationId upsertNotificationPreference
 * @bodyContent {UpsertNotificationPreferenceRequest} application/json
 * @response 200 - Preference upserted
 * @responseContent {NotificationPreferenceResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_preference
 */
export async function upsertNotificationPreference(
	req: ValidatedRequest<UpsertNotificationPreferenceRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const updated = await AuthoringDao.upsertNotificationPreference(
			{
				...req.body,
			},
			reservation_module_id
		);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error upserting notification preference', error });
	}
}

/**
 * GET /reservation/notifications/channels
 * @tag Notifications:Authoring
 * @summary List supported channels
 * @operationId listNotificationChannels
 * @response 200 - Channels retrieved
 * @responseContent {object} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationChannels(_req: ValidatedRequest, res: Response): Promise<void> {
	try {
		res.status(200).json(Object.values(NOTIFICATION_CHANNEL));
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving channels', error });
	}
}

/**
 * GET /reservation/notifications/variables
 * @tag Notifications:Authoring
 * @summary List available template variables (catalog)
 * @operationId listNotificationVariables
 * @response 200 - Variables retrieved
 * @responseContent {object} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationVariables(_req: ValidatedRequest, res: Response): Promise<void> {
	try {
		res.status(200).json(VARIABLE_CATALOG);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving variables', error });
	}
}

/**
 * GET /reservation/notifications/events/:notification_event_id/template
 * @tag Notifications:Authoring
 * @summary Get latest template for event
 * @operationId getLatestTemplateForEvent
 * @pathParam {string} notification_event_id
 * @response 200 - Template retrieved
 * @responseContent {NotificationMappingWithTemplateVersionDAOResponse} 200.application/json
 * @response 404 - Not found
 * @response 500 - Error
 * @prisma_model notification_mapping
 */
export async function getLatestTemplateForEvent(
	req: ValidatedRequest<never, { notification_event_id: string }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const template = await AuthoringDao.getLatestTemplateForEvent(
			req.params.notification_event_id,
			reservation_module_id
		);
		if (!template) {
			res.status(404).json({ message: 'No template found for the given event in this module' });
			return;
		}
		res.status(200).json(template);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving latest template for event', error });
	}
}

export default {
	listNotificationEvents,
	createNotificationEvent,
	updateNotificationEvent,
	deleteNotificationEvent,
	listNotificationTemplates,
	createNotificationTemplate,
	updateNotificationTemplate,
	deleteNotificationTemplate,
	createNotificationTemplateVersion,
	updateNotificationTemplateVersionById,
	deleteNotificationTemplateVersionById,
	listNotificationMappings,
	createNotificationMapping,
	updateNotificationMapping,
	upsertActiveNotificationMapping,
	listNotificationPreferences,
	upsertNotificationPreference,
	listNotificationChannels,
	listNotificationVariables,
	getLatestTemplateForEvent,
};
