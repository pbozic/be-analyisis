import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { addressesCreateWithoutBusinessesInputSchema } from './addressesCreateWithoutBusinessesInputSchema';
import { addressesUncheckedCreateWithoutBusinessesInputSchema } from './addressesUncheckedCreateWithoutBusinessesInputSchema';
import { addressesCreateOrConnectWithoutBusinessesInputSchema } from './addressesCreateOrConnectWithoutBusinessesInputSchema';
import { addressesUpsertWithoutBusinessesInputSchema } from './addressesUpsertWithoutBusinessesInputSchema';
import { addressesWhereInputSchema } from './addressesWhereInputSchema';
import { addressesWhereUniqueInputSchema } from './addressesWhereUniqueInputSchema';
import { addressesUpdateToOneWithWhereWithoutBusinessesInputSchema } from './addressesUpdateToOneWithWhereWithoutBusinessesInputSchema';
import { addressesUpdateWithoutBusinessesInputSchema } from './addressesUpdateWithoutBusinessesInputSchema';
import { addressesUncheckedUpdateWithoutBusinessesInputSchema } from './addressesUncheckedUpdateWithoutBusinessesInputSchema';

export const addressesUpdateOneWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.addressesUpdateOneWithoutBusinessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => addressesCreateWithoutBusinessesInputSchema),
					z.lazy(() => addressesUncheckedCreateWithoutBusinessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => addressesCreateOrConnectWithoutBusinessesInputSchema).optional(),
			upsert: z.lazy(() => addressesUpsertWithoutBusinessesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => addressesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => addressesWhereInputSchema)]).optional(),
			connect: z.lazy(() => addressesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => addressesUpdateToOneWithWhereWithoutBusinessesInputSchema),
					z.lazy(() => addressesUpdateWithoutBusinessesInputSchema),
					z.lazy(() => addressesUncheckedUpdateWithoutBusinessesInputSchema),
				])
				.optional(),
		})
		.strict();

export default addressesUpdateOneWithoutBusinessesNestedInputSchema;
