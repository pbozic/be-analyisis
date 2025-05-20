import { z } from 'zod';

export const ACCOUNT_ACTIONSSchema = z.enum(['SUSPEND','UNSUSPEND','BAN','UNBAN','DELETE','CREATE']);

export type ACCOUNT_ACTIONSType = `${z.infer<typeof ACCOUNT_ACTIONSSchema>}`

export default ACCOUNT_ACTIONSSchema;
