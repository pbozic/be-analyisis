import { BusinessWithDailyMealsResponseDto } from './business.dto.js';
import type { BusinessWithDailyMealsResponseDto as BusinessWithDailyMealsResponseType } from './business.dto.js';

// Mapper that validates businesses with daily meals module
export function parseBusinessWithDailyMeals(business: any): BusinessWithDailyMealsResponseType {
  // Build DTO shape expected by the schema
  const dto = {
    ...business,
    daily_meal_drivers: business?.daily_meals_module?.daily_meal_drivers ?? [],
  };
  return BusinessWithDailyMealsResponseDto.parse(dto);
}

// Re-export existing mappers for convenience
// Note: avoid re-exporting other modules here — keep mappers focused and import DTO helpers directly where needed.
