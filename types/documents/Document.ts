// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DOCUMENT_TYPE, drivers, files, taxi_orders, transactions, vehicles } from '@prisma/client';

import type { Busines } from '../business/Busines.js';

export type Document = {
	document_id: string;
	document_type: DOCUMENT_TYPE;
	created_at: string;
	updated_at: string;
	expiration_date?: string | null;
	issue_date?: string | null;
	additional_info?: unknown | null;
	public: boolean;
	files: files[];
	driver_id?: string | null;
	drivers?: drivers | null;
	business_id?: string | null;
	business?: Busines | null;
	vehicle_id?: string | null;
	vehicles?: vehicles | null;
	transaction_id?: string | null;
	transactions?: transactions | null;
	order_id?: string | null;
	taxi_order?: taxi_orders | null;
};
