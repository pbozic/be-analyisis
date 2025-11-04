import { ANALYTICS_TYPE, PROMO_TYPE } from '@prisma/client';

import type { Business } from '../business/Business.js';
import type { User } from '../users/User.js';
import type { PromoAd } from '../promoAds/PromoAd.js';
import type { PromoSection } from '../promoSections/PromoSection.js';
import type { Word } from '../promoWords/Word.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type PromoAnalytic = {
	promo_analytics_id: string;
	promo_ads_id?: string | null;
	promo_sections_id?: string | null;
	word_id?: string | null;
	order_id?: string | null;
	daily_meal_subscription_id?: string | null;
	business_id: string;
	user_id?: string | null;
	created_at: string;
	updated_at: string;
	promo_type: PROMO_TYPE;
	type: ANALYTICS_TYPE;
	business: Business;
	user?: User | null;
	promo_ads?: PromoAd | null;
	promo_sections?: PromoSection | null;
	promo_words?: Word | null;
	order?: DeliveryOrder | null;
	daily_meal_subscription?: DailyMealSubscription | null;
};
