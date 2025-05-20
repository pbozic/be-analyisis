import { z } from 'zod';

export const CASHBACK_SOURCESchema = z.enum(['ORDER','PROMOTIONAL','SYSTEM_GRANT','CONVERSION']);

export type CASHBACK_SOURCEType = `${z.infer<typeof CASHBACK_SOURCESchema>}`

export default CASHBACK_SOURCESchema;
