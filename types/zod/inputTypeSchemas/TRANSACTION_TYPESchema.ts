import { z } from 'zod';

export const TRANSACTION_TYPESchema = z.enum(['DEBIT','CREDIT']);

export type TRANSACTION_TYPEType = `${z.infer<typeof TRANSACTION_TYPESchema>}`

export default TRANSACTION_TYPESchema;
