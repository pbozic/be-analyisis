import express, { Router } from 'express';

import PermissionController from '../../controllers/roles/UserPermissionController';
import RoleController from '../../controllers/roles/RolesController';
import UserRoleController from '../../controllers/roles/UserRolesController';
import { validate } from '../../middleware/zod';
import { CreateUserPermissionSchema, UpdateUserPermissionSchema } from '../../types/userRoles/UserPermission';
import { CreateRoleSchema, UpdateRoleSchema } from '../../types/userRoles/Role';
import { CreateUserRoleSchema } from '../../types/userRoles/UserRole';
import RolePermissionController from '../../controllers/roles/RolePermissionController';
import {
	GetRolePermissionsParamsSchema,
	UpsertRolePermissionParamsSchema,
	DeleteRolePermissionParamsSchema,
	RolePermissionsMatrixBodySchema,
} from '../../types/userRoles/RolePermission';

const router: Router = express.Router();

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

// ----- ROLE PERMISSIONS (nested RESTful) -----
router.get(
	'/roles/:role_id/permissions',
	validate(GetRolePermissionsParamsSchema, 'params'),
	RolePermissionController.getRolePermissionsForRoleId
);
// Assign permission to role (idempotent)
router.put(
	'/roles/:role_id/permissions/:permission_id',
	validate(UpsertRolePermissionParamsSchema, 'params'),
	RolePermissionController.upsertRolePermission
);
// Remove assignment
router.delete(
	'/roles/:role_id/permissions/:permission_id',
	validate(DeleteRolePermissionParamsSchema, 'params'),
	RolePermissionController.deleteRolePermission
);
// Bulk fetch role-permissions by role_ids
router.post(
	'/roles/permissions/matrix',
	validate(RolePermissionsMatrixBodySchema),
	RolePermissionController.getRolePermissionsMatrix
);

// ----- USER ROLES -----
router.get('/user-roles', UserRoleController.getUserRoles);
router.post('/user-roles', validate(CreateUserRoleSchema), UserRoleController.assignUserRole);
router.delete('/user-roles/:user_id/roles/:role_id', UserRoleController.removeUserRole);

export default router;
