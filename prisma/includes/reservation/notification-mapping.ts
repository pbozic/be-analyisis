import { Prisma } from '@prisma/client';

export const notificationMappingBase = Prisma.validator<Prisma.notification_mappingDefaultArgs>()({
	select: {
		notification_mapping_id: true,
		reservation_module_id: true,
		notification_event_id: true,
		notification_template_version_id: true,
		conditions: true,
		is_active: true,
		created_at: true,
	},
});

export type NotificationMappingBasePrisma = Prisma.notification_mappingGetPayload<typeof notificationMappingBase>;
