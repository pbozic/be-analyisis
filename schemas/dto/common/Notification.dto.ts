import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

// === Notification Preferences ===
export const NotificationPreferencesSchema = z
	.object({
		allow_push_notifications: z.boolean().optional(),
		allow_email_notifications: z.boolean().optional(),
		allow_sms_notifications: z.boolean().optional(),
	})
	.openapi({
		title: 'NotificationPreferences',
		description: 'User notification preferences',
	});

// === Device Registration ===
export const DeviceRegistrationSchema = z
	.object({
		player_id: z.string().min(1),
		device_type: z.enum(['ANDROID', 'IOS', 'WEB']).optional(),
	})
	.openapi({
		title: 'DeviceRegistration',
		description: 'Device registration for push notifications',
	});

// === OneSignal ID Update ===
export const OneSignalIdUpdateSchema = z
	.object({
		player_id: z.string().min(1),
	})
	.openapi({
		title: 'OneSignalIdUpdate',
		description: 'OneSignal player ID update for push notifications',
	});

// === Phone Verification ===
export const PhoneVerificationSchema = z
	.object({
		token: z.string().min(1),
	})
	.openapi({
		title: 'PhoneVerification',
		description: 'Phone number verification with SMS token',
	});

// === Preferences Update ===
export const PreferencesUpdateSchema = z
	.object({
		preferences: z.record(z.any()),
	})
	.openapi({
		title: 'PreferencesUpdate',
		description: 'Generic preferences update as JSON object',
	});

// === Marketing Notifications ===
export const MarketingNotificationsSchema = z
	.object({
		data: z.object({
			allow_marketing_push_notifications: z.boolean(),
		}),
	})
	.openapi({
		title: 'MarketingNotifications',
		description: 'Marketing notifications preference update',
	});

// === Ads Personalization ===
export const AdsPersonalizationSchema = z
	.object({
		data: z.object({
			allow_ads_personalization: z.boolean(),
		}),
	})
	.openapi({
		title: 'AdsPersonalization',
		description: 'Ads personalization preference update',
	});

// === Newsletter Subscription ===
export const NewsletterSubscriptionSchema = z
	.object({
		data: z.object({
			allow_newsletter: z.boolean(),
		}),
	})
	.openapi({
		title: 'NewsletterSubscription',
		description: 'Newsletter subscription preference update',
	});

// === Type exports ===
export type NotificationPreferences = z.infer<typeof NotificationPreferencesSchema>;
export type DeviceRegistration = z.infer<typeof DeviceRegistrationSchema>;
export type OneSignalIdUpdate = z.infer<typeof OneSignalIdUpdateSchema>;
export type PhoneVerification = z.infer<typeof PhoneVerificationSchema>;
export type PreferencesUpdate = z.infer<typeof PreferencesUpdateSchema>;
export type MarketingNotifications = z.infer<typeof MarketingNotificationsSchema>;
export type AdsPersonalization = z.infer<typeof AdsPersonalizationSchema>;
export type NewsletterSubscription = z.infer<typeof NewsletterSubscriptionSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('NotificationPreferences', NotificationPreferencesSchema);
	registry.register('DeviceRegistration', DeviceRegistrationSchema);
	registry.register('OneSignalIdUpdate', OneSignalIdUpdateSchema);
	registry.register('PhoneVerification', PhoneVerificationSchema);
	registry.register('PreferencesUpdate', PreferencesUpdateSchema);
	registry.register('MarketingNotifications', MarketingNotificationsSchema);
	registry.register('AdsPersonalization', AdsPersonalizationSchema);
	registry.register('NewsletterSubscription', NewsletterSubscriptionSchema);
}
