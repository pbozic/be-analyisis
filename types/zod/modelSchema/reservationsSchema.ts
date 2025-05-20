import { z } from 'zod';
import { RESERVATION_STATUSSchema } from '../inputTypeSchemas/RESERVATION_STATUSSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// RESERVATIONS SCHEMA
/////////////////////////////////////////

export const reservationsSchema = z.object({
	status: RESERVATION_STATUSSchema,
	reservation_id: z.string().uuid(),
	seats: z.number().int(),
	date: z.coerce.date(),
	time: z.string(),
	datetime: z.coerce.date(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
	business_id: z.string(),
	user_id: z.string(),
	table: z.number().int().nullable(),
});

export type reservations = z.infer<typeof reservationsSchema>;

/////////////////////////////////////////
// RESERVATIONS RELATION SCHEMA
/////////////////////////////////////////

export type reservationsRelations = {
	business: businessWithRelations;
	user: usersWithRelations;
};

export type reservationsWithRelations = z.infer<typeof reservationsSchema> & reservationsRelations;

export const reservationsWithRelationsSchema: z.ZodType<reservationsWithRelations> = reservationsSchema.merge(
	z.object({
		business: z.lazy(() => businessWithRelationsSchema),
		user: z.lazy(() => usersWithRelationsSchema),
	})
);

export default reservationsSchema;
