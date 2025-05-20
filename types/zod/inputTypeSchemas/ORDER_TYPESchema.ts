import { z } from 'zod';

export const ORDER_TYPESchema = z.enum(['TAXI','TRANSFER_PRIVATE','TRANSFER_SHUTTLE','VEHICLE_TRANSFER','VEHICLE_TRANSFER_COMBO']);

export type ORDER_TYPEType = `${z.infer<typeof ORDER_TYPESchema>}`

export default ORDER_TYPESchema;
