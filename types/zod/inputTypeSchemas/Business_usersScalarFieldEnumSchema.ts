import { z } from 'zod';

export const Business_usersScalarFieldEnumSchema = z.enum([
	'business_users_id',
	'online',
	'company_role',
	'created_at',
	'updated_at',
	'user_id',
	'business_id',
	'operating_address_id',
]);

export default Business_usersScalarFieldEnumSchema;
