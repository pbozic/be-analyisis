import * as express from 'express';

import BusinessUsersController from '../../controllers/BusinessUsersController.js';
const router = express.Router();
router.get('/', BusinessUsersController.getAllBusinessUsers);
router.get('/:user_id', BusinessUsersController.getBusinessUserByUserId);
router.get('/business/:business_id', BusinessUsersController.getBusinessUsersByBusinessId);
router.get('/type/:type', BusinessUsersController.getBusinessUsersByBusinessType);
router.get('/business/group_user/:business_id', BusinessUsersController.getBusinessGroupsByBusinessId);
router.get(
	'/business/:business_id/company-role/:company_role',
	BusinessUsersController.getAllBusinessUsersForBusinessByCompanyRole
);
router.post('/', BusinessUsersController.createBusinessUser);
router.post('/address/operating', BusinessUsersController.addOperatingAddress);
router.patch('/allowance', BusinessUsersController.setAllowance);
router.patch('/company-role', BusinessUsersController.updateCompanyRole);
router.patch('/online', BusinessUsersController.updateBusinessUserOnlineStatus);
router.delete('/:business_users_id', BusinessUsersController.removeBusinessUser);
export default router;
