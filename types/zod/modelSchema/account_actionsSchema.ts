import { z } from 'zod';
import { ACCOUNT_ACTIONS_REASONSchema } from '../inputTypeSchemas/ACCOUNT_ACTIONS_REASONSchema';
import { ACCOUNT_ACTIONSSchema } from '../inputTypeSchemas/ACCOUNT_ACTIONSSchema';
import { businessWithRelationsSchema } from './businessSchema';
import type { businessWithRelations } from './businessSchema';
import { usersWithRelationsSchema } from './usersSchema';
import type { usersWithRelations } from './usersSchema';

/////////////////////////////////////////
// ACCOUNT ACTIONS SCHEMA
/////////////////////////////////////////

export const account_actionsSchema = z.object({
	reason: ACCOUNT_ACTIONS_REASONSchema,
	action: ACCOUNT_ACTIONSSchema,
	account_action_id: z.string().uuid(),
	business_id: z.string().nullable(),
	user_id: z.string().nullable(),
	created_at: z.coerce.date(),
	action_creator_user_id: z.string(),
});

export type account_actions = z.infer<typeof account_actionsSchema>;

/////////////////////////////////////////
// ACCOUNT ACTIONS RELATION SCHEMA
/////////////////////////////////////////

export type account_actionsRelations = {
	business?: businessWithRelations | null;
	user?: usersWithRelations | null;
	action_creator?: usersWithRelations | null;
};

export type account_actionsWithRelations = z.infer<typeof account_actionsSchema> & account_actionsRelations;

export const account_actionsWithRelationsSchema: z.ZodType<account_actionsWithRelations> = account_actionsSchema.merge(
	z.object({
		business: z.lazy(() => businessWithRelationsSchema).nullable(),
		user: z.lazy(() => usersWithRelationsSchema).nullable(),
		action_creator: z.lazy(() => usersWithRelationsSchema).nullable(),
	})
);

export default account_actionsSchema;
