import { z } from 'zod';

export const Group_usersScalarFieldEnumSchema = z.enum([
	'group_user_id',
	'parent_user_id',
	'child_user_id',
	'created_at',
	'updated_at',
	'enabled',
]);

export default Group_usersScalarFieldEnumSchema;
