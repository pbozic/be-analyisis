import { z } from 'zod';

export interface StoreOnlineBody {
	online: boolean;
}

export interface StoreOverwhelmedBody {
	overwhelmed: boolean;
}

export const StoreOnlineBodySchema = z.object({
	online: z.boolean(),
});

export const StoreOverwhelmedBodySchema = z.object({
	overwhelmed: z.boolean(),
});
