// reservationNotifications.ts
import { PrismaClient, Prisma } from '@prisma/client';
import pug from 'pug';

import { addresses, business } from '../prisma/schemas/interfaces.js';
import { Booking } from '../types/reservation/Booking.ts';
import { Customer } from '../types/reservation/Customer.js';

// ————————————————————————————————————
// Config
// ————————————————————————————————————
const TZ = 'Europe/Ljubljana';
const LOCALE = 'sl-SI';

export type Channel = 'EMAIL' | 'SMS' | 'PUSH';

export interface Ctx {
	reservation_module_id: string;
	booking_id: string;
}

const prisma = new PrismaClient();

// ————————————————————————————————————
// UI labels
// ————————————————————————————————————
export const VARIABLE_CATALOG: Record<string, string> = {
	// Podjetje
	businessName: 'Ime podjetja',

	// Stranka
	'customer.firstName': 'Ime',
	'customer.lastName': 'Priimek',
	'customer.fullName': 'Ime Priimek',

	// Termin
	'appointment.date': 'Datum',
	'appointment.day': 'Dan',
	'appointment.month': 'Mesec',
	'appointment.year': 'Leto',
	'appointment.time': 'Čas',
	'appointment.weekdayName': 'Ime dneva',
	'appointment.dateLong': 'Datum termina',
	'appointment.locationName': 'lokacija termina',
	'appointment.rescheduleUrl': 'Povezava za prenaročanje',

	// Storitve (single service)
	'service.name': 'Ime',
	'service.categoryNames': 'Kategorija/e storitve',

	// Lokacija
	'location.name': 'Ime',
	'location.address': 'Naslov',
	'location.phone': 'Telefonska številka',

	// Izvajalec
	'provider.name': 'Ime',
	'provider.phone': 'Telefonska številka',
};

// ————————————————————————————————————
// Helpers
// ————————————————————————————————————
const PLACEHOLDER_RE = /\{([a-zA-Z0-9_.]+)\}/g;

export function extractPlaceholders(input: string | null | undefined): string[] {
	if (!input) return [];
	const out = new Set<string>();
	for (const m of input.matchAll(PLACEHOLDER_RE)) out.add(m[1]!);
	return [...out];
}

function renderTemplate(
	input: string | null | undefined,
	vars: Record<string, string | undefined>
): string | undefined {
	if (!input) return undefined;
	return input.replace(PLACEHOLDER_RE, (_, key) => vars[key] ?? '');
}

function fmtDate(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		timeZone: TZ,
	}).format(d);
}

function fmtTime(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: TZ,
	}).format(d);
}

function fmtWeekday(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, { weekday: 'long', timeZone: TZ }).format(d);
}

function fmtMonth(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, { month: 'long', timeZone: TZ }).format(d);
}

function fmtDateLong(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: TZ,
	}).format(d);
}

function joinNonEmpty(arr: (string | null | undefined)[], sep = ', '): string | undefined {
	const v = arr.filter(Boolean).join(sep);
	return v || undefined;
}

/** Pick 'sl' first; else the first available string value from a JSON object. */
function pickMultilangString(v: Prisma.JsonValue | null | undefined): string | undefined {
	if (!v) return undefined;
	if (typeof v === 'string') return v;
	if (typeof v === 'object' && v !== null) {
		const obj = v as Record<string, unknown>;
		for (const key of ['sl', 'sl-SI']) {
			const val = obj[key];
			if (typeof val === 'string' && val.trim()) return val;
		}
		for (const key of Object.keys(obj)) {
			const val = obj[key];
			if (typeof val === 'string' && val.trim()) return val;
		}
	}
	return undefined;
}

// ————————————————————————————————————
// Data loader for a booking context (single service)
// ————————————————————————————————————
type Loaded = {
	business: Partial<business> | null; // { name }
	booking:
		| (Omit<Partial<Booking>, 'start_time' | 'reschedule_url' | 'location' | 'service' | 'employee'> & {
				start_time?: Date | null;
				reschedule_url?: string | null;
				location?: { name?: string | null } | null;
				service?: {
					name?: Prisma.JsonValue | string | null; // multilang JSON
					service_category?: { name?: Prisma.JsonValue | string | null } | null;
				} | null; // SINGLE service
				employee?: { first_name?: string | null; last_name?: string | null; telephone?: string | null } | null;
		  })
		| null;
	location: { name?: string | null; address?: addresses | null; phone?: string | null } | null;
	customer: (Partial<Customer> & { first_name?: string | null; last_name?: string | null }) | null;
};

async function loadForBooking(ctx: Ctx): Promise<Loaded> {
	const business = await prisma.business.findFirst({
		where: { reservation_module: { reservation_module_id: ctx.reservation_module_id } },
		select: { name: true },
	});

	const booking = await prisma.booking.findUnique({
		where: { booking_id: ctx.booking_id },
		select: {
			start_time: true,
			location: { select: { name: true, location_id: true } },
			service: {
				select: {
					name: true, // JSON
					service_category: { select: { name: true } }, // JSON (optional)
				},
			}, // SINGLE service
			employee: { select: { first_name: true, last_name: true, telephone: true } },
		},
	});

	const location =
		(await prisma.location.findFirst({
			where: { location_id: booking?.location?.location_id },
			select: { name: true, address: true, phone: true },
		})) ?? null;

	const customer = await prisma.customers.findFirst({
		where: { bookings: { some: { booking_id: ctx.booking_id } } },
		select: { first_name: true, last_name: true },
	});

	return { business, booking, location, customer };
}

// ————————————————————————————————————
// Variable resolution (closed-world, single service)
// ————————————————————————————————————
export async function resolveVariables(ctx: Ctx): Promise<Record<string, string | undefined>> {
	const { business, booking, location, customer } = await loadForBooking(ctx);

	const first = customer?.first_name ?? undefined;
	const last = customer?.last_name ?? undefined;
	const full = joinNonEmpty([first, last], ' ');

	const start = booking?.start_time ?? null;

	// Single service (multilang JSON)
	const serviceName = pickMultilangString(booking?.service?.name);
	const serviceCategoryNames = pickMultilangString(booking?.service?.service_category?.name);

	// Appointment location: prefer booking.location, then business default
	const apptLocationName = booking?.location?.name ?? location?.name ?? undefined;

	const providerName = joinNonEmpty(
		[booking?.employee?.first_name ?? undefined, booking?.employee?.last_name ?? undefined],
		' '
	);
	const providerPhone = booking?.employee?.telephone ?? undefined;

	return {
		// Podjetje
		businessName: business?.name ?? undefined,

		// Stranka
		'customer.firstName': first,
		'customer.lastName': last,
		'customer.fullName': full,

		// Termin
		'appointment.date': fmtDate(start),
		'appointment.day': start ? String(new Date(start).getDate()) : undefined,
		'appointment.month': fmtMonth(start),
		'appointment.year': start ? String(new Date(start).getFullYear()) : undefined,
		'appointment.time': fmtTime(start),
		'appointment.weekdayName': fmtWeekday(start),
		'appointment.dateLong': fmtDateLong(start),
		'appointment.locationName': apptLocationName,
		'appointment.rescheduleUrl': booking?.reschedule_url ?? undefined,

		// Storitve (single)
		'service.name': serviceName,
		'service.categoryNames': serviceCategoryNames,

		// Lokacija (business location)
		'location.name': location?.name ?? undefined,
		'location.address': location?.address?.address ?? undefined,
		'location.phone': location?.phone ?? undefined,

		// Izvajalec
		'provider.name': providerName,
		'provider.phone': providerPhone,
	};
}

// ————————————————————————————————————
// Rendering helpers
// ————————————————————————————————————
export async function renderSubject(subjectTpl: string | null | undefined, ctx: Ctx) {
	const vars = await resolveVariables(ctx);
	return renderTemplate(subjectTpl, vars) ?? '';
}

export async function renderText(textTpl: string | null | undefined, ctx: Ctx) {
	const vars = await resolveVariables(ctx);
	return renderTemplate(textTpl, vars) ?? '';
}

export async function renderEmailHtml(
	subjectTpl: string | null | undefined,
	textTpl: string | null | undefined,
	ctx: Ctx,
	pugTemplatePath: string
) {
	const vars = await resolveVariables(ctx);
	const subject = renderTemplate(subjectTpl, vars) ?? '';
	const body_text = renderTemplate(textTpl, vars) ?? '';

	const html = pug.renderFile(pugTemplatePath, {
		subject,
		body_text,
		businessName: vars.businessName,
		appointmentDateLong: vars['appointment.dateLong'],
	});

	return { subject, body_text, html };
}

// ————————————————————————————————————
// Safety check
// ————————————————————————————————————
export function validateTemplatePlaceholders(
	subjectTpl: string | null | undefined,
	textTpl: string | null | undefined
) {
	const used = new Set([...extractPlaceholders(subjectTpl), ...extractPlaceholders(textTpl)]);
	const catalogKeys = new Set(Object.keys(VARIABLE_CATALOG));

	const unknown = [...used].filter((k) => !catalogKeys.has(k));
	if (unknown.length) {
		throw new Error(`Unknown placeholders: ${unknown.join(', ')}`);
	}
	return [...used];
}
