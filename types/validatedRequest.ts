import { Request } from 'express';

export type ValidatedRequest<TBody = unknown, TParams = unknown, TQuery = unknown> = Request<
	TParams,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	TBody,
	TQuery
>;
