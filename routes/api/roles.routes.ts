import express from 'express';

import PermissionController from '../../controllers/roles/UserPermissionController';
import RoleController from '../../controllers/roles/RolesController';
import UserRoleController from '../../controllers/roles/UserRolesController';
import { validate } from '../../middleware/zod';
import { CreateUserPermissionSchema, UpdateUserPermissionSchema } from '../../types/userRoles/UserPermission';
import { CreateRoleSchema, UpdateRoleSchema } from '../../types/userRoles/Role';
import { CreateUserRoleSchema } from '../../types/userRoles/UserRole';

const router = express.Router();

// ----- USER PERMISSIONS -----
router.get('/user-permissions', PermissionController.getUserPermissions);
router.post('/user-permissions', validate(CreateUserPermissionSchema), PermissionController.createUserPermission);
router.put(
	'/user-permissions/:user_permission_id',
	validate(UpdateUserPermissionSchema),
	PermissionController.updateUserPermission
);
router.delete('/user-permissions/:user_permission_id', PermissionController.deleteUserPermission);

// ----- ALL PERMISSIONS (STATIC SETUP) -----
router.get('/permissions', PermissionController.getAllPermissions);

// ----- ROLES -----
router.get('/roles', RoleController.getRoles);
router.post('/roles', validate(CreateRoleSchema), RoleController.createRole);
router.put('/roles/:role_id', validate(UpdateRoleSchema), RoleController.updateRole);
router.delete('/roles/:role_id', RoleController.deleteRole);

// ----- USER ROLES -----
router.get('/user-roles', UserRoleController.getUserRoles);
router.post('/user-roles', validate(CreateUserRoleSchema), UserRoleController.assignUserRole);
router.delete('/user-roles', validate(CreateUserRoleSchema), UserRoleController.removeUserRole);

export default router;
