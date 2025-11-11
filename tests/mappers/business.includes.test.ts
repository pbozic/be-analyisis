import { toBusinessWithIncludesResponse } from '../../schemas/dto/Business/business.mappers.ts';

describe('Business mappers - includes', () => {
	test('toBusinessWithIncludesResponse parses payload with address and users', () => {
		const mock = {
			business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			tax_id: 'TAX123',
			registration_id: 'REG123',
			email: 'info@example.com',
			telephone: '+1000000000',
			telephone_code: '+1',
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			address: { address_id: 'a1', line1: 'Street 1' },
			delivery_address: null,
			business_users: [{ users: { user_id: 'u1', email: 'u1@example.com' } }],
			parent_business: null,
			child_businesses: [],
		} as any;

		const dto = toBusinessWithIncludesResponse(mock as any);
		expect(dto).toBeDefined();
		expect(dto.business_id).toBe(mock.business_id);
		expect(dto.address).toBeDefined();
		expect(Array.isArray(dto.business_users)).toBe(true);
	});
});
