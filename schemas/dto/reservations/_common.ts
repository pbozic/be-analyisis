import { z } from 'zod';

/** JSON value schema (recursive) */
export const JsonValueSchema: z.ZodType<unknown> = z.lazy(() =>
	z.union([z.string(), z.number(), z.boolean(), z.null(), z.array(JsonValueSchema), z.record(JsonValueSchema)])
);

/** Convenience object-shaped JSON */
export const JsonObjectSchema = z.record(JsonValueSchema);
