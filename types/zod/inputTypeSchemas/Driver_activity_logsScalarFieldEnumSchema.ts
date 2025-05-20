import { z } from 'zod';

export const Driver_activity_logsScalarFieldEnumSchema = z.enum([
	'driver_activity_log_id',
	'driver_id',
	'activity_type',
	'started_at',
	'ended_at',
	'timeout_at',
	'lockout_until',
]);

export default Driver_activity_logsScalarFieldEnumSchema;
