import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

import { UUID } from '../../primitives.js';

extendZodWithOpenApi(z);

// Create GroupUser Request Schema
export const CreateGroupUserRequestSchema = z
	.object({
		parent_user_id: UUID,
		child_user_id: UUID,
	})
	.openapi({
		title: 'CreateGroupUserRequest',
		description: 'Request body for creating a group user relationship between parent and child',
	});

export type CreateGroupUserRequest = z.infer<typeof CreateGroupUserRequestSchema>;

// Update GroupUser Enabled Request Schema
export const UpdateGroupUserEnabledRequestSchema = z
	.object({
		group_user_id: UUID,
		enabled: z.boolean(),
	})
	.openapi({
		title: 'UpdateGroupUserEnabledRequest',
		description: 'Request body for updating group user enabled status',
	});

export type UpdateGroupUserEnabledRequest = z.infer<typeof UpdateGroupUserEnabledRequestSchema>;

// Update GroupUser Allowance Request Schema
export const UpdateGroupUserAllowanceRequestSchema = z
	.object({
		group_user_id: UUID,
		value: z.number().nonnegative(),
		type: z.enum(['TAXI', 'TRANSFER', 'DELIVERY', 'ANY']),
	})
	.openapi({
		title: 'UpdateGroupUserAllowanceRequest',
		description: 'Request body for updating group user allowance for specific service type',
	});

export type UpdateGroupUserAllowanceRequest = z.infer<typeof UpdateGroupUserAllowanceRequestSchema>;
