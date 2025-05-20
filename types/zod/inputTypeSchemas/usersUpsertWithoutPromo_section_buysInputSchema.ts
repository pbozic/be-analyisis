import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutPromo_section_buysInputSchema } from './usersUpdateWithoutPromo_section_buysInputSchema';
import { usersUncheckedUpdateWithoutPromo_section_buysInputSchema } from './usersUncheckedUpdateWithoutPromo_section_buysInputSchema';
import { usersCreateWithoutPromo_section_buysInputSchema } from './usersCreateWithoutPromo_section_buysInputSchema';
import { usersUncheckedCreateWithoutPromo_section_buysInputSchema } from './usersUncheckedCreateWithoutPromo_section_buysInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutPromo_section_buysInputSchema: z.ZodType<Prisma.usersUpsertWithoutPromo_section_buysInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => usersUpdateWithoutPromo_section_buysInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutPromo_section_buysInputSchema),
			]),
			create: z.union([
				z.lazy(() => usersCreateWithoutPromo_section_buysInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutPromo_section_buysInputSchema),
			]),
			where: z.lazy(() => usersWhereInputSchema).optional(),
		})
		.strict();

export default usersUpsertWithoutPromo_section_buysInputSchema;
