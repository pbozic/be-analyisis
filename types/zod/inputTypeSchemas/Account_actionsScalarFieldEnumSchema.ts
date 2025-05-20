import { z } from 'zod';

export const Account_actionsScalarFieldEnumSchema = z.enum(['account_action_id','business_id','user_id','created_at','action_creator_user_id','reason','action']);

export default Account_actionsScalarFieldEnumSchema;
