import { LineItemRefSchema, LineItemDetailSchema } from './lineItems.dto.js';
import type { LineItemRef, LineItemDetail } from './lineItems.dto.js';
import type { PrismaMenuItemVersion } from '../Menu/index.js';

// =======================
// Mappers
// =======================
type PrismaLineItem = {
	line_item_id: string;
	menu_item_version_id: string;
	order_id: string;
	quantity: number;
	comment?: string | null;
	replacement_id?: string | null;
	replaces_id?: string | null;
	parent_side_id?: string | null;
	parent_extra_id?: string | null;
	removed?: boolean;
	sides?: PrismaLineItem[];
	extras?: PrismaLineItem[];
	replacement?: PrismaLineItem | null;
	replaces?: PrismaLineItem | null;
	menu_item_version?: PrismaMenuItemVersion;
};

export function toLineItemRef(row: unknown): LineItemRef {
	const r = row as { line_item_id: string };
	return LineItemRefSchema.parse({ line_item_id: r.line_item_id, label: 'line_item' });
}

export function toLineItemDetail(row: unknown): LineItemDetail {
	const r = row as PrismaLineItem;
	return LineItemDetailSchema.parse({
		line_item_id: r.line_item_id,
		menu_item_version_id: r.menu_item_version_id,
		order_id: r.order_id,
		quantity: r.quantity,
		comment: r.comment ?? null,
		replacement_id: r.replacement_id ?? null,
		replaces_id: r.replaces_id ?? null,
		parent_side_id: r.parent_side_id ?? null,
		parent_extra_id: r.parent_extra_id ?? null,
		removed: r.removed ?? false,
		sides: Array.isArray(r.sides) ? r.sides.map((c) => toLineItemDetail(c)) : undefined,
		extras: Array.isArray(r.extras) ? r.extras.map((c) => toLineItemDetail(c)) : undefined,
		replacement: r.replacement ? toLineItemDetail(r.replacement) : null,
		replaces: r.replaces ? toLineItemDetail(r.replaces) : null,
	});
}
