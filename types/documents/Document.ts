import { DOCUMENT_TYPE } from '@prisma/client';

import type { File } from '../files/File.js';
import type { Driver } from '../drivers/Driver.js';
import type { Business } from '../business/Business.js';
import type { Vehicle } from '../vehicles/Vehicle.js';
import type { Transaction } from '../payments/Transaction.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type Document = {
	document_id: string;
	document_type: DOCUMENT_TYPE;
	created_at: Date;
	updated_at: Date;
	expiration_date?: Date | null;
	issue_date?: Date | null;
	additional_info?: unknown | null;
	public: boolean;
	files: File[];
	driver_id?: string | null;
	drivers?: Driver | null;
	business_id?: string | null;
	business?: Business | null;
	vehicle_id?: string | null;
	vehicles?: Vehicle | null;
	transaction_id?: string | null;
	transactions?: Transaction | null;
	order_id?: string | null;
	taxi_order?: TaxiOrder | null;
};
