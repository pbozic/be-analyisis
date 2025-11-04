import { FILE_TYPE } from '@prisma/client';

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

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type File = {
	file_id: string;
	url?: string | null;
	file_type: FILE_TYPE;
	public: boolean;
	mime_type: string;
	created_at: string;
	updated_at: string;
	document_id?: string | null;
	documents?: Document | null;
	categories: Category[];
	blog_posts: BlogPost[];
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
	menu_items: MenuItem[];
	lost_item_id?: string | null;
	lost_item?: LostItem | null;
	promo_banners: PromoBanner[];
	delivery_order_id?: string | null;
	delivery_order?: DeliveryOrder | null;
};
