import { z } from 'zod';

export const FILE_TYPESchema = z.enum(['IMAGE', 'DOCUMENT']);

export type FILE_TYPEType = `${z.infer<typeof FILE_TYPESchema>}`;

export default FILE_TYPESchema;
