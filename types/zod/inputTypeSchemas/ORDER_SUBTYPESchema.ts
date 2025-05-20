import { z } from 'zod';

export const ORDER_SUBTYPESchema = z.enum(['CREATED_BY_USER', 'CREATED_BY_DISPATCHER', 'CREATED_BY_BUSINESS']);

export type ORDER_SUBTYPEType = `${z.infer<typeof ORDER_SUBTYPESchema>}`;

export default ORDER_SUBTYPESchema;
