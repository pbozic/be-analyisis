import { z } from 'zod';

export const PROMO_SERVICE_TYPESSchema = z.enum(['TAXI','DELIVERY']);

export type PROMO_SERVICE_TYPESType = `${z.infer<typeof PROMO_SERVICE_TYPESSchema>}`

export default PROMO_SERVICE_TYPESSchema;
