import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const translatableUpdateManyMutationInputSchema: z.ZodType<Prisma.translatableUpdateManyMutationInput> = z
	.object({
		translatable_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export default translatableUpdateManyMutationInputSchema;
