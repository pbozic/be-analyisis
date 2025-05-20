var express = require('express');
const router = express.Router();

const BusinessTeamsController = require('../../controllers/BusinessTeamController');

router.post('/create', BusinessTeamsController.createBusinessTeam);

router.get('/:business_id', BusinessTeamsController.getBusinessTeamsByBusinessId);
router.get('/:business_teams_id', BusinessTeamsController.getBusinessTeamById);

router.patch('/:business_teams_id', BusinessTeamsController.updateBusinessTeam);
router.patch('/:business_teams_id/limit', BusinessTeamsController.setBusinessTeamLimit);
router.patch('/:business_teams_id/name', BusinessTeamsController.setBusinessTeamName);
router.patch('/add_user', BusinessTeamsController.addUserToTeam);
router.patch('/remove_user', BusinessTeamsController.removeUserFromTeam);
router.patch('/move_user', BusinessTeamsController.moveUserToTeam);

router.delete('/:business_teams_id', BusinessTeamsController.deleteBusinessTeam);

module.exports = router;
