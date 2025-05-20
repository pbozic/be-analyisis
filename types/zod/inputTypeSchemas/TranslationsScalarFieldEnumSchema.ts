import { z } from 'zod';

export const TranslationsScalarFieldEnumSchema = z.enum(['translations_id','translatable_id','field','language','translation','created_at','updated_at']);

export default TranslationsScalarFieldEnumSchema;
