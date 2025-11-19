import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { registerSchemas as registerMenuSchemas } from './menu.dto.js';
import { registerSchemas as registerMenuValidatorSchemas } from './menu.validators.js';
import { registerMenuCategoryDaoSchemas } from './menucategory.dto.js';
import { registerMenuItemDaoSchemas } from './menuitem.dto.js';

// === Menu DTOs (Response) ===
export {
	MenuBaseSchema,
	MenuCategoryRefSchema,
	MenuItemBaseSchema,
	MenuItemRefSchema,
	MenuItemDetailSchema,
	MenuItemResponseSchema,
	MenuItemsResponseSchema,
	MenuItemVersionResponseSchema,
	DailyMealMenuCategorySchema,
	DailyMealMenuBaseSchema,
	type MenuBase,
	type MenuCategoryRef,
	type MenuItemBase,
	type MenuItemRef,
	type MenuItemDetail,
	type MenuItemResponse,
	type MenuItemsResponse,
	type MenuItemVersionResponse,
	type DailyMealMenuCategory,
	type DailyMealMenuBase,
	registerSchemas as registerMenuSchemas,
} from './menu.dto.js';

// === Menu Validators (Request Body, Query, Params) ===
export {
	CreateMenuSchema,
	CreateDailyMealMenuSchema,
	SetActiveMenuInputSchema,
	UpdateMenuOrderInputSchema,
	DailyMenuByBusinessIdBodySchema,
	MenuCategoryDataSchema,
	CreateMenuCategorySchema,
	UpdateMenuCategoryInputSchema,
	AddCategoryToMenuInputSchema,
	RemoveCategoryFromMenuInputSchema,
	UpdateDailyMealMenuPriceInputSchema,
	MenuItemDataSchema,
	CreateMenuItemSchema,
	UpdateMenuItemInputSchema,
	GetMenuItemsByIdsRequestSchema,
	UpdateMenuItemEnabledSchema,
	UpdateMenuItemPriceSchema,
	CreateMenuItemVersionSchema,
	AddMenuItemToCategoryInputSchema,
	RemoveMenuItemFromCategoryInputSchema,
	UpdateMenuItemsOrderInputSchema,
	MenuItemsIdsBodySchema,
	type SetActiveMenuInput,
	type UpdateMenuOrderInput,
	type DailyMenuByBusinessIdBody,
	type UpdateMenuCategoryInput,
	type AddMenuCategoryIdToOrderInput,
	type RemoveMenuCategoryIdFromOrderInput,
	type AddCategoryToMenuInput,
	type RemoveCategoryFromMenuInput,
	type UpdateDailyMealMenuPriceInput,
	type UpdateMenuItemInput,
	type AddMenuItemToCategoryInput,
	type RemoveMenuItemFromCategoryInput,
	type UpdateMenuItemsOrderInput,
	// DAO-level schemas
	CreateMenuCategoryInputSchema,
	CreateMenuCategoryWithCategoriesInputSchema,
	CreateDailyMealMenuCategoryInputSchema,
	GetMenuCategoriesByMenuIdParamsSchema,
	GetMenuCategoriesByBusinessIdParamsSchema,
	DeleteMenuCategoryInputSchema,
	AddCategoryToMenuCategoryInputSchema,
	RemoveCategoryFromMenuCategoryInputSchema,
	GetMenuCategoryByIdParamsSchema,
	UpdateMenuCategoriesWithNewPriceInputSchema,
	CreateMenuItemVersionInputSchema,
	CreateMenuItemInputSchema,
	AddMenuItemIdToOrderInputSchema,
	RemoveMenuItemIdFromOrderInputSchema,
	GetMenuItemsByIdsDaoInputSchema,
	GetMenuItemsByBusinessIdDaoParamsSchema,
	GetMenuItemsByCategoryIdParamsSchema,
	DeleteMenuItemInputSchema,
	UpdateMenuItemPriceInputSchema,
	type CreateMenuCategoryInput,
	type CreateMenuCategoryWithCategoriesInput,
	type CreateDailyMealMenuCategoryInput,
	type GetMenuCategoriesByMenuIdParams,
	type GetMenuCategoriesByBusinessIdParams,
	type DeleteMenuCategoryInput,
	type AddCategoryToMenuCategoryInput,
	type RemoveCategoryFromMenuCategoryInput,
	type GetMenuCategoryByIdParams,
	type UpdateMenuCategoriesWithNewPriceInput,
	type CreateMenuItemVersionInput,
	type CreateMenuItemInput,
	type AddMenuItemIdToOrderInput,
	type RemoveMenuItemIdFromOrderInput,
	type GetMenuItemsByIdsDaoInput,
	type GetMenuItemsByBusinessIdDaoParams,
	type GetMenuItemsByCategoryIdParams,
	type DeleteMenuItemInput,
	type UpdateMenuItemPriceInput,
	registerSchemas as registerMenuValidatorSchemas,
} from './menu.validators.js';

// === Menu Mappers ===
export * from './menu.mappers.js';
export * from './menuCategory.mappers.js';

export function registerSchemas(registry: OpenAPIRegistry) {
	registerMenuSchemas(registry);
	registerMenuValidatorSchemas(registry);
	registerMenuCategoryDaoSchemas(registry);
	registerMenuItemDaoSchemas(registry);
}
