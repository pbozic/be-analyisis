// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { delivery_orders, taxi_orders } from '@prisma/client';

import type { Reviewable } from './Reviewable.js';
import type { User } from '../users/User.js';

export type Review = {
	review_id: string;
	reviewable_id: string;
	author_id: string;
	rating?: number | null;
	comment?: string | null;
	feedback?: unknown | null;
	created_at: string;
	updated_at: string;
	reviewable: Reviewable;
	author: User;
	delivery_order?: delivery_orders | null;
	taxi_order?: taxi_orders | null;
	vehicle_id?: string | null;
};
