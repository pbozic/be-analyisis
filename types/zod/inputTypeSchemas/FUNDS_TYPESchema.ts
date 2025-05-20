import { z } from 'zod';

export const FUNDS_TYPESchema = z.enum(['FUNDS','CREDITS_ANY','CREDITS_TAXI','CREDITS_TRANSFER','CREDITS_DELIVERY']);

export type FUNDS_TYPEType = `${z.infer<typeof FUNDS_TYPESchema>}`

export default FUNDS_TYPESchema;
