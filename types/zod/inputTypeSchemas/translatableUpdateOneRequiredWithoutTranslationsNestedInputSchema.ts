import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutTranslationsInputSchema } from './translatableCreateWithoutTranslationsInputSchema';
import { translatableUncheckedCreateWithoutTranslationsInputSchema } from './translatableUncheckedCreateWithoutTranslationsInputSchema';
import { translatableCreateOrConnectWithoutTranslationsInputSchema } from './translatableCreateOrConnectWithoutTranslationsInputSchema';
import { translatableUpsertWithoutTranslationsInputSchema } from './translatableUpsertWithoutTranslationsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableUpdateToOneWithWhereWithoutTranslationsInputSchema } from './translatableUpdateToOneWithWhereWithoutTranslationsInputSchema';
import { translatableUpdateWithoutTranslationsInputSchema } from './translatableUpdateWithoutTranslationsInputSchema';
import { translatableUncheckedUpdateWithoutTranslationsInputSchema } from './translatableUncheckedUpdateWithoutTranslationsInputSchema';

export const translatableUpdateOneRequiredWithoutTranslationsNestedInputSchema: z.ZodType<Prisma.translatableUpdateOneRequiredWithoutTranslationsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => translatableCreateWithoutTranslationsInputSchema),
					z.lazy(() => translatableUncheckedCreateWithoutTranslationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutTranslationsInputSchema).optional(),
			upsert: z.lazy(() => translatableUpsertWithoutTranslationsInputSchema).optional(),
			connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => translatableUpdateToOneWithWhereWithoutTranslationsInputSchema),
					z.lazy(() => translatableUpdateWithoutTranslationsInputSchema),
					z.lazy(() => translatableUncheckedUpdateWithoutTranslationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default translatableUpdateOneRequiredWithoutTranslationsNestedInputSchema;
