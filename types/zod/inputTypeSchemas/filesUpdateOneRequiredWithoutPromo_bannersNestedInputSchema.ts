import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutPromo_bannersInputSchema } from './filesCreateWithoutPromo_bannersInputSchema';
import { filesUncheckedCreateWithoutPromo_bannersInputSchema } from './filesUncheckedCreateWithoutPromo_bannersInputSchema';
import { filesCreateOrConnectWithoutPromo_bannersInputSchema } from './filesCreateOrConnectWithoutPromo_bannersInputSchema';
import { filesUpsertWithoutPromo_bannersInputSchema } from './filesUpsertWithoutPromo_bannersInputSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';
import { filesUpdateToOneWithWhereWithoutPromo_bannersInputSchema } from './filesUpdateToOneWithWhereWithoutPromo_bannersInputSchema';
import { filesUpdateWithoutPromo_bannersInputSchema } from './filesUpdateWithoutPromo_bannersInputSchema';
import { filesUncheckedUpdateWithoutPromo_bannersInputSchema } from './filesUncheckedUpdateWithoutPromo_bannersInputSchema';

export const filesUpdateOneRequiredWithoutPromo_bannersNestedInputSchema: z.ZodType<Prisma.filesUpdateOneRequiredWithoutPromo_bannersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => filesCreateWithoutPromo_bannersInputSchema),
					z.lazy(() => filesUncheckedCreateWithoutPromo_bannersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutPromo_bannersInputSchema).optional(),
			upsert: z.lazy(() => filesUpsertWithoutPromo_bannersInputSchema).optional(),
			connect: z.lazy(() => filesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => filesUpdateToOneWithWhereWithoutPromo_bannersInputSchema),
					z.lazy(() => filesUpdateWithoutPromo_bannersInputSchema),
					z.lazy(() => filesUncheckedUpdateWithoutPromo_bannersInputSchema),
				])
				.optional(),
		})
		.strict();

export default filesUpdateOneRequiredWithoutPromo_bannersNestedInputSchema;
