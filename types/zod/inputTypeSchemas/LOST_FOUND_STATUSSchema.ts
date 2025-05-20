import { z } from 'zod';

export const LOST_FOUND_STATUSSchema = z.enum(['REPORTED', 'RESOLVED']);

export type LOST_FOUND_STATUSType = `${z.infer<typeof LOST_FOUND_STATUSSchema>}`;

export default LOST_FOUND_STATUSSchema;
