import prisma from '../../prisma/prisma';
import type {
	CreateNotificationMessageRequest,
	UpdateNotificationMessageStatusRequest,
	NotificationMessageResponse,
} from '../../schemas/dto/reservations/notification-message/notification-message.dto.js';
import type {
	CreateNotificationMessageEventRequest,
	NotificationMessageEventResponse,
} from '../../schemas/dto/reservations/notification-message-event/notification-message-event.dto.js';
import type {
	CreateNotificationProviderCredentialRequest,
	UpdateNotificationProviderCredentialRequest,
	NotificationProviderCredentialResponse,
} from '../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.dto.js';
import type { NotificationChannel } from '../../types/reservationNotifications/enums';
import {
	toNotificationMessageResponse,
	toNotificationMessageList,
} from '../../schemas/dto/reservations/notification-message/notification-message.mappers.js';
import {
	toNotificationMessageEventResponse,
	toNotificationMessageEventList,
} from '../../schemas/dto/reservations/notification-message-event/notification-message-event.mappers.js';
import {
	toNotificationProviderCredentialResponse,
	toNotificationProviderCredentialList,
} from '../../schemas/dto/reservations/notification-provider-credential/notification-provider-credential.mappers.js';

/**
 * Retrieves a notification message by ID.
 * @param {string} notification_message_id - The message ID.
 * @returns {Promise<NotificationMessageResponse | null>} A promise that resolves to the message or null.
 * @throws {Error} If there is an error retrieving the message.
 */
export async function getNotificationMessageById(
	notification_message_id: string
): Promise<NotificationMessageResponse | null> {
	try {
		const result = await prisma.notification_message.findUnique({ where: { notification_message_id } });
		if (!result) return null;
		return toNotificationMessageResponse(result);
	} catch {
		throw new Error('Error retrieving notification message');
	}
}

/**
 * Lists notification messages for a reservation module with optional filters.
 * @param {object} params - The filter params.
 * @param {string} params.reservation_module_id - The reservation module ID.
 * @param {string} [params.notification_event_id] - Optional event filter.
 * @param {string} [params.status] - Optional status filter.
 * @param {number} [params.take=50] - Max records to return.
 * @param {number} [params.skip=0] - Records to skip.
 * @returns {Promise<NotificationMessageResponse[]>} A promise that resolves to the list of messages.
 * @throws {Error} If there is an error retrieving the messages.
 */
export async function listNotificationMessages(params: {
	reservation_module_id: string;
	notification_event_id?: string;
	status?: string;
	take?: number;
	skip?: number;
}): Promise<NotificationMessageResponse[]> {
	try {
		const { reservation_module_id, notification_event_id, status, take = 50, skip = 0 } = params;
		const results = await prisma.notification_message.findMany({
			where: {
				reservation_module_id,
				...(notification_event_id ? { notification_event_id } : {}),
				...(status ? { status } : {}),
			},
			orderBy: { created_at: 'desc' },
			take,
			skip,
		});
		return toNotificationMessageList(results);
	} catch {
		throw new Error('Error retrieving notification messages');
	}
}

/**
 * Creates a notification message (usually by renderer/worker).
 * @param {CreateNotificationMessageRequest} data - The message data.
 * @returns {Promise<NotificationMessageResponse>} A promise that resolves to the created message.
 * @throws {Error} If there is an error creating the message.
 */
export async function createNotificationMessage(
	data: CreateNotificationMessageRequest
): Promise<NotificationMessageResponse> {
	try {
		const result = await prisma.notification_message.create({ data });
		return toNotificationMessageResponse(result);
	} catch {
		throw new Error('Error creating notification message');
	}
}

/**
 * Updates a notification message status / provider ids / error.
 * @param {UpdateNotificationMessageStatusRequest} data - The update payload.
 * @returns {Promise<NotificationMessageResponse>} A promise that resolves to the updated message.
 * @throws {Error} If there is an error updating the message.
 */
export async function updateNotificationMessageStatus(
	data: UpdateNotificationMessageStatusRequest
): Promise<NotificationMessageResponse> {
	try {
		const { notification_message_id, ...rest } = data;
		const result = await prisma.notification_message.update({
			where: { notification_message_id },
			data: rest,
		});
		return toNotificationMessageResponse(result);
	} catch {
		throw new Error('Error updating notification message');
	}
}

/**
 * Creates a delivery/audit event for a message.
 * @param {CreateNotificationMessageEventRequest} data - The event data.
 * @returns {Promise<NotificationMessageEventResponse>} A promise that resolves to the created event.
 * @throws {Error} If there is an error creating the event.
 */
export async function createNotificationMessageEvent(
	data: CreateNotificationMessageEventRequest
): Promise<NotificationMessageEventResponse> {
	try {
		const payload = { ...data, occurred_at: data.occurred_at ?? new Date() };
		const result = await prisma.notification_message_event.create({ data: payload });
		return toNotificationMessageEventResponse(result);
	} catch {
		throw new Error('Error creating notification message event');
	}
}

/**
 * Lists delivery/audit events for a message ordered by time.
 * @param {string} notification_message_id - The message ID.
 * @returns {Promise<NotificationMessageEventResponse[]>} A promise that resolves to the list of events.
 * @throws {Error} If there is an error retrieving the events.
 */
export async function listNotificationMessageEvents(
	notification_message_id: string
): Promise<NotificationMessageEventResponse[]> {
	try {
		const results = await prisma.notification_message_event.findMany({
			where: { notification_message_id },
			orderBy: { occurred_at: 'asc' },
		});
		return toNotificationMessageEventList(results);
	} catch {
		throw new Error('Error retrieving notification message events');
	}
}

/**
 * Retrieves provider credentials for a module (optionally by channel).
 * @param {string} reservation_module_id - The reservation module ID.
 * @param {NotificationChannel} [channel] - Optional channel filter.
 * @returns {Promise<NotificationProviderCredentialResponse[]>} A promise that resolves to provider credentials.
 * @throws {Error} If there is an error retrieving the credentials.
 */
export async function listNotificationProviderCredentials(
	reservation_module_id: string,
	channel?: NotificationChannel
): Promise<NotificationProviderCredentialResponse[]> {
	try {
		const results = await prisma.notification_provider_credential.findMany({
			where: { reservation_module_id, ...(channel ? { channel } : {}) },
			orderBy: [{ channel: 'asc' }, { created_at: 'desc' }],
		});
		return toNotificationProviderCredentialList(results);
	} catch {
		throw new Error('Error retrieving notification provider credentials');
	}
}

/**
 * Creates provider credentials for a module+channel+provider.
 * @param {CreateNotificationProviderCredentialRequest} data - The credential data.
 * @returns {Promise<NotificationProviderCredentialResponse>} A promise that resolves to the created credentials.
 * @throws {Error} If there is an error creating the credentials.
 */
export async function createNotificationProviderCredential(
	data: CreateNotificationProviderCredentialRequest
): Promise<NotificationProviderCredentialResponse> {
	try {
		const result = await prisma.notification_provider_credential.create({ data });
		return toNotificationProviderCredentialResponse(result);
	} catch {
		throw new Error('Error creating notification provider credential');
	}
}

/**
 * Updates provider credentials.
 * @param {string} notification_provider_credential_id - The credential ID.
 * @param {UpdateNotificationProviderCredentialRequest} data - The fields to update.
 * @returns {Promise<NotificationProviderCredentialResponse>} A promise that resolves to the updated credentials.
 * @throws {Error} If there is an error updating the credentials.
 */
export async function updateNotificationProviderCredential(
	notification_provider_credential_id: string,
	data: UpdateNotificationProviderCredentialRequest
): Promise<NotificationProviderCredentialResponse> {
	try {
		const result = await prisma.notification_provider_credential.update({
			where: { notification_provider_credential_id },
			data,
		});
		return toNotificationProviderCredentialResponse(result);
	} catch {
		throw new Error('Error updating notification provider credential');
	}
}

/**
 * Deletes provider credentials.
 * @param {string} notification_provider_credential_id - The credential ID.
 * @returns {Promise<void>} A promise that resolves when the credentials are deleted.
 * @throws {Error} If there is an error deleting the credentials.
 */
export async function deleteNotificationProviderCredential(notification_provider_credential_id: string): Promise<void> {
	try {
		await prisma.notification_provider_credential.delete({ where: { notification_provider_credential_id } });
	} catch {
		throw new Error('Error deleting notification provider credential');
	}
}

export default {
	getNotificationMessageById,
	listNotificationMessages,
	createNotificationMessage,
	updateNotificationMessageStatus,
	createNotificationMessageEvent,
	listNotificationMessageEvents,
	listNotificationProviderCredentials,
	createNotificationProviderCredential,
	updateNotificationProviderCredential,
	deleteNotificationProviderCredential,
};
