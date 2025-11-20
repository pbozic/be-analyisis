import { z } from 'zod';
import { NOTIFICATION_CHANNEL, TEMPLATE_VERSION_STATUS, MESSAGE_STATUS } from '@prisma/client';

// Zod schemas from runtime enums
export const NotificationChannelEnum = z.nativeEnum(NOTIFICATION_CHANNEL);
export const TemplateVersionStatusEnum = z.nativeEnum(TEMPLATE_VERSION_STATUS);
export const MessageStatusEnum = z.nativeEnum(MESSAGE_STATUS);

// TypeScript inferred types
export type NotificationChannel = NOTIFICATION_CHANNEL;
export type TemplateVersionStatus = TEMPLATE_VERSION_STATUS;
export type MessageStatus = MESSAGE_STATUS;
