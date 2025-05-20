import { z } from 'zod';

export const CASHBACK_TYPESchema = z.enum(['TAXI', 'DELIVERY', 'TRANSFER']);

export type CASHBACK_TYPEType = `${z.infer<typeof CASHBACK_TYPESchema>}`;

export default CASHBACK_TYPESchema;
