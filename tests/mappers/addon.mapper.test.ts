import { toAddonResponse, toAddonsList } from '../../schemas/dto/Addon/addon.mappers.js';
import { MODULE_TYPE } from '@prisma/client';
import type { AddonDefaultPrisma } from '../../prisma/includes/addon.js';

describe('Addon mappers', () => {
    it('parses a minimal addon row into AddonResponse', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;

        const mockRow: AddonDefaultPrisma = {
            addon_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            module: moduleValue,
            name: 'Test Addon',
            price_cents: 199,
            stripe_price_id: 'price_123',
            stripe_product_id: 'prod_123',
        } as AddonDefaultPrisma;

        const result = toAddonResponse(mockRow);

        expect(result).toBeDefined();
        expect(result.addon_id).toBe(mockRow.addon_id);
        expect(result.name).toBe(mockRow.name);
        expect(result.price_cents).toBe(mockRow.price_cents);
    });

    it('parses a list of addons', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;
        const rows: AddonDefaultPrisma[] = [
            {
                addon_id: '1',
                module: moduleValue,
                name: 'A',
                price_cents: 100,
                stripe_price_id: 'p1',
                stripe_product_id: 'pr1',
            } as AddonDefaultPrisma,
            {
                addon_id: '2',
                module: moduleValue,
                name: 'B',
                price_cents: 200,
                stripe_price_id: 'p2',
                stripe_product_id: 'pr2',
            } as AddonDefaultPrisma,
        ];

        const list = toAddonsList(rows);
        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(2);
        expect(list[0].addon_id).toBe('1');
    });
});
