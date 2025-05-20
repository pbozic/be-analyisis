import { z } from 'zod';

export const SORTING_TYPESchema = z.enum(['AUTOMATIC','MANUAL']);

export type SORTING_TYPEType = `${z.infer<typeof SORTING_TYPESchema>}`

export default SORTING_TYPESchema;
