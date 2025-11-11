import prisma from '../../prisma/prisma.js';
import * as ActionsDao from '../../dao/Actions.js';
import { MODULE_TYPE } from '@prisma/client';

jest.mock('../../prisma/prisma.js', () => ({
    action: {
        findUnique: jest.fn(),
    },
}));

describe('Actions DAO - getActionById', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('returns mapped ActionResponse when action exists', async () => {
        const moduleValue = Object.values(MODULE_TYPE)[0] as MODULE_TYPE;
        const mockRow = {
            action_id: 'abc-123',
            module: moduleValue,
            name: 'Test Action',
        };

        // @ts-ignore - mocked implementation
        prisma.action.findUnique.mockResolvedValue(mockRow);

        const res = await ActionsDao.getActionById('abc-123');
        expect(res).not.toBeNull();
        expect(res?.action_id).toBe(mockRow.action_id);
        expect(res?.name).toBe(mockRow.name);
    });

    it('returns null when action not found', async () => {
        // @ts-ignore - mocked implementation
        prisma.action.findUnique.mockResolvedValue(null);

        const res = await ActionsDao.getActionById('does-not-exist');
        expect(res).toBeNull();
    });
});
