import { toBusinessSearchResponse } from '../../schemas/dto/Business/business.mappers.ts';

describe('Business mappers - search', () => {
	test('toBusinessSearchResponse parses select payload', () => {
		const mock = {
			business_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			name: 'Acme',
			description: 'Acme services',
			email: 'acme@example.com',
			telephone: '+1000000000',
			website_url: 'https://acme.example',
			active: true,
			popular: false,
			new: false,
			address: null,
		} as any;

		const dto = toBusinessSearchResponse(mock as any);
		expect(dto).toBeDefined();
		expect(dto.business_id).toBe(mock.business_id);
		expect(dto.name).toBe(mock.name);
	});
});
