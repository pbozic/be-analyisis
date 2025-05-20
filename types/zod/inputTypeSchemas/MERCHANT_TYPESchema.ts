import { z } from 'zod';

export const MERCHANT_TYPESchema = z.enum(['RESTAURANT','BAR','MARKET','STORE']);

export type MERCHANT_TYPEType = `${z.infer<typeof MERCHANT_TYPESchema>}`

export default MERCHANT_TYPESchema;
