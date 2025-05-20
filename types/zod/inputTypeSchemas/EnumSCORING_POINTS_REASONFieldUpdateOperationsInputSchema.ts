import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SCORING_POINTS_REASONSchema } from './SCORING_POINTS_REASONSchema';

export const EnumSCORING_POINTS_REASONFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSCORING_POINTS_REASONFieldUpdateOperationsInput> =
	z
		.object({
			set: z.lazy(() => SCORING_POINTS_REASONSchema).optional(),
		})
		.strict();

export default EnumSCORING_POINTS_REASONFieldUpdateOperationsInputSchema;
