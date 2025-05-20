import { z } from 'zod';

export const BUSINESS_CATEGORYSchema = z.enum(['TAXI', 'TRANSFER', 'MERCHANT']);

export type BUSINESS_CATEGORYType = `${z.infer<typeof BUSINESS_CATEGORYSchema>}`;

export default BUSINESS_CATEGORYSchema;
