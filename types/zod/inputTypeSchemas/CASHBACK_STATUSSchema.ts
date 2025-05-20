import { z } from 'zod';

export const CASHBACK_STATUSSchema = z.enum(['PENDING','CONVERTED','EXPIRED']);

export type CASHBACK_STATUSType = `${z.infer<typeof CASHBACK_STATUSSchema>}`

export default CASHBACK_STATUSSchema;
