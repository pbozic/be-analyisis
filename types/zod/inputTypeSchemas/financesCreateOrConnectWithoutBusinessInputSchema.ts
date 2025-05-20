import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesWhereUniqueInputSchema } from './financesWhereUniqueInputSchema';
import { financesCreateWithoutBusinessInputSchema } from './financesCreateWithoutBusinessInputSchema';
import { financesUncheckedCreateWithoutBusinessInputSchema } from './financesUncheckedCreateWithoutBusinessInputSchema';

export const financesCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.financesCreateOrConnectWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => financesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => financesCreateWithoutBusinessInputSchema),
				z.lazy(() => financesUncheckedCreateWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default financesCreateOrConnectWithoutBusinessInputSchema;
