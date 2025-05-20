import { z } from 'zod';

export const SCORING_POINTS_REASONSchema = z.enum([
	'IGNORED',
	'REJECTED',
	'CANCELED',
	'AUTO_REJECTED',
	'LATE',
	'LARGE_DELAY',
	'INSUFFICIENT_DATA',
]);

export type SCORING_POINTS_REASONType = `${z.infer<typeof SCORING_POINTS_REASONSchema>}`;

export default SCORING_POINTS_REASONSchema;
