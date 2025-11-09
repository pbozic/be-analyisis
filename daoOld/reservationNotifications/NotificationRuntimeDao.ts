import prisma from '../../prisma/prisma';
import type {
	NotificationMessage,
	CreateNotificationMessageInput,
	UpdateNotificationMessageStatusInput,
} from '../../types/reservationNotifications/NotificationMessage';
import type {
	NotificationMessageEvent,
	CreateNotificationMessageEventInput,
} from '../../types/reservationNotifications/NotificationMessageEvent';
import type {
	NotificationProviderCredential,
	CreateNotificationProviderCredentialInput,
	UpdateNotificationProviderCredentialInput,
} from '../../types/reservationNotifications/NotificationProviderCredential';
import type { NotificationChannel } from '../../types/reservationNotifications/enums';

/**
 * Retrieves a notification message by ID.
 * @param {string} notification_message_id - The message ID.
 * @returns {Promise<NotificationMessage | null>} A promise that resolves to the message or null.
 * @throws {Error} If there is an error retrieving the message.
 */
export async function getNotificationMessageById(notification_message_id: string): Promise<NotificationMessage | null> {
	try {
		return await prisma.notification_message.findUnique({ where: { notification_message_id } });
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
 * @returns {Promise<NotificationMessage[]>} A promise that resolves to the list of messages.
 * @throws {Error} If there is an error retrieving the messages.
 */
export async function listNotificationMessages(params: {
	reservation_module_id: string;
	notification_event_id?: string;
	status?: string;
	take?: number;
	skip?: number;
}): Promise<NotificationMessage[]> {
	try {
		const { reservation_module_id, notification_event_id, status, take = 50, skip = 0 } = params;
		return await prisma.notification_message.findMany({
			where: {
				reservation_module_id,
				...(notification_event_id ? { notification_event_id } : {}),
				...(status ? { status } : {}),
			},
			orderBy: { created_at: 'desc' },
			take,
			skip,
		});
	} catch {
		throw new Error('Error retrieving notification messages');
	}
}

/**
 * Creates a notification message (usually by renderer/worker).
 * @param {CreateNotificationMessageInput} data - The message data.
 * @returns {Promise<NotificationMessage>} A promise that resolves to the created message.
 * @throws {Error} If there is an error creating the message.
 */
export async function createNotificationMessage(data: CreateNotificationMessageInput): Promise<NotificationMessage> {
	try {
		return await prisma.notification_message.create({ data });
	} catch {
		throw new Error('Error creating notification message');
	}
}

/**
 * Updates a notification message status / provider ids / error.
 * @param {UpdateNotificationMessageStatusInput} data - The update payload.
 * @returns {Promise<NotificationMessage>} A promise that resolves to the updated message.
 * @throws {Error} If there is an error updating the message.
 */
export async function updateNotificationMessageStatus(
	data: UpdateNotificationMessageStatusInput
): Promise<NotificationMessage> {
	try {
		const { notification_message_id, ...rest } = data;
		return await prisma.notification_message.update({
			where: { notification_message_id },
			data: rest,
		});
	} catch {
		throw new Error('Error updating notification message');
	}
}

/**
 * Creates a delivery/audit event for a message.
 * @param {CreateNotificationMessageEventInput} data - The event data.
 * @returns {Promise<NotificationMessageEvent>} A promise that resolves to the created event.
 * @throws {Error} If there is an error creating the event.
 */
export async function createNotificationMessageEvent(
	data: CreateNotificationMessageEventInput
): Promise<NotificationMessageEvent> {
	try {
		const payload = { ...data, occurred_at: data.occurred_at ?? new Date() };
		return await prisma.notification_message_event.create({ data: payload });
	} catch {
		throw new Error('Error creating notification message event');
	}
}

/**
 * Lists delivery/audit events for a message ordered by time.
 * @param {string} notification_message_id - The message ID.
 * @returns {Promise<NotificationMessageEvent[]>} A promise that resolves to the list of events.
 * @throws {Error} If there is an error retrieving the events.
 */
export async function listNotificationMessageEvents(
	notification_message_id: string
): Promise<NotificationMessageEvent[]> {
	try {
		return await prisma.notification_message_event.findMany({
			where: { notification_message_id },
			orderBy: { occurred_at: 'asc' },
		});
	} catch {
		throw new Error('Error retrieving notification message events');
	}
}

/**
 * Retrieves provider credentials for a module (optionally by channel).
 * @param {string} reservation_module_id - The reservation module ID.
 * @param {NotificationChannel} [channel] - Optional channel filter.
 * @returns {Promise<NotificationProviderCredential[]>} A promise that resolves to provider credentials.
 * @throws {Error} If there is an error retrieving the credentials.
 */
export async function listNotificationProviderCredentials(
	reservation_module_id: string,
	channel?: NotificationChannel
): Promise<NotificationProviderCredential[]> {
	try {
		return await prisma.notification_provider_credential.findMany({
			where: { reservation_module_id, ...(channel ? { channel } : {}) },
			orderBy: [{ channel: 'asc' }, { created_at: 'desc' }],
		});
	} catch {
		throw new Error('Error retrieving notification provider credentials');
	}
}

/**
 * Creates provider credentials for a module+channel+provider.
 * @param {CreateNotificationProviderCredentialInput} data - The credential data.
 * @returns {Promise<NotificationProviderCredential>} A promise that resolves to the created credentials.
 * @throws {Error} If there is an error creating the credentials.
 */
export async function createNotificationProviderCredential(
	data: CreateNotificationProviderCredentialInput
): Promise<NotificationProviderCredential> {
	try {
		return await prisma.notification_provider_credential.create({ data });
	} catch {
		throw new Error('Error creating notification provider credential');
	}
}

/**
 * Updates provider credentials.
 * @param {string} notification_provider_credential_id - The credential ID.
 * @param {UpdateNotificationProviderCredentialInput} data - The fields to update.
 * @returns {Promise<NotificationProviderCredential>} A promise that resolves to the updated credentials.
 * @throws {Error} If there is an error updating the credentials.
 */
export async function updateNotificationProviderCredential(
	notification_provider_credential_id: string,
	data: UpdateNotificationProviderCredentialInput
): Promise<NotificationProviderCredential> {
	try {
		return await prisma.notification_provider_credential.update({
			where: { notification_provider_credential_id },
			data,
		});
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
