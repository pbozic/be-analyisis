import prisma from '../../prisma/prisma.js';
import * as AddonDao from '../../dao/Addon.js';
import type { AddonDefaultPrisma } from '../../prisma/includes/addon.js';

jest.mock('../../prisma/prisma.js', () => ({
    __esModule: true,
    default: {
        addon: {
            findUnique: jest.fn(),
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        business_addon: {
            findMany: jest.fn(),
        },
    },
}));

const mockedPrisma = prisma as {
    addon: Record<string, jest.Mock>;
    business_addon: Record<string, jest.Mock>;
};

describe('Addon DAO', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('getAddonById returns mapped DTO when row exists', async () => {
        const mockRow: AddonDefaultPrisma = {
            addon_id: 'a1',
            module: Object.values(require('@prisma/client').MODULE_TYPE)[0],
            name: 'Test Addon',
            price_cents: 100,
            stripe_price_id: 'p_1',
            stripe_product_id: 'prod_1',
        } as AddonDefaultPrisma;

        mockedPrisma.addon.findUnique.mockResolvedValue(mockRow);

        const result = await AddonDao.getAddonById('a1');
        expect(result).toBeDefined();
        expect(result?.addon_id).toBe('a1');
        expect(mockedPrisma.addon.findUnique).toHaveBeenCalledTimes(1);
    });

    it('getAddonWithActionsById returns mapped DTO when actions included', async () => {
        const moduleValue = Object.values(require('@prisma/client').MODULE_TYPE)[0];
        const mockRow = {
            addon_id: 'a2',
            module: moduleValue,
            name: 'Addon With Actions',
            price_cents: 200,
            stripe_price_id: 'p_2',
            stripe_product_id: 'prod_2',
            actions: [{ action: { action_id: 'act1', name: 'Act 1', module: moduleValue } }],
            business_addons: [],
        };

        mockedPrisma.addon.findUnique.mockResolvedValue(mockRow);

        const result = await AddonDao.getAddonWithActionsById('a2');
        expect(result).toBeDefined();
        expect(result?.addon_id).toBe('a2');
        expect(Array.isArray(result?.actions)).toBe(true);
    });

    it('getAddonsByBusinessIdWithActions maps business_addon rows to addon DTOs', async () => {
        const moduleValue = Object.values(require('@prisma/client').MODULE_TYPE)[0];
        const mockRows = [
            {
                addon: {
                    addon_id: 'a3',
                    module: moduleValue,
                    name: 'Business Addon',
                    price_cents: 300,
                    stripe_price_id: 'p_3',
                    stripe_product_id: 'prod_3',
                    actions: [{ action: { action_id: 'act2', name: 'Act 2', module: moduleValue } }],
                },
                reservation_module: { reservation_module_id: 'rm1' },
            },
        ];

        mockedPrisma.business_addon.findMany.mockResolvedValue(mockRows);

        const list = await AddonDao.getAddonsByBusinessIdWithActions('b1');
        expect(Array.isArray(list)).toBe(true);
        expect(list[0].addon_id).toBe('a3');
    });

    it('createAddon maps created row to DTO', async () => {
        const moduleValue = Object.values(require('@prisma/client').MODULE_TYPE)[0];
        const created = {
            addon_id: 'a4',
            module: moduleValue,
            name: 'New Addon',
            price_cents: 400,
            stripe_price_id: 'p_4',
            stripe_product_id: 'prod_4',
        };

        mockedPrisma.addon.create.mockResolvedValue(created);

        const result = await AddonDao.createAddon({ module: moduleValue, name: 'New Addon', price_cents: 400, stripe_price_id: 'p_4' });
        expect(result).toBeDefined();
        expect(result.addon_id).toBe('a4');
    });

    it('updateAddon maps updated row to DTO', async () => {
        const moduleValue = Object.values(require('@prisma/client').MODULE_TYPE)[0];
        const updated = {
            addon_id: 'a5',
            module: moduleValue,
            name: 'Updated Addon',
            price_cents: 500,
            stripe_price_id: 'p_5',
            stripe_product_id: 'prod_5',
        };

        mockedPrisma.addon.update.mockResolvedValue(updated);

        const result = await AddonDao.updateAddon('a5', { module: moduleValue, name: 'Updated Addon', price_cents: 500, stripe_price_id: 'p_5' });
        expect(result).toBeDefined();
        expect(result.addon_id).toBe('a5');
    });
});
