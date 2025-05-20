import { z } from 'zod';

export const BUSINESS_TYPESchema = z.enum(['TRANSFER', 'MERCHANT', 'BUSINESS', 'DISPATCHER']);

export type BUSINESS_TYPEType = `${z.infer<typeof BUSINESS_TYPESchema>}`;

export default BUSINESS_TYPESchema;
