import { z } from 'zod';

export const COMPANY_ROLESchema = z.enum(['DIRECTOR', 'MANAGER', 'REPRESENTATIVE_OF_SALES', 'HEAD_OF_PROCUREMENT']);

export type COMPANY_ROLEType = `${z.infer<typeof COMPANY_ROLESchema>}`;

export default COMPANY_ROLESchema;
