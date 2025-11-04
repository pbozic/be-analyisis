import { LOST_FOUND_STATUS } from '@prisma/client';

import type { File } from '../files/File.js';
import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type LostItem = {
	lost_item_id: string;
	user_id?: string | null;
	status: LOST_FOUND_STATUS;
	description: string;
	image_id?: string | null;
	image?: File | null;
	found?: boolean | null;
	created_at: Date;
	updated_at: Date;
	user?: User | null;
};
