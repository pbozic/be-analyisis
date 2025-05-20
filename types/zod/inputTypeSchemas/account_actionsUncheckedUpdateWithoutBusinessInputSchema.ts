import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONS_REASONSchema } from './ACCOUNT_ACTIONS_REASONSchema';
import { EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema';
import { ACCOUNT_ACTIONSSchema } from './ACCOUNT_ACTIONSSchema';
import { EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema } from './EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema';

export const account_actionsUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.account_actionsUncheckedUpdateWithoutBusinessInput> =
	z
		.object({
			account_action_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			user_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			action_creator_user_id: z
				.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			reason: z
				.union([
					z.lazy(() => ACCOUNT_ACTIONS_REASONSchema),
					z.lazy(() => EnumACCOUNT_ACTIONS_REASONFieldUpdateOperationsInputSchema),
				])
				.optional(),
			action: z
				.union([
					z.lazy(() => ACCOUNT_ACTIONSSchema),
					z.lazy(() => EnumACCOUNT_ACTIONSFieldUpdateOperationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default account_actionsUncheckedUpdateWithoutBusinessInputSchema;
