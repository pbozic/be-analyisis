import express from 'express';

import BusinessUsersController from '../../controllers/BusinessUsersController.js';
import { AddAddressSchema } from '../../schemas/dto/Business/business.validators.js';
import { validate } from '../../middleware/zod.js';
import {
	AcceptBusinessInvitationSchema,
	InviteBusinessUserSchema,
	UpdateAllowanceSchema,
	UpdateCompanyRoleSchema,
	UpdateOnlineStatusSchema,
} from '../../schemas/dto/BusinessUser/businessUser.validators.js';

const router = express.Router();
router.get('/', BusinessUsersController.getAllBusinessUsers);
router.get('/:user_id', BusinessUsersController.getBusinessUserByUserId);
router.get('/business/:business_id', BusinessUsersController.getBusinessUsersByBusinessId);
// router.get('/business/group_user/:business_id', BusinessUsersController.getBusinessGroupsByBusinessId);
router.get(
	'/business/:business_id/company-role/:company_role',
	BusinessUsersController.getAllBusinessUsersForBusinessByCompanyRole
);
router.post('/address/operating', validate(AddAddressSchema), BusinessUsersController.addOperatingAddress);
/**
 *    * @module finances
 *
 */
router.patch('/allowance', validate(UpdateAllowanceSchema), BusinessUsersController.setAllowance);
router.patch('/company-role', validate(UpdateCompanyRoleSchema), BusinessUsersController.updateCompanyRole);
router.patch('/online', validate(UpdateOnlineStatusSchema), BusinessUsersController.updateBusinessUserOnlineStatus);
router.delete('/:business_users_id', BusinessUsersController.removeBusinessUser);

router.post('/invite', validate(InviteBusinessUserSchema), BusinessUsersController.inviteBusinessUser);
router.post(
	'/accept-invitation',
	validate(AcceptBusinessInvitationSchema),
	BusinessUsersController.acceptBusinessInvitation
);

export default router;
