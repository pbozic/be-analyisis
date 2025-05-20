import { z } from 'zod';

export const CATEGORY_TYPESchema = z.enum(['MENU','CUISINE']);

export type CATEGORY_TYPEType = `${z.infer<typeof CATEGORY_TYPESchema>}`

export default CATEGORY_TYPESchema;
