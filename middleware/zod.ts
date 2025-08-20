import { ZodSchema } from 'zod';
import { Request, Response, NextFunction, RequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate<T = any>(schema: ZodSchema<T>, source: 'body' | 'query' | 'params' = 'body'): RequestHandler {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			// console.log(`Validating ${source} with schema:`, req[source], schema);
			const result = await schema.safeParseAsync(req[source]);

			if (!result.success) {
				res.status(400).json({
					message: 'Validation failed',
					errors: result.error.flatten().fieldErrors,
				});
				return;
			}

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(req as any)[source] = result.data;
			next();
		} catch (err) {
			next(err);
		}
	};
}
