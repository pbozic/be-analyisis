import { toBusinessAdminResponse } from '../../schemas/dto/Business/business.mappers.ts';

describe('Business mappers - admin', () => {
	test('toBusinessAdminResponse validates admin payload', () => {
		const mock = {
			business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			tax_id: 'TAX123',
			registration_id: 'REG123',
			email: 'admin@example.com',
			telephone: '+1000000000',
			website_url: null,
			stripe_account_id: null,
			stripe_customer_id: null,
			word_buy_stripe_subscription_id: null,
			sales_representative_id: null,
			address: null,
			business_users: [],
			child_businesses: [],
			parent_business: null,
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
		} as any;

		const dto = toBusinessAdminResponse(mock as any);
		expect(dto).toBeDefined();
		expect(dto.business_id).toBe(mock.business_id);
	});
});
