import {
	MenuItemResponseSchema,
	MenuItemsResponseSchema,
	DailyMealMenuBaseSchema,
	MenuBaseSchema,
	MenuItemVersionResponseSchema,
} from './menu.dto.js';
import type { MenuItemResponse, DailyMealMenuBase, MenuItemVersionResponse, MenuDetail } from './menu.dto.js';
import type { MenuWithIncludesPrisma, DailyMealMenuWithIncludesPrisma } from '../../../prisma/includes/menus.js';

// Derived payload types from the Prisma include payloads
type MenuPayload = MenuWithIncludesPrisma;
type DailyMealMenuPayload = DailyMealMenuWithIncludesPrisma;
type CategoryPayload = MenuPayload['categories'] extends Array<infer C> | null | undefined ? NonNullable<C> : never;
type MenuItemPayload = CategoryPayload['menu_items'] extends Array<infer I> | null | undefined ? NonNullable<I> : never;

function toIso(d: unknown): string | undefined | null {
	if (d === null) return null;
	if (d === undefined) return undefined;
	if (typeof d === 'string') return d;
	if (d instanceof Date) return d.toISOString();
	try {
		// @ts-expect-error runtime helper: attempt to call toISOString if present
		return (d as { toISOString?: () => string }).toISOString();
	} catch {
		return String(d as string);
	}
}

export function toMenuItemResponse(payload: MenuItemPayload): MenuItemResponse {
	const item = {
		...payload,
		created_at: toIso((payload as { created_at?: unknown }).created_at),
		updated_at: toIso((payload as { updated_at?: unknown }).updated_at),
		menu_category: (
			payload as {
				menu_category?: {
					menu_category_id?: string;
					menu_id?: string;
					names?: unknown;
					menu_items_ordered?: unknown;
					menu_categories_categories?: unknown;
				};
			}
		).menu_category
			? {
					menu_category_id: (payload as { menu_category?: { menu_category_id?: string } }).menu_category
						?.menu_category_id,
					menu_id: (payload as { menu_category?: { menu_id?: string } }).menu_category?.menu_id,
					names: (payload as { menu_category?: { names?: unknown } }).menu_category?.names,
					menu_items_ordered: (payload as { menu_category?: { menu_items_ordered?: unknown } }).menu_category
						?.menu_items_ordered,
					menu_categories_categories: (
						payload as { menu_category?: { menu_categories_categories?: unknown } }
					).menu_category?.menu_categories_categories,
				}
			: undefined,
		documents: Array.isArray((payload as { documents?: unknown }).documents)
			? ((payload as { documents?: unknown }).documents as Array<unknown>).map((d) => ({
					document_id: (d as { document_id?: string }).document_id,
					files: Array.isArray((d as { files?: unknown }).files)
						? ((d as { files?: unknown }).files as Array<unknown>).map((f) => ({
								file_id: (f as { file_id?: string }).file_id,
								url: (f as { url?: string }).url,
								document_id: (f as { document_id?: string }).document_id,
							}))
						: undefined,
				}))
			: undefined,
	};

	return MenuItemResponseSchema.parse(item as unknown);
}

export function toMenuCategoryResponse(category: CategoryPayload) {
	return {
		...category,
		menu_items: Array.isArray((category as { menu_items?: unknown }).menu_items)
			? ((category as { menu_items?: unknown }).menu_items as Array<MenuItemPayload>).map(toMenuItemResponse)
			: undefined,
		menu_categories_categories: (category as { menu_categories_categories?: unknown }).menu_categories_categories,
	};
}

export function toMenuResponse(payload: MenuPayload): MenuDetail {
	const out = {
		...payload,
		created_at: toIso((payload as { created_at?: unknown }).created_at),
		updated_at: toIso((payload as { updated_at?: unknown }).updated_at),
		categories: Array.isArray((payload as { categories?: unknown }).categories)
			? ((payload as { categories?: unknown }).categories as Array<CategoryPayload>).map(toMenuCategoryResponse)
			: undefined,
	};

	return MenuBaseSchema.parse(out as unknown) as MenuDetail;
}

export function toDailyMealMenuResponse(payload: DailyMealMenuPayload): DailyMealMenuBase {
	const converted = {
		...payload,
		date: toIso((payload as { date?: unknown }).date),
		created_at: toIso((payload as { created_at?: unknown }).created_at),
		updated_at: toIso((payload as { updated_at?: unknown }).updated_at),
		categories: Array.isArray((payload as { categories?: unknown }).categories)
			? ((payload as { categories?: unknown }).categories as Array<CategoryPayload>).map((c) => ({
					...c,
					menu_items: Array.isArray((c as { menu_items?: unknown }).menu_items)
						? ((c as { menu_items?: unknown }).menu_items as Array<MenuItemPayload>).map(toMenuItemResponse)
						: undefined,
					menu_categories_categories: (c as { menu_categories_categories?: unknown })
						.menu_categories_categories,
				}))
			: undefined,
	};

	return DailyMealMenuBaseSchema.parse(converted as unknown);
}

export function toMenuList(payload: MenuPayload[]) {
	return payload.map(toMenuResponse);
}

export function toMenuItemList(payload: MenuItemPayload[]) {
	const normalized = payload.map((p) => ({
		...p,
		created_at: toIso((p as { created_at?: unknown }).created_at),
		updated_at: toIso((p as { updated_at?: unknown }).updated_at),
	}));
	return MenuItemsResponseSchema.parse(normalized as unknown) as MenuItemResponse[];
}

export function toMenuItemVersionResponse(payload: unknown): MenuItemVersionResponse {
	const obj = {
		menu_item_version_id: (payload as any)?.menu_item_version_id,
		menu_item_id: (payload as any)?.menu_item_id,
		version: (payload as any)?.version,
		snapshot: (payload as any)?.snapshot,
		created_at: toIso((payload as any)?.created_at),
	};

	return MenuItemVersionResponseSchema.parse(obj as unknown) as MenuItemVersionResponse;
}
