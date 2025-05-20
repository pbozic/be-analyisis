import { z } from 'zod';
import { flagsWithRelationsSchema } from './flagsSchema';
import type { flagsWithRelations } from './flagsSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// FLAG HISTORY SCHEMA
/////////////////////////////////////////

export const flag_historySchema = z.object({
	flag_history_id: z.string().uuid(),
	flag_id: z.string(),
	user_id: z.string(),
	status: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type flag_history = z.infer<typeof flag_historySchema>;

/////////////////////////////////////////
// FLAG HISTORY RELATION SCHEMA
/////////////////////////////////////////

export type flag_historyRelations = {
	flag: flagsWithRelations;
	user: usersWithRelations;
};

export type flag_historyWithRelations = z.infer<typeof flag_historySchema> & flag_historyRelations;

export const flag_historyWithRelationsSchema: z.ZodType<flag_historyWithRelations> = flag_historySchema.merge(
	z.object({
		flag: z.lazy(() => flagsWithRelationsSchema),
		user: z.lazy(() => usersWithRelationsSchema),
	})
);

export default flag_historySchema;
