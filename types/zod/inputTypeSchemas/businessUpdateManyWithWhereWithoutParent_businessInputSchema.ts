import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessScalarWhereInputSchema } from './businessScalarWhereInputSchema';
import { businessUpdateManyMutationInputSchema } from './businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyWithoutParent_businessInputSchema } from './businessUncheckedUpdateManyWithoutParent_businessInputSchema';

export const businessUpdateManyWithWhereWithoutParent_businessInputSchema: z.ZodType<Prisma.businessUpdateManyWithWhereWithoutParent_businessInput> =
	z
		.object({
			where: z.lazy(() => businessScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => businessUpdateManyMutationInputSchema),
				z.lazy(() => businessUncheckedUpdateManyWithoutParent_businessInputSchema),
			]),
		})
		.strict();

export default businessUpdateManyWithWhereWithoutParent_businessInputSchema;
