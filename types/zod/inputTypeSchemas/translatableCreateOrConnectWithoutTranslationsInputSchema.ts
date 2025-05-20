import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableCreateWithoutTranslationsInputSchema } from './translatableCreateWithoutTranslationsInputSchema';
import { translatableUncheckedCreateWithoutTranslationsInputSchema } from './translatableUncheckedCreateWithoutTranslationsInputSchema';

export const translatableCreateOrConnectWithoutTranslationsInputSchema: z.ZodType<Prisma.translatableCreateOrConnectWithoutTranslationsInput> =
	z
		.object({
			where: z.lazy(() => translatableWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => translatableCreateWithoutTranslationsInputSchema),
				z.lazy(() => translatableUncheckedCreateWithoutTranslationsInputSchema),
			]),
		})
		.strict();

export default translatableCreateOrConnectWithoutTranslationsInputSchema;
