import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FILE_TYPESchema } from './FILE_TYPESchema';
import { EnumFILE_TYPEFieldUpdateOperationsInputSchema } from './EnumFILE_TYPEFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { documentsUpdateOneWithoutFilesNestedInputSchema } from './documentsUpdateOneWithoutFilesNestedInputSchema';
import { promo_bannersUpdateManyWithoutFilesNestedInputSchema } from './promo_bannersUpdateManyWithoutFilesNestedInputSchema';

export const filesUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.filesUpdateWithoutCategoriesInput> = z
	.object({
		file_id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		url: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		file_type: z
			.union([z.lazy(() => FILE_TYPESchema), z.lazy(() => EnumFILE_TYPEFieldUpdateOperationsInputSchema)])
			.optional(),
		public: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
		mime_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		documents: z.lazy(() => documentsUpdateOneWithoutFilesNestedInputSchema).optional(),
		promo_banners: z.lazy(() => promo_bannersUpdateManyWithoutFilesNestedInputSchema).optional(),
	})
	.strict();

export default filesUpdateWithoutCategoriesInputSchema;
