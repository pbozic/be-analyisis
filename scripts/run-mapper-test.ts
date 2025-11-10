import { parseBusinessWithDailyMeals } from '../schemas/dto/Business/business.mappers.ts';

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

try {
	const dto = parseBusinessWithDailyMeals(mockBusiness as any);
	console.log('Mapper output OK:', JSON.stringify(dto, null, 2));
	process.exit(0);
} catch (err: any) {
	console.error('Mapper threw:', err && err.message ? err.message : err);
	process.exit(2);
}
