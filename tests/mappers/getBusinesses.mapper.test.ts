import { toGetBusinessResponse } from '../../schemas/dto/Business/business.mappers.js';

describe('toGetBusinessResponse mapper', () => {
	it('parses a minimal Prisma business row into BusinessResponseDto', () => {
		const mockRow: any = {
			business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			business_details: { name: 'Test Biz', description: 'A test business' },
			tax_id: 'HR123',
			registration_id: 'R-123',
			email: 'test@example.com',
			telephone: '+38520123456',
			telephone_code: '+385',
			website_url: 'https://example.com',
			working_hours: null,
			is_business_unit: false,
			business_group_name: null,
			parent_business_id: null,
			stripe_account_id: null,
			stripe_customer_id: null,
			word_buy_stripe_subscription_id: null,
			first_activated_at: null,
			active: false,
			sales_representative_id: null,
			address_id: null,
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			food_drinks_id: null,
			transport_module_id: null,
			reservation_module_id: null,
			stores_id: null,
		};

		const result = toGetBusinessResponse(mockRow as any);

		expect(result).toBeDefined();
		expect(result.business_id).toBe(mockRow.business_id);
		expect(result.business_details).toBeDefined();
		expect(result.business_details!.name).toBe(mockRow.business_details.name);
		expect(result.business_details!.description).toBe(mockRow.business_details.description);
		expect(result.email).toBe(mockRow.email);
	});
});
