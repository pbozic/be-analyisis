import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutPromo_section_buysInputSchema } from './usersCreateWithoutPromo_section_buysInputSchema';
import { usersUncheckedCreateWithoutPromo_section_buysInputSchema } from './usersUncheckedCreateWithoutPromo_section_buysInputSchema';

export const usersCreateOrConnectWithoutPromo_section_buysInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutPromo_section_buysInput> =
	z
		.object({
			where: z.lazy(() => usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => usersCreateWithoutPromo_section_buysInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutPromo_section_buysInputSchema),
			]),
		})
		.strict();

export default usersCreateOrConnectWithoutPromo_section_buysInputSchema;
