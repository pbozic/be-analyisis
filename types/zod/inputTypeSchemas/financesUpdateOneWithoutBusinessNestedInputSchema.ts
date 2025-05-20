import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { financesCreateWithoutBusinessInputSchema } from './financesCreateWithoutBusinessInputSchema';
import { financesUncheckedCreateWithoutBusinessInputSchema } from './financesUncheckedCreateWithoutBusinessInputSchema';
import { financesCreateOrConnectWithoutBusinessInputSchema } from './financesCreateOrConnectWithoutBusinessInputSchema';
import { financesUpsertWithoutBusinessInputSchema } from './financesUpsertWithoutBusinessInputSchema';
import { financesWhereInputSchema } from './financesWhereInputSchema';
import { financesWhereUniqueInputSchema } from './financesWhereUniqueInputSchema';
import { financesUpdateToOneWithWhereWithoutBusinessInputSchema } from './financesUpdateToOneWithWhereWithoutBusinessInputSchema';
import { financesUpdateWithoutBusinessInputSchema } from './financesUpdateWithoutBusinessInputSchema';
import { financesUncheckedUpdateWithoutBusinessInputSchema } from './financesUncheckedUpdateWithoutBusinessInputSchema';

export const financesUpdateOneWithoutBusinessNestedInputSchema: z.ZodType<Prisma.financesUpdateOneWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => financesCreateWithoutBusinessInputSchema),
					z.lazy(() => financesUncheckedCreateWithoutBusinessInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => financesCreateOrConnectWithoutBusinessInputSchema).optional(),
			upsert: z.lazy(() => financesUpsertWithoutBusinessInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => financesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => financesWhereInputSchema)]).optional(),
			connect: z.lazy(() => financesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => financesUpdateToOneWithWhereWithoutBusinessInputSchema),
					z.lazy(() => financesUpdateWithoutBusinessInputSchema),
					z.lazy(() => financesUncheckedUpdateWithoutBusinessInputSchema),
				])
				.optional(),
		})
		.strict();

export default financesUpdateOneWithoutBusinessNestedInputSchema;
