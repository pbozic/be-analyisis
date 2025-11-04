// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { DailyMealsModule } from './DailyMealsModule.js';
import type { Driver } from '../drivers/Driver.js';

export type DailyMealsDriver = {
	id: string;
	daily_meals_id: string;
	driver_id: string;
	created_at: string;
	updated_at: string;
	daily_meals_module: DailyMealsModule;
	driver: Driver;
};
