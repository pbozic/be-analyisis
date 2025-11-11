import { LateEventsResponseSchema, LateEventsListResponseSchema } from './lateEvents.dto.ts';
import type { LateEventsWithIncludesPrisma } from '../../prisma/includes/lateEvents.js';

export function toLateEventsResponse(row: LateEventsWithIncludesPrisma) {
    return LateEventsResponseSchema.parse(row);
}

export function toLateEventsList(rows: LateEventsWithIncludesPrisma[]) {
    return LateEventsListResponseSchema.parse({ data: rows });
}

export default { toLateEventsResponse, toLateEventsList };
