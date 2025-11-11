import { toActionResponse, toActionsList } from '../../schemas/dto/Action/action.mappers.js';
import { MODULE_TYPE } from '@prisma/client';
import type { ActionDefaultPrisma } from '../../prisma/includes/action';

describe('Action mappers', () => {
    it('parses a minimal action row into ActionResponse', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;

        const mockRow: ActionDefaultPrisma = {
            action_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            module: moduleValue,
            name: 'Test Action',
        } as ActionDefaultPrisma;

        const result = toActionResponse(mockRow);

        expect(result).toBeDefined();
        expect(result.action_id).toBe(mockRow.action_id);
        expect(result.module).toBe(mockRow.module);
        expect(result.name).toBe(mockRow.name);
    });

    it('parses a list of actions', () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;
        const rows: ActionDefaultPrisma[] = [
            { action_id: '1', module: moduleValue, name: 'A' } as ActionDefaultPrisma,
            { action_id: '2', module: moduleValue, name: 'B' } as ActionDefaultPrisma,
        ];

        const list = toActionsList(rows);
        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(2);
        expect(list[0].action_id).toBe('1');
    });
});
