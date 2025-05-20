import { z } from 'zod';

export const FlagsScalarFieldEnumSchema = z.enum(['flag_id', 'name', 'status', 'created_at', 'updated_at']);

export default FlagsScalarFieldEnumSchema;
