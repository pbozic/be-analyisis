import { LostItemResponseSchema } from './LostItem.js';
import type { LostItemsWithIncludesPrisma } from '../../prisma/includes/lostItems.js';

export function toLostItemResponse(row: LostItemsWithIncludesPrisma) {
    return LostItemResponseSchema.parse(row);
}

export function toLostItemList(rows: LostItemsWithIncludesPrisma[]) {
    return rows.map((r) => toLostItemResponse(r));
}

export default { toLostItemResponse, toLostItemList };
