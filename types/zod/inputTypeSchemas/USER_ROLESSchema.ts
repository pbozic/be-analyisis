import { z } from 'zod';

export const USER_ROLESSchema = z.enum([
	'ADMIN',
	'BUSINESS_OWNER',
	'BUSINESS_MANAGER',
	'BUSINESS_CARETAKER',
	'BUSINESS_USER',
	'PERSONAL',
	'DRIVER',
	'DELIVERY_DRIVER',
	'DISPATCHER',
]);

export type USER_ROLESType = `${z.infer<typeof USER_ROLESSchema>}`;

export default USER_ROLESSchema;
