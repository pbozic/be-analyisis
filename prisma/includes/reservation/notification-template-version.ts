import { Prisma } from '@prisma/client';

export const notificationTemplateVersionBase = Prisma.validator<Prisma.notification_template_versionDefaultArgs>()({
	select: {
		notification_template_version_id: true,
		notification_template_id: true,
		version: true,
		status: true,
		subject: true,
		body_text: true,
		variables_json_schema: true,
		compiled_artifacts: true,
		created_by_user_id: true,
		created_at: true,
	},
});

export type NotificationTemplateVersionBasePrisma = Prisma.notification_template_versionGetPayload<
	typeof notificationTemplateVersionBase
>;

export const notificationTemplateVersionWithTemplate =
	Prisma.validator<Prisma.notification_template_versionDefaultArgs>()({
		select: {
			notification_template_version_id: true,
			notification_template_id: true,
			version: true,
			status: true,
			subject: true,
			body_text: true,
			variables_json_schema: true,
			compiled_artifacts: true,
			created_by_user_id: true,
			created_at: true,
			template: {
				select: {
					notification_template_id: true,
					reservation_module_id: true,
					key: true,
					name: true,
				},
			},
		},
	});

export type NotificationTemplateVersionWithTemplatePrisma = Prisma.notification_template_versionGetPayload<
	typeof notificationTemplateVersionWithTemplate
>;
