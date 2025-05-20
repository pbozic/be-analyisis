import { z } from 'zod';
import { TokenTypeSchema } from '../inputTypeSchemas/TokenTypeSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// TOKENS SCHEMA
/////////////////////////////////////////

export const tokensSchema = z.object({
	type: TokenTypeSchema,
	token_id: z.string().uuid(),
	user_id: z.string(),
	token: z.string(),
	expires_at: z.coerce.date(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	active: z.boolean(),
});

export type tokens = z.infer<typeof tokensSchema>;

/////////////////////////////////////////
// TOKENS RELATION SCHEMA
/////////////////////////////////////////

export type tokensRelations = {
	users: usersWithRelations;
};

export type tokensWithRelations = z.infer<typeof tokensSchema> & tokensRelations;

export const tokensWithRelationsSchema: z.ZodType<tokensWithRelations> = tokensSchema.merge(
	z.object({
		users: z.lazy(() => usersWithRelationsSchema),
	})
);

export default tokensSchema;
