import express from 'express';

import ScheduleController from '../../../controllers/reservation/ScheduleController';
import { validate } from '../../../middleware/zod';
import { CreateScheduleSchema, UpdateScheduleSchema } from '../../../types/reservation/Schedule';
const router = express.Router();

router.get('/', ScheduleController.getSchedule);
router.post('/', [validate(CreateScheduleSchema)], ScheduleController.createSchedule);
router.put('/:schedule_id', validate(UpdateScheduleSchema), ScheduleController.updateSchedule);
router.delete('/:schedule_id', ScheduleController.deleteSchedule);
router.get('/:schedule_id', ScheduleController.getScheduleById);

export default router;
