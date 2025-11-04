// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { User } from '../users/User.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { Booking } from '../reservations/Booking.js';
import type { Review } from './Review.js';
import type { Driver } from '../drivers/Driver.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import { ReviewResponseSchema } from './Review';
import { UserResponseSchema } from '../users/User';
import { DriverResponseSchema } from '../drivers/Driver';
import { ReservationModuleResponseSchema } from '../reservations/ReservationModule';
import { BookingResponseSchema } from '../reservations/Booking';
import { TransportModuleResponseSchema } from '../transport/TransportModule';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';

extendZodWithOpenApi(z);

export type Reviewable = {
	reviewable_id: string;
	reviews: Review[];
	user: User[];
	driver: Driver[];
	reservation_module: ReservationModule[];
	reservation_booking: Booking[];
	transport_module: TransportModule[];
	stores_module: StoresModule[];
	food_drinks_module: FoodDrinksModule[];
};

export const CreateReviewableSchema = z
	.object({
		reviewable_id: z.string().uuid(),
	})
	.openapi('CreateReviewable');

export type CreateReviewableInput = z.infer<typeof CreateReviewableSchema>;

export const UpdateReviewableSchema = CreateReviewableSchema.partial().openapi('UpdateReviewable');
export type UpdateReviewableInput = z.infer<typeof UpdateReviewableSchema>;

export const ReviewableResponseSchema = z
	.object({
		reviewable_id: z.string(),
		reviews: z.array(ReviewResponseSchema),
		user: z.array(UserResponseSchema),
		driver: z.array(DriverResponseSchema),
		reservation_module: z.array(ReservationModuleResponseSchema),
		reservation_booking: z.array(BookingResponseSchema),
		transport_module: z.array(TransportModuleResponseSchema),
		stores_module: z.array(StoresModuleResponseSchema),
		food_drinks_module: z.array(FoodDrinksModuleResponseSchema),
	})
	.openapi('ReviewableResponse');

export type ReviewableResponse = z.infer<typeof ReviewableResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateReviewable', CreateReviewableSchema);
	registry.register('UpdateReviewable', UpdateReviewableSchema);
	registry.register('ReviewableResponse', ReviewableResponseSchema);
}
