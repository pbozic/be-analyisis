// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { ACTIVITY_TYPE, drivers } from '@prisma/client';

export type DriverActivityLog = {
	driver_activity_log_id: string;
	driver_id: string;
	activity_type: ACTIVITY_TYPE;
	started_at: string;
	ended_at?: string | null;
	timeout_at?: string | null;
	lockout_until?: string | null;
	driver: drivers;
};
