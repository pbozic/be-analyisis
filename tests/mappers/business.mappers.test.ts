import { parseBusinessWithDailyMeals } from '../../schemas/dto/Business/business.mappers.ts';

describe('Business mappers', () => {
	test('parseBusinessWithDailyMeals returns validated DTO', () => {
		const mockBusiness = {
			business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			name: 'Test Business',
			tax_id: 'TAX123',
			registration_id: 'REG123',
			email: 'test@example.com',
			telephone: '+1234567890',
			telephone_code: '+1',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			daily_meals_module: {
				daily_meal_drivers: ['driver1', 'driver2'],
			},
		};

		const dto = parseBusinessWithDailyMeals(mockBusiness as any);

		expect(dto).toBeDefined();
		expect(dto.business_id).toBe(mockBusiness.business_id);
		expect(dto.daily_meal_drivers).toBeDefined();
		expect(Array.isArray(dto.daily_meal_drivers)).toBe(true);
		expect(dto.daily_meal_drivers!.length).toBe(2);
	});
});
