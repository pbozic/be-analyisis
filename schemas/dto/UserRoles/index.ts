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
export * from './role.dto.js';

// === Role Validators (Request Body, Query, Params) ===
export * from './role.validators.js';

// === Permission DTOs (Response) ===
export * from './permission.dto.js';

// === Permission Validators (Request Body, Query, Params) ===
export * from './permission.validators.js';

// === RolePermission DTOs (Response) ===
export * from './rolepermission.dto.js';

// === RolePermission Validators (Request Body, Query, Params) ===
export * from './rolepermission.validators.js';

// === UserPermission DTOs (Response) ===
export * from './userpermission.dto.js';

// === UserPermission Validators (Request Body, Query, Params) ===
export * from './userpermission.validators.js';

// === UserRole DTOs (Response) ===
export * from './userrole.dto.js';

// === UserRole Validators (Request Body, Query, Params) ===
export * from './userrole.validators.js';

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
