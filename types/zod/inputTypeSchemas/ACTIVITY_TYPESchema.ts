import { z } from 'zod';

export const ACTIVITY_TYPESchema = z.enum(['ONLINE', 'OFFLINE', 'LOCKED_OUT']);

export type ACTIVITY_TYPEType = `${z.infer<typeof ACTIVITY_TYPESchema>}`;

export default ACTIVITY_TYPESchema;
