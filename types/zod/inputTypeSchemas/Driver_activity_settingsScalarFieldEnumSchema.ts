import { z } from 'zod';

export const Driver_activity_settingsScalarFieldEnumSchema = z.enum(['driver_activity_settings_id','first_offline_lockout','second_offline_lockout','online_timeout','created_at','updated_at','active']);

export default Driver_activity_settingsScalarFieldEnumSchema;
