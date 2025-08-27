import { Prisma } from '@prisma/client';

import prisma from '../../prisma/prisma';
import type {
	NotificationEvent,
	CreateNotificationEventInput,
	UpdateNotificationEventInput,
} from '../../types/reservationNotifications/NotificationEvent';
import type {
	NotificationTemplate,
	CreateNotificationTemplateInput,
	UpdateNotificationTemplateInput,
} from '../../types/reservationNotifications/NotificationTemplate';
import type {
	NotificationTemplateVersion,
	CreateNotificationTemplateVersionInput,
	UpdateNotificationTemplateVersionByIdInput,
	UpdateNotificationTemplateVersionByCompositeInput,
} from '../../types/reservationNotifications/NotificationTemplateVersion';
import type {
	NotificationMapping,
	CreateNotificationMappingInput,
	UpdateNotificationMappingInput,
} from '../../types/reservationNotifications/NotificationMapping';
import type {
	NotificationPreference,
	UpsertNotificationPreferenceInput,
} from '../../types/reservationNotifications/NotificationPreference';

/**
 * Retrieves all notification events ordered by key.
 * @returns {Promise<NotificationEvent[]>} A promise that resolves to a list of notification events.
 * @throws {Error} If there is an error retrieving the events.
 */
export async function listNotificationEvents(): Promise<NotificationEvent[]> {
	try {
		return await prisma.notification_event.findMany({ orderBy: { key: 'asc' } });
	} catch {
		throw new Error('Error retrieving notification events');
	}
}

/**
 * Creates a new notification event.
 * @param {CreateNotificationEventInput} data - The event data (key, name, description?).
 * @returns {Promise<NotificationEvent>} A promise that resolves to the created event.
 * @throws {Error} If there is an error creating the event.
 */
export async function createNotificationEvent(data: CreateNotificationEventInput): Promise<NotificationEvent> {
	try {
		return await prisma.notification_event.create({ data });
	} catch {
		throw new Error('Error creating notification event');
	}
}

/**
 * Updates an existing notification event.
 * @param {string} notification_event_id - The event ID.
 * @param {UpdateNotificationEventInput} data - The fields to update.
 * @returns {Promise<NotificationEvent>} A promise that resolves to the updated event.
 * @throws {Error} If there is an error updating the event.
 */
export async function updateNotificationEvent(
	notification_event_id: string,
	data: UpdateNotificationEventInput
): Promise<NotificationEvent> {
	try {
		return await prisma.notification_event.update({ where: { notification_event_id }, data });
	} catch {
		throw new Error('Error updating notification event');
	}
}

/**
 * Deletes a notification event.
 * @param {string} notification_event_id - The event ID.
 * @returns {Promise<void>} A promise that resolves when the event is deleted.
 * @throws {Error} If there is an error deleting the event.
 */
export async function deleteNotificationEvent(notification_event_id: string): Promise<void> {
	try {
		await prisma.notification_event.delete({ where: { notification_event_id } });
	} catch {
		throw new Error('Error deleting notification event');
	}
}

/**
 * Retrieves all templates for a reservation module ordered by key.
 * @param {string} reservation_module_id - The reservation module ID.
 * @returns {Promise<NotificationTemplate[]>} A promise that resolves to a list of templates.
 * @throws {Error} If there is an error retrieving the templates.
 */
export async function listNotificationTemplates(reservation_module_id: string): Promise<NotificationTemplate[]> {
	try {
		return await prisma.notification_template.findMany({
			where: { reservation_module_id },
			orderBy: { key: 'asc' },
		});
	} catch {
		throw new Error('Error retrieving notification templates');
	}
}

/**
 * Creates a new notification template.
 * @param {CreateNotificationTemplateInput} data - The template data (reservation_module_id, key, name).
 * @returns {Promise<NotificationTemplate>} A promise that resolves to the created template.
 * @throws {Error} If there is an error creating the template.
 */
export async function createNotificationTemplate(data: CreateNotificationTemplateInput): Promise<NotificationTemplate> {
	try {
		return await prisma.notification_template.create({ data });
	} catch {
		throw new Error('Error creating notification template');
	}
}

/**
 * Updates an existing notification template.
 * @param {string} notification_template_id - The template ID.
 * @param {UpdateNotificationTemplateInput} data - The fields to update.
 * @returns {Promise<NotificationTemplate>} A promise that resolves to the updated template.
 * @throws {Error} If there is an error updating the template.
 */
export async function updateNotificationTemplate(
	notification_template_id: string,
	data: UpdateNotificationTemplateInput
): Promise<NotificationTemplate> {
	try {
		return await prisma.notification_template.update({ where: { notification_template_id }, data });
	} catch {
		throw new Error('Error updating notification template');
	}
}

/**
 * Deletes a notification template.
 * @param {string} notification_template_id - The template ID.
 * @returns {Promise<void>} A promise that resolves when the template is deleted.
 * @throws {Error} If there is an error deleting the template.
 */
export async function deleteNotificationTemplate(notification_template_id: string): Promise<void> {
	try {
		await prisma.notification_template.delete({ where: { notification_template_id } });
	} catch {
		throw new Error('Error deleting notification template');
	}
}

// /**
//  * Creates a new template version (auto-increments version).
//  * @param {CreateNotificationTemplateVersionInput} data - The version data (template_id, subject?, body_text?, variables_json_schema, ...).
//  * @returns {Promise<NotificationTemplateVersion>} A promise that resolves to the created version.
//  * @throws {Error} If there is an error creating the version.
//  */
// export async function createNotificationTemplateVersion(
// 	data: CreateNotificationTemplateVersionInput
// ): Promise<NotificationTemplateVersion> {
// 	try {
// 		const { notification_template_id } = data;
// 		const agg = await prisma.notification_template_version.aggregate({
// 			where: { notification_template_id },
// 			_max: { version: true },
// 		});
// 		const nextVersion = (agg._max.version ?? 0) + 1;

// 		return await prisma.notification_template_version.create({
// 			data: { ...data, version: nextVersion },
// 		});
// 	} catch {
// 		throw new Error('Error creating notification template version');
// 	}
// }

/**
 * Updates a template version by ID.
 * @param {string} notification_template_version_id - The version ID.
 * @param {UpdateNotificationTemplateVersionByIdInput} data - The fields to update.
 * @returns {Promise<NotificationTemplateVersion>} A promise that resolves to the updated version.
 * @throws {Error} If there is an error updating the version.
 */
export async function updateNotificationTemplateVersionById(
	notification_template_version_id: string,
	data: UpdateNotificationTemplateVersionByIdInput
): Promise<NotificationTemplateVersion> {
	try {
		return await prisma.notification_template_version.update({
			where: { notification_template_version_id },
			data,
		});
	} catch {
		throw new Error('Error updating notification template version');
	}
}

/**
 * Updates a template version by composite key (template_id + version).
 * @param {UpdateNotificationTemplateVersionByCompositeInput} data - The composite keys and fields to update.
 * @returns {Promise<NotificationTemplateVersion>} A promise that resolves to the updated version.
 * @throws {Error} If there is an error updating the version.
 */
export async function updateNotificationTemplateVersionByComposite(
	data: UpdateNotificationTemplateVersionByCompositeInput
): Promise<NotificationTemplateVersion> {
	try {
		const { notification_template_id, version, ...changes } = data;
		return await prisma.notification_template_version.update({
			where: { notification_template_id_version: { notification_template_id, version } },
			data: changes,
		});
	} catch {
		throw new Error('Error updating notification template version');
	}
}

/**
 * Deletes a template version by ID.
 * @param {string} notification_template_version_id - The version ID.
 * @returns {Promise<void>} A promise that resolves when the version is deleted.
 * @throws {Error} If there is an error deleting the version.
 */
export async function deleteNotificationTemplateVersionById(notification_template_version_id: string): Promise<void> {
	try {
		await prisma.notification_template_version.delete({ where: { notification_template_version_id } });
	} catch {
		throw new Error('Error deleting notification template version');
	}
}

/**
 * Deletes a template version by composite key (template_id + version).
 * @param {string} notification_template_id - The template ID.
 * @param {number} version - The version number.
 * @returns {Promise<void>} A promise that resolves when the version is deleted.
 * @throws {Error} If there is an error deleting the version.
 */
export async function deleteNotificationTemplateVersionByComposite(
	notification_template_id: string,
	version: number
): Promise<void> {
	try {
		await prisma.notification_template_version.delete({
			where: { notification_template_id_version: { notification_template_id, version } },
		});
	} catch {
		throw new Error('Error deleting notification template version');
	}
}

/**
 * Retrieves all mappings for a reservation module.
 * @param {string} reservation_module_id - The reservation module ID.
 * @returns {Promise<NotificationMapping[]>} A promise that resolves to a list of mappings.
 * @throws {Error} If there is an error retrieving the mappings.
 */
export async function listNotificationMappings(reservation_module_id: string): Promise<NotificationMapping[]> {
	try {
		return await prisma.notification_mapping.findMany({
			where: { reservation_module_id },
			orderBy: { created_at: 'desc' },
		});
	} catch {
		throw new Error('Error retrieving notification mappings');
	}
}

/**
 * Creates a notification mapping.
 * @param {CreateNotificationMappingInput} data - The mapping data.
 * @returns {Promise<NotificationMapping>} A promise that resolves to the created mapping.
 * @throws {Error} If there is an error creating the mapping.
 */
export async function createNotificationMapping(data: CreateNotificationMappingInput): Promise<NotificationMapping> {
	try {
		return await prisma.notification_mapping.create({ data });
	} catch {
		throw new Error('Error creating notification mapping');
	}
}

/**
 * Updates a notification mapping.
 * @param {string} notification_mapping_id - The mapping ID.
 * @param {UpdateNotificationMappingInput} data - The fields to update.
 * @returns {Promise<NotificationMapping>} A promise that resolves to the updated mapping.
 * @throws {Error} If there is an error updating the mapping.
 */
export async function updateNotificationMapping(
	notification_mapping_id: string,
	data: UpdateNotificationMappingInput
): Promise<NotificationMapping> {
	try {
		return await prisma.notification_mapping.update({ where: { notification_mapping_id }, data });
	} catch {
		throw new Error('Error updating notification mapping');
	}
}

/**
 * Sets or switches the active mapping for a module+event to a given version.
 * @param {string} reservation_module_id - The reservation module ID.
 * @param {string} notification_event_id - The event ID.
 * @param {string} notification_template_version_id - The version ID to activate.
 * @returns {Promise<NotificationMapping>} A promise that resolves to the upserted mapping.
 * @throws {Error} If there is an error setting the active mapping.
 */
export async function upsertActiveNotificationMapping(
	reservation_module_id: string,
	notification_event_id: string,
	notification_template_version_id: string
): Promise<NotificationMapping> {
	try {
		return await prisma.notification_mapping.upsert({
			where: {
				reservation_module_id_notification_event_id: {
					reservation_module_id,
					notification_event_id,
				},
			},
			update: { notification_template_version_id, is_active: true },
			create: {
				reservation_module_id,
				notification_event_id,
				notification_template_version_id,
				is_active: true,
			},
		});
	} catch {
		throw new Error('Error setting active notification mapping');
	}
}

/**
 * Retrieves all channel preferences for a module.
 * @param {string} reservation_module_id - The reservation module ID.
 * @returns {Promise<NotificationPreference[]>} A promise that resolves to the list of preferences.
 * @throws {Error} If there is an error retrieving the preferences.
 */
export async function listNotificationPreferences(reservation_module_id: string): Promise<NotificationPreference[]> {
	try {
		return await prisma.notification_preference.findMany({
			where: { reservation_module_id },
			orderBy: [{ notification_event_id: 'asc' }, { channel: 'asc' }],
		});
	} catch {
		throw new Error('Error retrieving notification preferences');
	}
}

/**
 * Upserts an event+channel preference.
 * @param {UpsertNotificationPreferenceInput} data - The preference data (module, event, channel, enabled).
 * @returns {Promise<NotificationPreference>} A promise that resolves to the upserted preference.
 * @throws {Error} If there is an error upserting the preference.
 */
export async function upsertNotificationPreference(
	data: UpsertNotificationPreferenceInput,
	reservation_module_id: string
): Promise<NotificationPreference> {
	try {
		const { notification_event_id, channel, enabled } = data;
		return await prisma.notification_preference.upsert({
			where: {
				reservation_module_id_notification_event_id_channel: {
					reservation_module_id,
					notification_event_id,
					channel,
				},
			},
			update: { enabled },
			create: { reservation_module_id, notification_event_id, channel, enabled },
		});
	} catch {
		throw new Error('Error upserting notification preference');
	}
}

export async function getLatestTemplateForEvent(
	notification_event_id: string,
	reservation_module_id: string
): Promise<NotificationTemplateVersion | null> {
	try {
		console.log(`Fetching latest template for event ${notification_event_id} in module ${reservation_module_id}`);
		const mapping = await prisma.notification_mapping.findUnique({
			where: {
				reservation_module_id_notification_event_id: {
					reservation_module_id,
					notification_event_id,
				},
			},
			include: {
				version: { include: { template: true } },
			},
		});

		const v = mapping?.version;
		if (!v) return null;

		return {
			notification_template_version_id: v.notification_template_version_id,
			notification_template_id: v.notification_template_id,
			version: v.version,
			status: v.status,
			subject: v.subject,
			body_text: v.body_text,
			variables_json_schema: v.variables_json_schema,
			compiled_artifacts: v.compiled_artifacts,
			created_at: v.created_at,
			template: v.template,
			created_by_user_id: v.created_by_user_id,
		};
	} catch {
		throw new Error('Error retrieving active template version for event');
	}
}
/**
 * Create a new template version for (module,event), repoint mapping to it,
 * and archive the previously mapped version (if any) — all atomically.
 *
 * @param {string} reservation_module_id - Module ID.
 * @param {string} notification_event_id - Event ID.
 * @param {Omit<CreateNotificationTemplateVersionInput, 'notification_template_id' | 'version'>} data
 *        Fields for the new version (subject?, body_text?, variables_json_schema, compiled_artifacts?, created_by_user_id?, status?).
 *        status defaults to 'PUBLISHED'.
 * @returns {Promise<{ version: NotificationTemplateVersion; mapping: NotificationMapping; archived_previous_version_id: string | null }>}
 * @throws {Error} If anything fails.
 */
export async function createVersionMapAndArchiveForEvent(
	reservation_module_id: string,
	notification_event_id: string,
	data: Omit<CreateNotificationTemplateVersionInput, 'notification_event_id' | 'version'>
): Promise<{
	version: NotificationTemplateVersion;
	mapping: NotificationMapping;
	archived_previous_version_id: string | null;
}> {
	try {
		console.log(
			`Creating new version for event ${notification_event_id} in module ${reservation_module_id} with data:`,
			data
		);
		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			// 1) Find current mapping → current template (if any)
			const mapping = await tx.notification_mapping.findUnique({
				where: {
					reservation_module_id_notification_event_id: {
						reservation_module_id,
						notification_event_id,
					},
				},
				include: {
					version: true,
					event: { select: { key: true, name: true } },
				},
			});

			// 2) Ensure a template exists (use mapped template, or create one derived from event key)
			let templateId: string | null = mapping?.version?.notification_template_id ?? null;

			if (!templateId) {
				const ev =
					mapping?.event ??
					(await tx.notification_event.findUnique({
						where: { notification_event_id },
						select: { key: true, name: true },
					}));

				if (!ev) throw new Error('notification_event not found');

				const derivedKey = ev.key.replace(/\./g, '_');

				const tpl = await tx.notification_template.upsert({
					where: { reservation_module_id_key: { reservation_module_id, key: derivedKey } },
					update: { name: ev.name },
					create: { reservation_module_id, key: derivedKey, name: ev.name },
				});

				templateId = tpl.notification_template_id;
			}

			// 3) Next version number for that template
			const agg = await tx.notification_template_version.aggregate({
				where: { notification_template_id: templateId },
				_max: { version: true },
			});
			const nextVersion = (agg._max.version ?? 0) + 1;

			// 4) Create the new version
			const {
				subject = null,
				body_text = null,
				variables_json_schema,
				compiled_artifacts = {},
				created_by_user_id = null,
				status = 'PUBLISHED',
			} = data as NotificationTemplateVersion;

			const newVersion = await tx.notification_template_version.create({
				data: {
					notification_template_id: templateId,
					version: nextVersion,
					status,
					subject,
					body_text,
					variables_json_schema: variables_json_schema as Prisma.InputJsonObject,
					compiled_artifacts: compiled_artifacts as Prisma.InputJsonObject,
					created_by_user_id,
				},
			});

			// 5) Remember previously mapped version to archive later
			const oldVersionId = mapping?.notification_template_version_id ?? null;

			// 6) Repoint mapping to the new version
			const updatedMapping = await tx.notification_mapping.upsert({
				where: {
					reservation_module_id_notification_event_id: {
						reservation_module_id,
						notification_event_id,
					},
				},
				update: {
					notification_template_version_id: newVersion.notification_template_version_id,
					is_active: true,
				},
				create: {
					reservation_module_id,
					notification_event_id,
					notification_template_version_id: newVersion.notification_template_version_id,
					is_active: true,
				},
			});

			// 7) Archive the old version (if any & different)
			if (oldVersionId && oldVersionId !== newVersion.notification_template_version_id) {
				await tx.notification_template_version.update({
					where: { notification_template_version_id: oldVersionId },
					data: { status: 'ARCHIVED' },
				});
			}

			return {
				version: newVersion,
				mapping: updatedMapping,
				archived_previous_version_id: oldVersionId,
			};
		});
	} catch {
		throw new Error('Error creating version, mapping it, and archiving previous version');
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
	// createNotificationTemplateVersion,
	updateNotificationTemplateVersionById,
	updateNotificationTemplateVersionByComposite,
	deleteNotificationTemplateVersionById,
	deleteNotificationTemplateVersionByComposite,
	listNotificationMappings,
	createNotificationMapping,
	updateNotificationMapping,
	upsertActiveNotificationMapping,
	listNotificationPreferences,
	upsertNotificationPreference,
	getLatestTemplateForEvent,
};
