import { z } from 'zod';

export interface FoodDrinksOnlineBody {
	online: boolean;
}

export interface FoodDrinksOverwhelmedBody {
	overwhelmed: boolean;
}

export const FoodDrinksOnlineBodySchema = z.object({
	online: z.boolean(),
});

export const FoodDrinksOverwhelmedBodySchema = z.object({
	overwhelmed: z.boolean(),
});
