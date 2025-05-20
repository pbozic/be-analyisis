import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUncheckedUpdateWithoutPromo_adsInput> =
	z
		.object({
			promo_banners_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			size: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			promo_section_buy_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			file_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export default promo_bannersUncheckedUpdateWithoutPromo_adsInputSchema;
