import { z } from 'zod';

export const TokenTypeSchema = z.enum(['EMAIL', 'PHONE_VERIFICATION', 'API', 'PASSWORD_RESET']);

export type TokenTypeType = `${z.infer<typeof TokenTypeSchema>}`;

export default TokenTypeSchema;
