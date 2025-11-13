/**
 * Returns a new Date at 00:00:00.000 UTC for the given date.
 * @param {Date} d - Input date.
 * @returns {Date} Start of day in UTC.
 */
export function atStartOfDay(d: Date): Date {
	const nd = new Date(d);
	nd.setUTCHours(0, 0, 0, 0);
	return nd;
}
/**
 * Returns a new Date at 23:59:59.999 UTC for the given date.
 * @param {Date} d - Input date.
 * @returns {Date} End of day in UTC.
 */
export function atEndOfDay(d: Date): Date {
	const nd = new Date(d);
	nd.setUTCHours(23, 59, 59, 999);
	return nd;
}
/**
 * Adds n days (UTC) to the given date and returns a new Date.
 * @param {Date} d - Input date.
 * @param {number} n - Number of days to add (negative for subtract).
 * @returns {Date} New date with days offset.
 */
export function addDays(d: Date, n: number): Date {
	const nd = new Date(d);
	nd.setUTCDate(nd.getUTCDate() + n);
	return nd;
}
/**
 * Returns the Monday (start) of the ISO week for the given date.
 * @param {Date} d - Input date.
 * @returns {Date} Start of week (Monday) at 00:00 UTC.
 */
export function startOfWeek(d: Date): Date {
	// ISO week start (Monday)
	const nd = atStartOfDay(d);
	const day = nd.getUTCDay(); // 0 (Sun) .. 6 (Sat)
	const diff = day === 0 ? -6 : 1 - day; // shift so Monday is start
	return addDays(nd, diff);
}
/**
 * Returns the first day of the month at 00:00 UTC.
 * @param {Date} d - Input date.
 * @returns {Date} Start of month (UTC).
 */
export function startOfMonth(d: Date): Date {
	const nd = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
	return nd;
}
/**
 * Returns the last moment of the month at 23:59:59.999 UTC.
 * @param {Date} d - Input date.
 * @returns {Date} End of month (UTC).
 */
export function endOfMonth(d: Date): Date {
	return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0, 23, 59, 59, 999));
}
/**
 * Returns the first day of the year at 00:00 UTC.
 * @param {Date} d - Input date.
 * @returns {Date} Start of year (UTC).
 */
export function startOfYear(d: Date): Date {
	return new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
}
/**
 * Returns the last moment of the year at 23:59:59.999 UTC.
 * @param {Date} d - Input date.
 * @returns {Date} End of year (UTC).
 */
export function endOfYear(d: Date): Date {
	return new Date(Date.UTC(d.getUTCFullYear(), 11, 31, 23, 59, 59, 999));
}
/**
 * Formats a date as YYYY-MM-DD using UTC.
 * @param {Date} d - Input date.
 * @returns {string} Formatted day string.
 */
export function formatDay(d: Date): string {
	return d.toISOString().slice(0, 10); // YYYY-MM-DD
}
/**
 * Computes start and end boundaries for a period based on type.
 * Types: 0=day, 1=week, 2=month, 3=year, 4=custom (requires end).
 * @param {Date} start - Start date input.
 * @param {number} type - Period type.
 * @param {Date|null} [end=null] - End date for custom period.
 * @returns {{periodStart: Date, periodEnd: Date}} Period boundaries in UTC.
 */
export function getPeriodStartAndEnd(
	start: Date,
	type: number,
	end: Date | null = null
): { periodStart: Date; periodEnd: Date } {
	let periodStart: Date;
	let periodEnd: Date;
	switch (type) {
		case 0:
			// Day
			periodStart = atStartOfDay(start);
			periodEnd = atEndOfDay(start);
			break;
		case 1:
			// Week
			periodStart = startOfWeek(start);
			periodEnd = addDays(periodStart, 6);
			periodEnd = atEndOfDay(periodEnd);
			break;
		case 2:
			// Month
			periodStart = startOfMonth(start);
			periodEnd = endOfMonth(start);
			break;
		case 3:
			// Year
			periodStart = startOfYear(start);
			periodEnd = endOfYear(start);
			break;
		case 4:
			// Custom
			periodStart = atStartOfDay(start);
			periodEnd = atEndOfDay(end as Date);
			break;
		default:
			periodStart = start;
			periodEnd = end as Date;
			break;
	}
	return { periodStart, periodEnd };
}
/**
 * Computes the previous period range based on the provided period and type.
 * For day/week, preserves exact duration in ms. For month/year, uses calendar boundaries.
 * @param {Date} start - Current period start.
 * @param {Date} end - Current period end.
 * @param {number} type - Period type (0..3).
 * @returns {{prevStart: Date|null, prevEnd: Date|null}} Previous period range.
 */
export function getPreviousPeriod(
	start: Date,
	end: Date,
	type: number
): { prevStart: Date | null; prevEnd: Date | null } {
	let prevStart: Date | null = null;
	let prevEnd: Date | null = null;
	if (type < 2) {
		const durationMs = end.getTime() - start.getTime() + 1;
		prevEnd = new Date(start.getTime() - 1);
		prevStart = new Date(prevEnd.getTime() - durationMs + 1);
	} else if (type === 2) {
		// Month
		prevStart = startOfMonth(addDays(start, -1));
		prevEnd = endOfMonth(addDays(start, -1));
	} else if (type === 3) {
		// Year
		prevStart = startOfYear(new Date(Date.UTC(start.getUTCFullYear() - 1, 0, 1)));
		prevEnd = endOfYear(new Date(Date.UTC(end.getUTCFullYear() - 1, 11, 31)));
	}
	return { prevStart, prevEnd };
}
