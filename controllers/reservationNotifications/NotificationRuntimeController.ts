import { Response } from 'express';
import { NOTIFICATION_CHANNEL } from '@prisma/client';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import * as RuntimeDao from '../../dao/reservationNotifications/NotificationRuntimeDao.ts';
import type {
	CreateNotificationMessageRequest,
	UpdateNotificationMessageStatusRequest,
	// Response types for JSDoc
	// NotificationMessageResponse,
} from '../../schemas/dto/reservations/notification-message/notification-message.dto';
import type {
	CreateNotificationMessageEventRequest,
	// Response types for JSDoc
	// NotificationMessageEventResponse,
} from '../../schemas/dto/reservations/notification-message-event/notification-message-event.dto';
import type {
	CreateNotificationProviderCredentialRequest,
	UpdateNotificationProviderCredentialRequest,
	// Response types for JSDoc
	// NotificationProviderCredentialResponse,
} from '../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.dto';

/**
 * GET /reservation/notifications/messages/:notification_message_id
 * @tag Notifications:Runtime
 * @summary Get a notification message by ID
 * @operationId getNotificationMessage
 * @pathParam {string} notification_message_id
 * @response 200 - Message retrieved
 * @responseContent {NotificationMessageResponse} 200.application/json
 * @response 404 - Not found
 * @response 500 - Error
 * @prisma_model notification_message
 */
export async function getNotificationMessage(
	req: ValidatedRequest<null, { notification_message_id: string }>,
	res: Response
): Promise<void> {
	try {
		const msg = await RuntimeDao.getNotificationMessageById(req.params.notification_message_id);
		if (!msg) {
			res.status(404).json({ message: 'Notification message not found' });
			return;
		}
		res.status(200).json(msg);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification message', error });
	}
}

/**
 * POST /reservation/notifications/messages/list
 * @tag Notifications:Runtime
 * @summary List messages for current module with optional filters
 * @operationId listNotificationMessages
 * @bodyContent {object} application/json
 * @property {string} [notification_event_id] - Optional event filter
 * @property {string} [status] - Optional status filter
 * @property {number} [take=50]
 * @property {number} [skip=0]
 * @response 200 - Messages retrieved
 * @responseContent {NotificationMessageResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_message
 */
export async function listNotificationMessages(
	req: ValidatedRequest<{ notification_event_id?: string; status?: string; take?: number; skip?: number }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const { notification_event_id, status, take, skip } = req.body || {};
		const items = await RuntimeDao.listNotificationMessages({
			reservation_module_id,
			notification_event_id,
			status,
			take,
			skip,
		});
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification messages', error });
	}
}

/**
 * POST /reservation/notifications/messages
 * @tag Notifications:Runtime
 * @summary Create a notification message (usually by renderer/worker)
 * @operationId createNotificationMessage
 * @bodyContent {CreateNotificationMessageRequest} application/json
 * @response 201 - Message created
 * @responseContent {NotificationMessageResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_message
 */
export async function createNotificationMessage(
	req: ValidatedRequest<CreateNotificationMessageRequest>,
	res: Response
): Promise<void> {
	try {
		const created = await RuntimeDao.createNotificationMessage(req.body);
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification message', error });
	}
}

/**
 * PUT /reservation/notifications/messages/:notification_message_id/status
 * @tag Notifications:Runtime
 * @summary Update notification message status
 * @operationId updateNotificationMessageStatus
 * @pathParam {string} notification_message_id
 * @bodyContent {UpdateNotificationMessageStatusRequest} application/json
 * @response 200 - Message updated
 * @responseContent {NotificationMessageResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_message
 */
export async function updateNotificationMessageStatus(
	req: ValidatedRequest<
		Omit<UpdateNotificationMessageStatusRequest, 'notification_message_id'>,
		{ notification_message_id: string }
	>,
	res: Response
): Promise<void> {
	try {
		const updated = await RuntimeDao.updateNotificationMessageStatus({
			...req.body,
			notification_message_id: req.params.notification_message_id,
		});
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating notification message', error });
	}
}

/**
 * GET /reservation/notifications/messages/:notification_message_id/events
 * @tag Notifications:Runtime
 * @summary List message delivery/audit events
 * @operationId listNotificationMessageEvents
 * @pathParam {string} notification_message_id
 * @response 200 - Events retrieved
 * @responseContent {NotificationMessageEventResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_message_event
 */
export async function listNotificationMessageEvents(
	req: ValidatedRequest<null, { notification_message_id: string }>,
	res: Response
): Promise<void> {
	try {
		const events = await RuntimeDao.listNotificationMessageEvents(req.params.notification_message_id);
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving notification message events', error });
	}
}

/**
 * POST /reservation/notifications/messages/:notification_message_id/events
 * @tag Notifications:Runtime
 * @summary Create message delivery/audit event
 * @operationId createNotificationMessageEvent
 * @pathParam {string} notification_message_id
 * @bodyContent {CreateNotificationMessageEventRequest} application/json
 * @response 201 - Event created
 * @responseContent {NotificationMessageEventResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_message_event
 */
export async function createNotificationMessageEvent(
	req: ValidatedRequest<
		Omit<CreateNotificationMessageEventRequest, 'notification_message_id'>,
		{ notification_message_id: string }
	>,
	res: Response
): Promise<void> {
	try {
		const created = await RuntimeDao.createNotificationMessageEvent({
			...req.body,
			notification_message_id: req.params.notification_message_id,
		});
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating notification message event', error });
	}
}

/**
 * GET /reservation/notifications/providers
 * @tag Notifications:Runtime
 * @summary List provider credentials for current module (optional channel)
 * @operationId listNotificationProviderCredentials
 * @queryParam {NOTIFICATION_CHANNEL} [channel]
 * @response 200 - Credentials retrieved
 * @responseContent {NotificationProviderCredentialResponse[]} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_provider_credential
 */
export async function listNotificationProviderCredentials(
	req: ValidatedRequest<null, object, { channel?: NOTIFICATION_CHANNEL }>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const { channel } = req.query || {};
		const creds = await RuntimeDao.listNotificationProviderCredentials(reservation_module_id, channel);
		res.status(200).json(creds);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving provider credentials', error });
	}
}

/**
 * POST /reservation/notifications/providers
 * @tag Notifications:Runtime
 * @summary Create provider credentials
 * @operationId createNotificationProviderCredential
 * @bodyContent {CreateNotificationProviderCredentialRequest} application/json
 * @response 201 - Credentials created
 * @responseContent {NotificationProviderCredentialResponse} 201.application/json
 * @response 500 - Error
 * @prisma_model notification_provider_credential
 */
export async function createNotificationProviderCredential(
	req: ValidatedRequest<CreateNotificationProviderCredentialRequest>,
	res: Response
): Promise<void> {
	try {
		const reservation_module_id = req.user?.reservation_module_id ?? req.body.reservation_module_id;
		if (!reservation_module_id) {
			res.status(400).json({ message: 'Reservation module ID is required' });
			return;
		}
		const created = await RuntimeDao.createNotificationProviderCredential({
			...req.body,
			reservation_module_id,
		});
		res.status(201).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error creating provider credential', error });
	}
}

/**
 * PUT /reservation/notifications/providers/:notification_provider_credential_id
 * @tag Notifications:Runtime
 * @summary Update provider credentials
 * @operationId updateNotificationProviderCredential
 * @pathParam {string} notification_provider_credential_id
 * @bodyContent {UpdateNotificationProviderCredentialRequest} application/json
 * @response 200 - Credentials updated
 * @responseContent {NotificationProviderCredentialResponse} 200.application/json
 * @response 500 - Error
 * @prisma_model notification_provider_credential
 */
export async function updateNotificationProviderCredential(
	req: ValidatedRequest<UpdateNotificationProviderCredentialRequest, { notification_provider_credential_id: string }>,
	res: Response
): Promise<void> {
	try {
		const updated = await RuntimeDao.updateNotificationProviderCredential(
			req.params.notification_provider_credential_id,
			req.body
		);
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({ message: 'Error updating provider credential', error });
	}
}

/**
 * DELETE /reservation/notifications/providers/:notification_provider_credential_id
 * @tag Notifications:Runtime
 * @summary Delete provider credentials
 * @operationId deleteNotificationProviderCredential
 * @pathParam {string} notification_provider_credential_id
 * @response 204 - Credentials deleted
 * @responseContent {void} 204.application/json
 * @response 500 - Error
 * @prisma_model notification_provider_credential
 */
export async function deleteNotificationProviderCredential(
	req: ValidatedRequest<null, { notification_provider_credential_id: string }>,
	res: Response
): Promise<void> {
	try {
		await RuntimeDao.deleteNotificationProviderCredential(req.params.notification_provider_credential_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting provider credential', error });
	}
}

export default {
	getNotificationMessage,
	listNotificationMessages,
	createNotificationMessage,
	updateNotificationMessageStatus,
	listNotificationMessageEvents,
	createNotificationMessageEvent,
	listNotificationProviderCredentials,
	createNotificationProviderCredential,
	updateNotificationProviderCredential,
	deleteNotificationProviderCredential,
};
