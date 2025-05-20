import { z } from 'zod';

export const GENDERSchema = z.enum(['MALE','FEMALE','OTHER']);

export type GENDERType = `${z.infer<typeof GENDERSchema>}`

export default GENDERSchema;
