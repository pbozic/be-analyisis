import { z } from 'zod';

export const AllergensScalarFieldEnumSchema = z.enum(['allergen_id', 'name', 'description', 'code']);

export default AllergensScalarFieldEnumSchema;
