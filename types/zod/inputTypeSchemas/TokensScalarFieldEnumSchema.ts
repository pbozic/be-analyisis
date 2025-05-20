import { z } from 'zod';

export const TokensScalarFieldEnumSchema = z.enum(['token_id','user_id','type','token','expires_at','created_at','updated_at','active']);

export default TokensScalarFieldEnumSchema;
