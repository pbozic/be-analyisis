import { z } from 'zod';
import { flag_historyWithRelationsSchema } from './flag_historySchema';
import type { flag_historyWithRelations } from './flag_historySchema';

/////////////////////////////////////////
// FLAGS SCHEMA
/////////////////////////////////////////

export const flagsSchema = z.object({
	flag_id: z.string().uuid(),
	name: z.string(),
	status: z.boolean(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date(),
});

export type flags = z.infer<typeof flagsSchema>;

/////////////////////////////////////////
// FLAGS RELATION SCHEMA
/////////////////////////////////////////

export type flagsRelations = {
	history: flag_historyWithRelations[];
};

export type flagsWithRelations = z.infer<typeof flagsSchema> & flagsRelations;

export const flagsWithRelationsSchema: z.ZodType<flagsWithRelations> = flagsSchema.merge(
	z.object({
		history: z.lazy(() => flag_historyWithRelationsSchema).array(),
	})
);

export default flagsSchema;
