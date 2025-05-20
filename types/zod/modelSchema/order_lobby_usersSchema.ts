import { z } from 'zod';
import { order_lobbiesWithRelationsSchema } from './order_lobbiesSchema';
import type { order_lobbiesWithRelations } from './order_lobbiesSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// ORDER LOBBY USERS SCHEMA
/////////////////////////////////////////

export const order_lobby_usersSchema = z.object({
	order_lobby_users_id: z.string().uuid(),
	user_id: z.string(),
	order_lobbies_id: z.string(),
	limit: z.number(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type order_lobby_users = z.infer<typeof order_lobby_usersSchema>;

/////////////////////////////////////////
// ORDER LOBBY USERS RELATION SCHEMA
/////////////////////////////////////////

export type order_lobby_usersRelations = {
	order_lobbies: order_lobbiesWithRelations;
	users: usersWithRelations;
};

export type order_lobby_usersWithRelations = z.infer<typeof order_lobby_usersSchema> & order_lobby_usersRelations;

export const order_lobby_usersWithRelationsSchema: z.ZodType<order_lobby_usersWithRelations> =
	order_lobby_usersSchema.merge(
		z.object({
			order_lobbies: z.lazy(() => order_lobbiesWithRelationsSchema),
			users: z.lazy(() => usersWithRelationsSchema),
		})
	);

export default order_lobby_usersSchema;
