import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { businessUpdateOneRequiredWithoutBusiness_teamsNestedInputSchema } from './businessUpdateOneRequiredWithoutBusiness_teamsNestedInputSchema';

export const business_teamsUpdateWithoutUsersInputSchema: z.ZodType<Prisma.business_teamsUpdateWithoutUsersInput> = z
	.object({
		business_teams_id: z
			.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
			.optional(),
		team_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		limit_per_person: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		business: z.lazy(() => businessUpdateOneRequiredWithoutBusiness_teamsNestedInputSchema).optional(),
	})
	.strict();

export default business_teamsUpdateWithoutUsersInputSchema;
