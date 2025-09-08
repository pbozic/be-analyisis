/**
 * Helper: start/end date period
 */
export function atStartOfDay(d) {
	const nd = new Date(d);
	nd.setUTCHours(0, 0, 0, 0);
	return nd;
}
export function atEndOfDay(d) {
	const nd = new Date(d);
	nd.setUTCHours(23, 59, 59, 999);
	return nd;
}
export function addDays(d, n) {
	const nd = new Date(d);
	nd.setUTCDate(nd.getUTCDate() + n);
	return nd;
}
export function startOfWeek(d) {
	// ISO week start (Monday)
	const nd = atStartOfDay(d);
	const day = nd.getUTCDay(); // 0 (Sun) .. 6 (Sat)
	const diff = day === 0 ? -6 : 1 - day; // shift so Monday is start
	return addDays(nd, diff);
}
export function startOfMonth(d) {
	const nd = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
	return nd;
}
export function endOfMonth(d) {
	return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0, 23, 59, 59, 999));
}
export function startOfYear(d) {
	return new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
}
export function endOfYear(d) {
	return new Date(Date.UTC(d.getUTCFullYear(), 11, 31, 23, 59, 59, 999));
}
export function formatDay(d) {
	return d.toISOString().slice(0, 10); // YYYY-MM-DD
}
/**
 * Get the start and end date of a period.
 * Type: 0=day, 1=week, 2=month, 3=year, 4=custom
 * For custom, end date must be provided.
 */
export function getPeriodStartAndEnd(start, type, end = null) {
	let periodStart, periodEnd;
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
			periodEnd = atEndOfDay(end);
			break;
		default:
			periodStart = start;
			periodEnd = end;
			break;
	}
	return { periodStart, periodEnd };
}

export function getPreviousPeriod(start, end, type) {
	let prevStart = null;
	let prevEnd = null;
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
