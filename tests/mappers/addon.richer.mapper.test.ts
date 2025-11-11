import {
    toAddonWithActionsResponse,
    toAddonWithActionsAndUsagesResponse,
    toAddonFromBusinessAddon,
} from '../../schemas/dto/Addon/addon.mappers.js';
import { MODULE_TYPE } from '@prisma/client';
import type {
    AddonWithActionsPrisma,
    AddonWithActionsAndUsagesPrisma,
    BusinessAddonWithAddonPrisma,
} from '../../prisma/includes/addon.js';

describe('Addon richer mappers', () => {
    it('maps addon with nested action objects to AddonWithActionsResponse', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;

        const mockRow = {
            addon_id: 'addon-1',
            module: moduleValue,
            name: 'Addon One',
            price_cents: 500,
            stripe_price_id: 'price_1',
            stripe_product_id: 'prod_1',
            // Simulate join rows that include nested `action`
            actions: [
                { action: { action_id: 'a1', name: 'Action 1', module: moduleValue } },
            ],
            business_addons: [],
        } as AddonWithActionsPrisma;

        const dto = toAddonWithActionsResponse(mockRow);
        expect(dto).toBeDefined();
        expect(dto.addon_id).toBe('addon-1');
        expect(Array.isArray(dto.actions)).toBe(true);
        expect(dto.actions[0].action_id).toBe('a1');
        expect(dto.actions[0].name).toBe('Action 1');
    });

    it('maps addon with actions and usages (usages ignored at addon level)', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;

        const mockRow = {
            addon_id: 'addon-2',
            module: moduleValue,
            name: 'Addon Two',
            price_cents: 1000,
            stripe_price_id: 'price_2',
            stripe_product_id: 'prod_2',
            actions: [
                { action: { action_id: 'a2', name: 'Action 2', module: moduleValue } },
            ],
            business_addons: [
                {
                    usages: [{ business_usage_id: 'u1', action_id: 'a2', used: 3, reset_date: null, reservation_module_id: null }],
                    reservation_module: { reservation_module_id: 'rm1' },
                },
            ],
        } as AddonWithActionsAndUsagesPrisma;

        const dto = toAddonWithActionsAndUsagesResponse(mockRow);
        expect(dto).toBeDefined();
        expect(dto.addon_id).toBe('addon-2');
        expect(dto.actions.length).toBe(1);
    });

    it('maps a business_addon row that includes addon -> AddonWithActionsResponse', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;

        const mockBusinessAddon = {
            addon: {
                addon_id: 'addon-3',
                module: moduleValue,
                name: 'Addon Three',
                price_cents: 250,
                stripe_price_id: 'price_3',
                stripe_product_id: 'prod_3',
                actions: [{ action: { action_id: 'a3', name: 'Action 3', module: moduleValue } }],
            },
            reservation_module: { reservation_module_id: 'rm2' },
            usages: [],
        } as BusinessAddonWithAddonPrisma;

        const dto = toAddonFromBusinessAddon(mockBusinessAddon);
        expect(dto).toBeDefined();
        expect(dto.addon_id).toBe('addon-3');
        expect(dto.actions[0].action_id).toBe('a3');
    });
});
