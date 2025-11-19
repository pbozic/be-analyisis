// reservationNotifications.ts
import { PrismaClient, Prisma } from '@prisma/client';
import pug from 'pug';
import { TEMPLATE_VERSION_STATUS, NOTIFICATION_CHANNEL } from '@prisma/client';

import { addresses } from '../prisma/schemas/interfaces.js';
import { BookingBase } from '../schemas/dto/reservations/booking/booking.dto.js';
import { CustomerBase } from '../schemas/dto/reservations/customer/customer.dto.js';
import { BusinessWithAllModulesResponseDto } from '../schemas/dto/Business/index.js';

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

/**
 * Extract placeholders from a template string.
 *
 * @param {string | null | undefined} input
 * @returns {string[]}
 */
export function extractPlaceholders(input: string | null | undefined): string[] {
	if (!input) return [];
	const out = new Set<string>();
	for (const m of input.matchAll(PLACEHOLDER_RE)) out.add(m[1]!);
	return [...out];
}
/**
 * Render a template string by replacing placeholders with variable values.
 *
 * @param {string | null | undefined} input
 * @param {Record<string, string | undefined>} vars
 * @returns {string | undefined}
 */
function renderTemplate(
	input: string | null | undefined,
	vars: Record<string, string | undefined>
): string | undefined {
	if (!input) return undefined;
	return input.replace(PLACEHOLDER_RE, (_, key) => vars[key] ?? '');
}
/**
 * Format a date as 'dd.mm.yyyy'.
 *
 * @param {Date | null | undefined} d
 * @returns {string | undefined}
 */
function fmtDate(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		timeZone: TZ,
	}).format(d);
}
/**
 * Format a date as 'HH:MM' (24-hour).
 *
 * @param {Date | null | undefined} d
 * @returns {string | undefined}
 */
function fmtTime(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: TZ,
	}).format(d);
}
/**
 * Format a date to get the full weekday name.
 *
 * @param {Date | null | undefined} d
 * @returns {string | undefined}
 */
function fmtWeekday(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, { weekday: 'long', timeZone: TZ }).format(d);
}
/**
 * Format a date to get the full month name.
 *
 * @param {Date | null | undefined} d
 * @returns {string | undefined}
 */
function fmtMonth(d: Date | null | undefined): string | undefined {
	if (!d) return undefined;
	return new Intl.DateTimeFormat(LOCALE, { month: 'long', timeZone: TZ }).format(d);
}
/**
 * Format a date as a long date string (e.g. 'Monday, 1 January 2024').
 *
 * @param {Date | null | undefined} d
 * @returns {string | undefined}
 */
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
/** Join non-empty strings with a separator.
 * @param {(string | null | undefined)[]} arr
 * @param {string} [sep=', ']
 * @returns {string | undefined}
 */
function joinNonEmpty(arr: (string | null | undefined)[], sep = ', '): string | undefined {
	const v = arr.filter(Boolean).join(sep);
	return v || undefined;
}

/** Pick 'sl' first; else the first available string value from a JSON object.
 * @param {Prisma.JsonValue | null | undefined} v
 * @returns {string | undefined}
 */
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
	business: Partial<BusinessWithAllModulesResponseDto> | null; // { name }
	booking:
		| (Omit<Partial<BookingBase>, 'start_time' | 'reschedule_url' | 'location' | 'service' | 'employee'> & {
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
	customer: (Partial<CustomerBase> & { first_name?: string | null; last_name?: string | null }) | null;
};
/**
 * Load necessary data for booking notifications.
 *
 * @param {Ctx} ctx
 * @returns {Promise<Loaded>}
 */
async function loadForBooking(ctx: Ctx): Promise<Loaded> {
	const business = (await prisma.business.findFirst({
		where: { reservation_module: { reservation_module_id: ctx.reservation_module_id } },
		select: { business_details: { select: { name: true } } },
	})) as Partial<BusinessWithAllModulesResponseDto> | null;

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
/**
 * Resolve variables for notification templates based on the booking context.
 *
 * @param {Ctx} ctx
 * @returns {Promise<Record<string, string | undefined>>}
 */
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
		businessName: business?.business_details?.name ?? undefined,

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
/**
 * Render subject using template and context.
 *
 * @param {string | null | undefined} subjectTpl
 * @param {Ctx} ctx
 * @returns {Promise<string>}
 */
export async function renderSubject(subjectTpl: string | null | undefined, ctx: Ctx) {
	const vars = await resolveVariables(ctx);
	return renderTemplate(subjectTpl, vars) ?? '';
}
/**
 * Render text body using template and context.
 *
 * @param {string | null | undefined} textTpl
 * @param {Ctx} ctx
 * @returns {Promise<string>}
 */
export async function renderText(textTpl: string | null | undefined, ctx: Ctx) {
	const vars = await resolveVariables(ctx);
	return renderTemplate(textTpl, vars) ?? '';
}
/**
 * Render email HTML using Pug template, subject and text templates, and context.
 *
 * @param {string | null | undefined} subjectTpl
 * @param {string | null | undefined} textTpl
 * @param {Ctx} ctx
 * @param {string} pugTemplatePath
 * @returns {Promise<string>}
 */
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

/**
 * Validate that all placeholders used in the templates are known (exist in VARIABLE_CATALOG).
 *
 * @param {string | null | undefined} subjectTpl
 * @param {string | null | undefined} textTpl
 * @returns {Promise<void>}
 */
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

const DEFAULT_CHANNEL_PREFS: Record<NOTIFICATION_CHANNEL, boolean> = {
	EMAIL: true,
	SMS: false,
	PUSH: false,
};

function templateKeyFromEventKey(eventKey: string) {
	// e.g. "booking.confirmed" -> "booking_confirmed"
	return eventKey.replace(/\./g, '_');
}

function defaultSubject(eventKey: string) {
	switch (eventKey) {
		case 'booking.created':
			return 'Rezervacija ustvarjena – {customer.fullName}';
		case 'booking.confirmed':
			return 'Potrjena rezervacija – {appointment.dateLong}';
		case 'booking.reminder':
			return 'Opomnik – {appointment.dateLong} ob {appointment.time}';
		case 'booking.rescheduled':
			return 'Spremenjena rezervacija – {appointment.dateLong}';
		case 'booking.cancelled':
			return 'Preklicana rezervacija';
		case 'booking.no_show':
			return 'Opravičilo, niste prišli na termin';
		case 'booking.followup':
			return 'Hvala za obisk – {businessName}';
		case 'booking.feedback':
			return 'Povratne informacije o vašem terminu';
		default:
			return '{businessName} obvestilo';
	}
}

function defaultBody(eventKey: string) {
	switch (eventKey) {
		case 'booking.created':
			return 'Pozdravljeni {customer.fullName}, vaša rezervacija je ustvarjena za {appointment.dateLong} ob {appointment.time} na lokaciji {appointment.locationName}.';
		case 'booking.confirmed':
			return 'Pozdravljeni {customer.fullName}, vaša rezervacija je potrjena za {appointment.dateLong} ob {appointment.time} na lokaciji {appointment.locationName}.';
		case 'booking.reminder':
			return 'Opomnik: vaš termin je {appointment.dateLong} ob {appointment.time}.';
		case 'booking.rescheduled':
			return 'Vaša rezervacija je prestavljena na {appointment.dateLong} ob {appointment.time}.';
		case 'booking.cancelled':
			return 'Vaša rezervacija je bila preklicana.';
		case 'booking.no_show':
			return 'Zabeležili smo, da se niste udeležili termina {appointment.dateLong}. Če želite nov termin, nas kontaktirajte.';
		case 'booking.followup':
			return 'Hvala za obisk pri {businessName}. Veselimo se ponovnega srečanja.';
		case 'booking.feedback':
			return 'Kako ste bili zadovoljni z obiskom {appointment.dateLong}? Vaše mnenje nam veliko pomeni.';
		default:
			return '{businessName} – obvestilo';
	}
}

function buildVariablesJsonSchema() {
	const props = Object.fromEntries(Object.keys(VARIABLE_CATALOG).map((k) => [k, { type: 'string' }]));
	return { type: 'object', additionalProperties: false, properties: props };
}
/**
 * Bootstrap notification templates/mappings/preferences for all existing modules.
 * @returns {Promise<void>}
 */
export async function bootstrapAllExistingModuleNotifications() {
	console.log('Bootstrapping notifications for all existing modules...');
	const modules = await prisma.reservation_module.findMany({
		select: { reservation_module_id: true },
	});
	console.log(`Bootstrapping notifications for ${modules.length} existing modules...`);
	for (const module of modules) {
		await bootstrapModuleNotifications(module.reservation_module_id, [], undefined);
	}
}
/**
 * Bootstrap notification templates/mappings/preferences for a reservation module.
 * Idempotent: updates existing by key, creates missing.
 * @param {string} reservation_module_id - Module to bootstrap.
 * @param {string[]} eventKeys - Event keys to ensure (e.g. from your seed).
 * @param {string} [created_by_user_id] - Optional author for version metadata.
 */
export async function bootstrapModuleNotifications(
	reservation_module_id: string,
	eventKeys: string[],
	created_by_user_id?: string
) {
	console.log(`Bootstrapping notifications for module: ${reservation_module_id}`);
	await prisma.$transaction(async (tx) => {
		// Load all events upfront
		let where: object = { key: { in: eventKeys } };
		if (!eventKeys || eventKeys.length) {
			where = {};
		}
		const events = await tx.notification_event.findMany({
			where,
			select: { notification_event_id: true, key: true, name: true },
		});
		console.log(`Found ${events.length} events for module: ${reservation_module_id}`);
		const byKey = new Map(events.map((e) => [e.key, e]));
		eventKeys = eventKeys && eventKeys.length ? eventKeys : events.map((e) => e.key); // all if empty
		const varsSchema = buildVariablesJsonSchema();

		console.log(`Ensuring templates for events: ${eventKeys.join(', ')}`);
		for (const eventKey of eventKeys) {
			console.log(`Bootstrapping notification for event: ${eventKey}`);
			const ev = byKey.get(eventKey);
			if (!ev) {
				// If event not in DB, skip or throw based on your policy
				// throw new Error(`Missing notification_event for key: ${eventKey}`);
				continue;
			}

			const tplKey = templateKeyFromEventKey(eventKey);
			console.log(`Processing template key: ${tplKey} for event: ${eventKey}`);
			// 1) Template upsert by (module, key)
			const template = await tx.notification_template.upsert({
				where: { reservation_module_id_key: { reservation_module_id, key: tplKey } },
				update: { name: tplKey },
				create: {
					reservation_module_id,
					key: tplKey,
					name: tplKey,
				},
			});
			console.log(`Upserted template: ${template.notification_template_id} for key: ${tplKey}`);
			// 2) Ensure there is at least one version; if none, create v1 PUBLISHED
			const latest = await tx.notification_template_version.aggregate({
				where: { notification_template_id: template.notification_template_id },
				_max: { version: true },
			});
			let versionRecord;
			if (latest._max.version == null) {
				versionRecord = await tx.notification_template_version.create({
					data: {
						notification_template_id: template.notification_template_id,
						version: 1,
						status: TEMPLATE_VERSION_STATUS.PUBLISHED,
						subject: defaultSubject(eventKey),
						body_text: defaultBody(eventKey),
						variables_json_schema: varsSchema,
						compiled_artifacts: {},
						created_by_user_id: created_by_user_id ?? null,
					},
				});
			} else {
				// Optional: keep existing; or update subject/body to new defaults if empty
				versionRecord = await tx.notification_template_version.findFirst({
					where: {
						notification_template_id: template.notification_template_id,
						version: latest._max.version,
					},
				});
			}
			console.log(
				`Using version: ${versionRecord!.notification_template_version_id} for template: ${template.notification_template_id}`
			);
			// 3) Upsert active mapping for (module,event) -> this version
			await tx.notification_mapping.upsert({
				where: {
					reservation_module_id_notification_event_id: {
						reservation_module_id,
						notification_event_id: ev.notification_event_id,
					},
				},
				update: {
					notification_template_version_id: versionRecord!.notification_template_version_id,
					is_active: true,
				},
				create: {
					reservation_module_id,
					notification_event_id: ev.notification_event_id,
					notification_template_version_id: versionRecord!.notification_template_version_id,
					is_active: true,
				},
			});

			// 4) Upsert channel preferences
			for (const ch of Object.keys(DEFAULT_CHANNEL_PREFS) as (keyof typeof DEFAULT_CHANNEL_PREFS)[]) {
				await tx.notification_preference.upsert({
					where: {
						reservation_module_id_notification_event_id_channel: {
							reservation_module_id,
							notification_event_id: ev.notification_event_id,
							channel: ch,
						},
					},
					update: { enabled: DEFAULT_CHANNEL_PREFS[ch] },
					create: {
						reservation_module_id,
						notification_event_id: ev.notification_event_id,
						channel: ch,
						enabled: DEFAULT_CHANNEL_PREFS[ch],
					},
				});
			}
		}
	});
}
