import { z } from 'zod';

export const CREDIT_STATUSSchema = z.enum(['ACTIVE', 'USED', 'EXPIRED']);

export type CREDIT_STATUSType = `${z.infer<typeof CREDIT_STATUSSchema>}`;

export default CREDIT_STATUSSchema;
