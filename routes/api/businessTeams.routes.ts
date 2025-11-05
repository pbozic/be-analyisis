import express from 'express';

import BusinessTeamsController from '../../controllers/BusinessTeamController.js';
import {
	AddUserToTeamSchema,
	CreateBusinessTeamSchema,
	EditBusinessTeamUsersSchema,
	MoveUserToTeamSchema,
	RemoveUserFromTeamSchema,
	SetBusinessTeamLimitSchema,
	SetBusinessTeamNameSchema,
	UpdateBusinessTeamSchema,
} from '../../schemas/validation/Business/BusinessTeam.validation.js';
import { validate } from '../../middleware/zod.js';
const router = express.Router();
router.post('/create', validate(CreateBusinessTeamSchema), BusinessTeamsController.createBusinessTeam);
router.post(
	'/users/:business_teams_id',
	validate(EditBusinessTeamUsersSchema),
	BusinessTeamsController.editBusinessTeamUsers
);
router.get('/:business_id', BusinessTeamsController.getBusinessTeamsByBusinessId);
router.get('/:business_teams_id', BusinessTeamsController.getBusinessTeamById);
router.patch('/:business_teams_id', validate(UpdateBusinessTeamSchema), BusinessTeamsController.updateBusinessTeam);
router.patch(
	'/:business_teams_id/limit',
	validate(SetBusinessTeamLimitSchema),
	BusinessTeamsController.setBusinessTeamLimit
);
router.patch(
	'/:business_teams_id/name',
	validate(SetBusinessTeamNameSchema),
	BusinessTeamsController.setBusinessTeamName
);
router.patch('/add_user', validate(AddUserToTeamSchema), BusinessTeamsController.addUserToTeam);
router.patch('/remove_user', validate(RemoveUserFromTeamSchema), BusinessTeamsController.removeUserFromTeam);
router.patch('/move_user', validate(MoveUserToTeamSchema), BusinessTeamsController.moveUserToTeam);
router.delete('/:business_teams_id', BusinessTeamsController.deleteBusinessTeam);
export default router;
