import { Request } from 'express';
export interface AuthUser {
	user_id: string;
	// add more fields as needed
}

export type ValidatedRequest<TBody = unknown, TParams = unknown, TQuery = unknown> = Request<
	TParams,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	any,
	TBody,
	TQuery
> & { user?: AuthUser; file?: Express.Multer.File };
