import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesCreateWithoutBusinessInputSchema } from './financesCreateWithoutBusinessInputSchema';
import { financesUncheckedCreateWithoutBusinessInputSchema } from './financesUncheckedCreateWithoutBusinessInputSchema';
import { financesCreateOrConnectWithoutBusinessInputSchema } from './financesCreateOrConnectWithoutBusinessInputSchema';
import { financesWhereUniqueInputSchema } from './financesWhereUniqueInputSchema';

export const financesCreateNestedOneWithoutBusinessInputSchema: z.ZodType<Prisma.financesCreateNestedOneWithoutBusinessInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => financesCreateWithoutBusinessInputSchema),
					z.lazy(() => financesUncheckedCreateWithoutBusinessInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => financesCreateOrConnectWithoutBusinessInputSchema).optional(),
			connect: z.lazy(() => financesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default financesCreateNestedOneWithoutBusinessInputSchema;
