import { Response } from 'express';
import { NOTIFICATION_CHANNEL } from '@prisma/client';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import * as AuthoringDao from '../../dao/reservationNotifications/NotificationAuthoringDao.ts';
import {
	CreateNotificationEventInput,
	UpdateNotificationEventInput,
} from '../../types/reservationNotifications/NotificationEvent';
import {
	CreateNotificationTemplateInput,
	UpdateNotificationTemplateInput,
} from '../../types/reservationNotifications/NotificationTemplate';
import {
	CreateNotificationTemplateVersionInput,
	UpdateNotificationTemplateVersionByIdInput,
} from '../../types/reservationNotifications/NotificationTemplateVersion';
import {
	CreateNotificationMappingInput,
	UpdateNotificationMappingInput,
} from '../../types/reservationNotifications/NotificationMapping';
import { UpsertNotificationPreferenceInput } from '../../types/reservationNotifications/NotificationPreference';
import { VARIABLE_CATALOG } from '../../lib/reservationNotifications.ts';

/**
 * GET /notifications/events
 * @tag Notifications:Authoring
 * @summary List notification events
 * @operationId listNotificationEvents
 * @response 200 - Events retrieved
 * @responseContent {NotificationEvent[]} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationEvents(_req: ValidatedRequest<null>, res: Response): Promise<void> {
	try {
		const events = await AuthoringDao.listNotificationEvents();
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification events', error });
	}
}

/**
 * POST /notifications/events
 * @tag Notifications:Authoring
 * @summary Create notification event
 * @operationId createNotificationEvent
 * @requestBody {CreateNotificationEventInput} requestBody
 * @response 201 - Event created
 * @responseContent {NotificationEvent} 201.application/json
 * @response 500 - Error
 */
export async function createNotificationEvent(
	req: ValidatedRequest<CreateNotificationEventInput>,
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
 * PUT /notifications/events/{notification_event_id}
 * @tag Notifications:Authoring
 * @summary Update notification event
 * @operationId updateNotificationEvent
 * @pathParam {string} notification_event_id
 * @requestBody {UpdateNotificationEventInput} requestBody
 * @response 200 - Event updated
 * @responseContent {NotificationEvent} 200.application/json
 * @response 500 - Error
 */
export async function updateNotificationEvent(
	req: ValidatedRequest<UpdateNotificationEventInput, { notification_event_id: string }>,
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
 * DELETE /notifications/events/{notification_event_id}
 * @tag Notifications:Authoring
 * @summary Delete notification event
 * @operationId deleteNotificationEvent
 * @pathParam {string} notification_event_id
 * @response 204 - Event deleted
 * @response 500 - Error
 */
export async function deleteNotificationEvent(
	req: ValidatedRequest<null, { notification_event_id: string }>,
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
 * GET /notifications/templates
 * @tag Notifications:Authoring
 * @summary List templates for current module
 * @operationId listNotificationTemplates
 * @response 200 - Templates retrieved
 * @responseContent {NotificationTemplate[]} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationTemplates(req: ValidatedRequest<null>, res: Response): Promise<void> {
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
 * POST /notifications/templates
 * @tag Notifications:Authoring
 * @summary Create notification template
 * @operationId createNotificationTemplate
 * @requestBody {CreateNotificationTemplateInput} requestBody
 * @response 201 - Template created
 * @responseContent {NotificationTemplate} 201.application/json
 * @response 500 - Error
 */
export async function createNotificationTemplate(
	req: ValidatedRequest<CreateNotificationTemplateInput>,
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
 * PUT /notifications/templates/{notification_template_id}
 * @tag Notifications:Authoring
 * @summary Update notification template
 * @operationId updateNotificationTemplate
 * @pathParam {string} notification_template_id
 * @requestBody {UpdateNotificationTemplateInput} requestBody
 * @response 200 - Template updated
 * @responseContent {NotificationTemplate} 200.application/json
 * @response 500 - Error
 */
export async function updateNotificationTemplate(
	req: ValidatedRequest<UpdateNotificationTemplateInput, { notification_template_id: string }>,
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
 * DELETE /notifications/templates/{notification_template_id}
 * @tag Notifications:Authoring
 * @summary Delete notification template
 * @operationId deleteNotificationTemplate
 * @pathParam {string} notification_template_id
 * @response 204 - Template deleted
 * @response 500 - Error
 */
export async function deleteNotificationTemplate(
	req: ValidatedRequest<null, { notification_template_id: string }>,
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
 * POST /notifications/templates/{notification_template_id}/versions
 * @tag Notifications:Authoring
 * @summary Create template version (auto-increment)
 * @operationId createNotificationTemplateVersion
 * @pathParam {string} notification_template_id
 * @requestBody {Omit<CreateNotificationTemplateVersionInput,"notification_template_id">} requestBody
 * @response 201 - Version created
 * @responseContent {NotificationTemplateVersion} 201.application/json
 * @response 500 - Error
 */
export async function createNotificationTemplateVersion(
	req: ValidatedRequest<
		Omit<CreateNotificationTemplateVersionInput, 'notification_template_id' | 'created_by_user_id'>,
		{ notification_template_id: string }
	>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id as string;
		const created = await AuthoringDao.createVersionMapAndArchiveForEvent(
			reservation_module_id,
			req.params.notification_template_id,
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
 * PUT /notifications/versions/{notification_template_version_id}
 * @tag Notifications:Authoring
 * @summary Update template version by ID
 * @operationId updateNotificationTemplateVersionById
 * @pathParam {string} notification_template_version_id
 * @requestBody {UpdateNotificationTemplateVersionByIdInput} requestBody
 * @response 200 - Version updated
 * @responseContent {NotificationTemplateVersion} 200.application/json
 * @response 500 - Error
 */
export async function updateNotificationTemplateVersionById(
	req: ValidatedRequest<UpdateNotificationTemplateVersionByIdInput, { notification_template_version_id: string }>,
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
 * DELETE /notifications/versions/{notification_template_version_id}
 * @tag Notifications:Authoring
 * @summary Delete template version by ID
 * @operationId deleteNotificationTemplateVersionById
 * @pathParam {string} notification_template_version_id
 * @response 204 - Version deleted
 * @response 500 - Error
 */
export async function deleteNotificationTemplateVersionById(
	req: ValidatedRequest<null, { notification_template_version_id: string }>,
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
 * GET /notifications/mappings
 * @tag Notifications:Authoring
 * @summary List mappings for current module
 * @operationId listNotificationMappings
 * @response 200 - Mappings retrieved
 * @responseContent {NotificationMapping[]} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationMappings(req: ValidatedRequest<null>, res: Response): Promise<void> {
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
 * POST /notifications/mappings
 * @tag Notifications:Authoring
 * @summary Create a mapping
 * @operationId createNotificationMapping
 * @requestBody {CreateNotificationMappingInput} requestBody
 * @response 201 - Mapping created
 * @responseContent {NotificationMapping} 201.application/json
 * @response 500 - Error
 */
export async function createNotificationMapping(
	req: ValidatedRequest<CreateNotificationMappingInput>,
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
 * PUT /notifications/mappings/{notification_mapping_id}
 * @tag Notifications:Authoring
 * @summary Update a mapping
 * @operationId updateNotificationMapping
 * @pathParam {string} notification_mapping_id
 * @requestBody {UpdateNotificationMappingInput} requestBody
 * @response 200 - Mapping updated
 * @responseContent {NotificationMapping} 200.application/json
 * @response 500 - Error
 */
export async function updateNotificationMapping(
	req: ValidatedRequest<UpdateNotificationMappingInput, { notification_mapping_id: string }>,
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
 * POST /notifications/mappings/active
 * @tag Notifications:Authoring
 * @summary Set active mapping for module+event → version
 * @operationId upsertActiveNotificationMapping
 * @requestBody {object} requestBody
 * @property {string} notification_event_id.required
 * @property {string} notification_template_version_id.required
 * @response 200 - Active mapping set
 * @responseContent {NotificationMapping} 200.application/json
 * @response 500 - Error
 */
export async function upsertActiveNotificationMapping(
	req: ValidatedRequest<{ notification_event_id: string; notification_template_version_id: string }>,
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
 * GET /notifications/preferences
 * @tag Notifications:Authoring
 * @summary List channel preferences for current module
 * @operationId listNotificationPreferences
 * @response 200 - Preferences retrieved
 * @responseContent {NotificationPreference[]} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationPreferences(req: ValidatedRequest<null>, res: Response): Promise<void> {
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
 * PUT /notifications/preferences
 * @tag Notifications:Authoring
 * @summary Upsert event+channel preference
 * @operationId upsertNotificationPreference
 * @requestBody {UpsertNotificationPreferenceInput} requestBody
 * @response 200 - Preference upserted
 * @responseContent {NotificationPreference} 200.application/json
 * @response 500 - Error
 */
export async function upsertNotificationPreference(
	req: ValidatedRequest<UpsertNotificationPreferenceInput>,
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
 * GET /notifications/channels
 * @tag Notifications:Authoring
 * @summary List supported channels
 * @operationId listNotificationChannels
 * @response 200 - Channels retrieved
 * @responseContent {string[]} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationChannels(_req: ValidatedRequest<null>, res: Response): Promise<void> {
	try {
		res.status(200).json(Object.values(NOTIFICATION_CHANNEL));
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving channels', error });
	}
}

/**
 * GET /notifications/variables
 * @tag Notifications:Authoring
 * @summary List available template variables (catalog)
 * @operationId listNotificationVariables
 * @response 200 - Variables retrieved
 * @responseContent {object} 200.application/json
 * @response 500 - Error
 */
export async function listNotificationVariables(_req: ValidatedRequest<null>, res: Response): Promise<void> {
	try {
		res.status(200).json(VARIABLE_CATALOG);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving variables', error });
	}
}

export async function getLatestTemplateForEvent(
	req: ValidatedRequest<null, { notification_event_id: string }>,
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
