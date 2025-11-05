import { FILE_TYPE } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Document } from '../documents/Document.js';
import type { Category } from '../menus/Category.js';
import type { BlogPost } from '../blog/BlogPost.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { User } from '../users/User.js';
import type { Driver } from '../drivers/Driver.js';
import type { MenuItem } from '../menuItems/MenuItem.js';
import type { LostItem } from '../lostItems/LostItem.js';
import type { PromoBanner } from '../promoAds/PromoBanner.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import { DocumentResponseSchema } from '../documents/Document';
import { CategoryResponseSchema } from '../menus/Category';
import { BlogPostResponseSchema } from '../blog/BlogPost';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';
import { UserResponseSchema } from '../users/User';
import { DriverResponseSchema } from '../drivers/Driver';
import { MenuItemResponseSchema } from '../menuItems/MenuItem';
import { LostItemResponseSchema } from '../lostItems/LostItem';
import { PromoBannerResponseSchema } from '../promoAds/PromoBanner';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateFileSchema = z
	.object({
		file_id: z.string().uuid(),
		url: z.string().nullable().optional(),
		file_type: z.nativeEnum(FILE_TYPE),
		public: z.boolean(),
		mime_type: z.string(),
		document_id: z.string().uuid().nullable().optional(),
		user_id: z.string().uuid().nullable().optional(),
		driver_id: z.string().uuid().nullable().optional(),
		lost_item_id: z.string().uuid().nullable().optional(),
		delivery_order_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateFile');

export type CreateFileInput = z.infer<typeof CreateFileSchema>;

export const UpdateFileSchema = CreateFileSchema.partial().openapi('UpdateFile');
export type UpdateFileInput = z.infer<typeof UpdateFileSchema>;

export const FileResponseBaseSchema = z
	.object({
		file_id: z.string(),
		url: z.string().nullable().optional(),
		file_type: z.nativeEnum(FILE_TYPE),
		public: z.boolean(),
		mime_type: z.string(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		document_id: z.string().nullable().optional(),
		user_id: z.string().nullable().optional(),
		driver_id: z.string().nullable().optional(),
		lost_item_id: z.string().nullable().optional(),
		delivery_order_id: z.string().nullable().optional(),
	})
	.openapi('FileResponseBase');

export const FileResponseSchema = FileResponseBaseSchema.extend({
	documents: DocumentResponseSchema.nullable().optional(),
	categories: z.array(CategoryResponseSchema),
	blog_posts: z.array(BlogPostResponseSchema),
	store_logo: StoresModuleResponseSchema.nullable().optional(),
	store_banner: StoresModuleResponseSchema.nullable().optional(),
	food_drinks_logo: FoodDrinksModuleResponseSchema.nullable().optional(),
	food_drinks_banner: FoodDrinksModuleResponseSchema.nullable().optional(),
	reservation_logo: ReservationModuleResponseBaseSchema.nullable().optional(),
	reservation_banner: ReservationModuleResponseBaseSchema.nullable().optional(),
	user: UserResponseSchema.nullable().optional(),
	driver: DriverResponseSchema.nullable().optional(),
	menu_items: z.array(MenuItemResponseSchema),
	lost_item: LostItemResponseSchema.nullable().optional(),
	promo_banners: z.array(PromoBannerResponseSchema),
	delivery_order: DeliveryOrderResponseSchema.nullable().optional(),
}).openapi('FileResponse');

export type FileBase = z.infer<typeof FileResponseBaseSchema>;
export type FileResponse = z.infer<typeof FileResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateFile', CreateFileSchema);
	registry.register('UpdateFile', UpdateFileSchema);
	registry.register('FileResponseBase', FileResponseBaseSchema);
	registry.register('FileResponse', FileResponseSchema);
}

export type File = {
	file_id: string;
	url?: string | null;
	file_type: FILE_TYPE;
	public: boolean;
	mime_type: string;
	created_at: Date;
	updated_at: Date;
	document_id?: string | null;
	documents?: Document | null;
	categories?: Category[];
	blog_posts?: BlogPost[];
	store_logo?: StoresModule | null;
	store_banner?: StoresModule | null;
	food_drinks_logo?: FoodDrinksModule | null;
	food_drinks_banner?: FoodDrinksModule | null;
	reservation_logo?: ReservationModule | null;
	reservation_banner?: ReservationModule | null;
	user_id?: string | null;
	user?: User | null;
	driver_id?: string | null;
	driver?: Driver | null;
	menu_items?: MenuItem[];
	lost_item_id?: string | null;
	lost_item?: LostItem | null;
	promo_banners?: PromoBanner[];
	delivery_order_id?: string | null;
	delivery_order?: DeliveryOrder | null;
};
