import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerRoleSchemas } from './role.dto.js';
import { registerSchemas as registerRoleValidatorSchemas } from './role.validators.js';
import { registerSchemas as registerPermissionSchemas } from './permission.dto.js';
import { registerSchemas as registerPermissionValidatorSchemas } from './permission.validators.js';
import { registerSchemas as registerRolePermissionSchemas } from './rolepermission.dto.js';
import { registerSchemas as registerRolePermissionValidatorSchemas } from './rolepermission.validators.js';
import { registerSchemas as registerUserPermissionSchemas } from './userpermission.dto.js';
import { registerSchemas as registerUserPermissionValidatorSchemas } from './userpermission.validators.js';
import { registerSchemas as registerUserRoleSchemas } from './userrole.dto.js';
import { registerSchemas as registerUserRoleValidatorSchemas } from './userrole.validators.js';

// === Role DTOs (Response) ===
export { RoleResponseBaseSchema, RoleResponseSchema, type RoleBase, type RoleResponse, type Role } from './role.dto.js';

// === Role Validators (Request Body, Query, Params) ===
export { CreateRoleSchema, UpdateRoleSchema, type CreateRoleInput, type UpdateRoleInput } from './role.validators.js';

// === Permission DTOs (Response) ===
export {
	PermissionResponseBaseSchema,
	PermissionResponseSchema,
	type PermissionBase,
	type PermissionResponse,
	type Permission,
} from './permission.dto.js';

// === Permission Validators (Request Body, Query, Params) ===
export {
	CreatePermissionSchema,
	UpdatePermissionSchema,
	type CreatePermissionInput,
	type UpdatePermissionInput,
} from './permission.validators.js';

// === RolePermission DTOs (Response) ===
export {
	RolePermissionResponseBaseSchema,
	RolePermissionResponseSchema,
	type RolePermissionBase,
	type RolePermissionResponse,
	type RolePermission,
} from './rolepermission.dto.js';

// === RolePermission Validators (Request Body, Query, Params) ===
export {
	GetRolePermissionsParamsSchema,
	CreateRolePermissionSchema,
	UpsertRolePermissionParamsSchema,
	DeleteRolePermissionParamsSchema,
	RolePermissionsMatrixBodySchema,
	type GetRolePermissionsParams,
	type CreateRolePermissionInput,
	type UpsertRolePermissionParams,
	type DeleteRolePermissionParams,
	type RolePermissionsMatrixBody,
} from './rolepermission.validators.js';

// === UserPermission DTOs (Response) ===
export {
	UserPermissionResponseBaseSchema,
	UserPermissionResponseSchema,
	type UserPermissionBase,
	type UserPermissionResponse,
	type UserPermission,
} from './userpermission.dto.js';

// === UserPermission Validators (Request Body, Query, Params) ===
export {
	CreateUserPermissionSchema,
	UpdateUserPermissionSchema,
	type CreateUserPermissionInput,
	type UpdateUserPermissionInput,
} from './userpermission.validators.js';

// === UserRole DTOs (Response) ===
export {
	UserRoleResponseBaseSchema,
	UserRoleResponseSchema,
	type UserRoleBase,
	type UserRoleResponse,
	type UserRole,
} from './userrole.dto.js';

// === UserRole Validators (Request Body, Query, Params) ===
export {
	CreateUserRoleSchema,
	UpdateUserRoleSchema,
	AssignUserRoleSchema,
	type CreateUserRoleInput,
	type UpdateUserRoleInput,
	type AssignUserRoleInput,
} from './userrole.validators.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerRoleSchemas(registry);
	registerRoleValidatorSchemas(registry);
	registerPermissionSchemas(registry);
	registerPermissionValidatorSchemas(registry);
	registerRolePermissionSchemas(registry);
	registerRolePermissionValidatorSchemas(registry);
	registerUserPermissionSchemas(registry);
	registerUserPermissionValidatorSchemas(registry);
	registerUserRoleSchemas(registry);
	registerUserRoleValidatorSchemas(registry);
}
