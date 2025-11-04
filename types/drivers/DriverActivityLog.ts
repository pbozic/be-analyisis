import { ACTIVITY_TYPE } from '@prisma/client';

import type { Driver } from './Driver.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type DriverActivityLog = {
	driver_activity_log_id: string;
	driver_id: string;
	activity_type: ACTIVITY_TYPE;
	started_at: string;
	ended_at?: string | null;
	timeout_at?: string | null;
	lockout_until?: string | null;
	driver: Driver;
};
