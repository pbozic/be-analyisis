import { z } from 'zod';

export const Flag_historyScalarFieldEnumSchema = z.enum(['flag_history_id','flag_id','user_id','status','created_at','updated_at']);

export default Flag_historyScalarFieldEnumSchema;
