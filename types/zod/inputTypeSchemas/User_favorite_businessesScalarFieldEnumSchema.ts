import { z } from 'zod';

export const User_favorite_businessesScalarFieldEnumSchema = z.enum([
	'user_favorite_businesses_id',
	'user_id',
	'business_id',
	'business_type',
	'created_at',
	'updated_at',
]);

export default User_favorite_businessesScalarFieldEnumSchema;
