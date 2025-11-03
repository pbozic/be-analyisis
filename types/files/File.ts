// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type {
	FILE_TYPE,
	categories,
	delivery_orders,
	drivers,
	food_drinks_module,
	lost_items,
	menu_items,
	promo_ads,
	stores_module,
} from '@prisma/client';

import type { Document } from '../documents/Document.js';
import type { BlogPost } from '../blog/BlogPost.js';
import type { ReservationModule } from '../reservation/ReservationModule.js';
import type { User } from '../users/User.js';

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
	categories: categories[];
	blog_posts: BlogPost[];
	store_logo?: stores_module | null;
	store_banner?: stores_module | null;
	food_drinks_logo?: food_drinks_module | null;
	food_drinks_banner?: food_drinks_module | null;
	reservation_logo?: ReservationModule | null;
	reservation_banner?: ReservationModule | null;
	user_id?: string | null;
	user?: User | null;
	driver_id?: string | null;
	driver?: drivers | null;
	menu_items: menu_items[];
	lost_item_id?: string | null;
	lost_item?: lost_items | null;
	promo_banners: promo_ads[];
	delivery_order_id?: string | null;
	delivery_order?: delivery_orders | null;
};
