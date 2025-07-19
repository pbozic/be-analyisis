import type { MODULE_TYPE } from '@prisma/client';

export const RESERVATION_ACTIONS = {
	VIEW_DASHBOARD: 'view_dashboard',
	MANAGE_BOOKING: 'manage_booking',
	ADD_EMPLOYEE: 'add_employee',
	ADD_LOCATION: 'add_location',
	ADD_SERVICE: 'add_service',
	ADD_CUSTOMER: 'add_customer',
	SEND_SMS: 'send_sms',
} as const;

export const ALL_ACTIONS = {
	reservations: RESERVATION_ACTIONS,
	// sms: {...}, // other modules if needed
};

export type ActionName = (typeof RESERVATION_ACTIONS)[keyof typeof RESERVATION_ACTIONS];

export const ACTION_MODULE_MAP: Record<ActionName, MODULE_TYPE> = {
	[RESERVATION_ACTIONS.VIEW_DASHBOARD]: 'reservations',
	[RESERVATION_ACTIONS.MANAGE_BOOKING]: 'reservations',
	[RESERVATION_ACTIONS.ADD_EMPLOYEE]: 'reservations',
	[RESERVATION_ACTIONS.ADD_LOCATION]: 'reservations',
	[RESERVATION_ACTIONS.ADD_SERVICE]: 'reservations',
	[RESERVATION_ACTIONS.ADD_CUSTOMER]: 'reservations',
	[RESERVATION_ACTIONS.SEND_SMS]: 'reservations',
};
