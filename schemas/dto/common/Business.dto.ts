import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import { Email, PhoneNumber } from '../../primitives.js';

extendZodWithOpenApi(z);

// === Business Ref (for relations) ===
export const BusinessRefSchema = z
	.object({
		business_id: z.string().uuid(),
		name: z.string().nullable().optional(),
		logo: z.string().url().nullable().optional(),
		banner: z.string().url().nullable().optional(),
	})
	.openapi({
		title: 'BusinessRef',
		description: 'Minimal business reference for embedding in relations',
	});
export type BusinessRef = z.infer<typeof BusinessRefSchema>;

// === Business Registration Data ===
export const BusinessRegistrationDataSchema = z
	.object({
		name: z.string().min(1),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string(),
		type: z.string(),
		tax_id: z.string().optional(),
		registration_id: z.string().optional(),
		working_hours: z.record(z.any()).optional(),
	})
	.openapi({
		title: 'BusinessRegistrationData',
		description: 'Core business registration data with contact and legal information',
	});

// === Vehicle Information ===
export const VehicleInformationSchema = z
	.object({
		class: z.string(),
		category: z.string(),
		make: z.string(),
		model: z.string(),
		color: z.string(),
		license_plate: z.string(),
		year: z.number().optional(),
		active: z.boolean().default(true),
	})
	.openapi({
		title: 'VehicleInformation',
		description: 'Complete vehicle information for registration',
	});

// === User Registration Data ===
export const UserRegistrationDataSchema = z
	.object({
		first_name: z.string().min(1),
		last_name: z.string().min(1),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string(),
		telephone_number: z.string().optional(),
		password: z.string().min(8),
		date_of_birth: z.string().datetime(),
		user_role: z.string(),
		user_roles: z
			.array(
				z.object({
					role: z.string(),
					primary: z.boolean(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'UserRegistrationData',
		description: 'Complete user registration data with roles',
	});

// === Document with Files ===
export const DocumentWithFilesSchema = z
	.object({
		documentData: z.object({
			document_type: z.string(),
			public: z.boolean().default(false),
		}),
		files: z.array(
			z.object({
				file_type: z.string(),
				mime_type: z.string(),
				base64: z.string(),
			})
		),
	})
	.openapi({
		title: 'DocumentWithFiles',
		description: 'Document data with associated files for registration',
	});

// === Driver Data ===
export const DriverDataSchema = z
	.object({
		online: z.boolean().default(false),
		working_hours: z.record(z.any()).optional(),
		ride_requirements: z.record(z.any()).optional(),
		transfer_requirements: z.record(z.any()).optional(),
		regions: z.array(z.string()).optional(),
		delivers_daily_meals: z.boolean().default(false),
	})
	.openapi({
		title: 'DriverData',
		description: 'Driver-specific data including availability, requirements, and service areas',
	});

// === Complete Driver Registration ===
export const DriverRegistrationSchema = z
	.object({
		user: z.object({
			data: UserRegistrationDataSchema,
			documents: z.array(DocumentWithFilesSchema).optional(),
			addresses: z.array(z.record(z.any())).optional(),
		}),
		driver: z.object({
			data: DriverDataSchema,
			regions: z.array(z.string()).optional(),
			documents: z.array(DocumentWithFilesSchema).optional(),
		}),
		vehicles: z
			.array(
				z.object({
					data: VehicleInformationSchema,
					documents: z.array(DocumentWithFilesSchema).optional(),
				})
			)
			.optional(),
	})
	.openapi({
		title: 'DriverRegistration',
		description: 'Complete driver registration including user, driver data, documents and optional vehicles',
	});

// === Vehicle Registration ===
export const VehicleRegistrationSchema = z
	.object({
		data: z.object({
			vehicle_information: VehicleInformationSchema,
			drivers: z.array(z.string()).optional(), // Array of driver emails
			documents: z.array(DocumentWithFilesSchema).optional(),
		}),
	})
	.openapi({
		title: 'VehicleRegistration',
		description: 'Vehicle registration with information, assigned drivers, and documents',
	});

// === Type exports ===
export type BusinessRegistrationData = z.infer<typeof BusinessRegistrationDataSchema>;
export type VehicleInformation = z.infer<typeof VehicleInformationSchema>;
export type UserRegistrationData = z.infer<typeof UserRegistrationDataSchema>;
export type DocumentWithFiles = z.infer<typeof DocumentWithFilesSchema>;
export type DriverData = z.infer<typeof DriverDataSchema>;
export type DriverRegistration = z.infer<typeof DriverRegistrationSchema>;
export type VehicleRegistration = z.infer<typeof VehicleRegistrationSchema>;

// === OpenAPI Registry ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('BusinessRegistrationData', BusinessRegistrationDataSchema);
	registry.register('VehicleInformation', VehicleInformationSchema);
	registry.register('UserRegistrationData', UserRegistrationDataSchema);
	registry.register('DocumentWithFiles', DocumentWithFilesSchema);
	registry.register('DriverData', DriverDataSchema);
	registry.register('DriverRegistration', DriverRegistrationSchema);
	registry.register('VehicleRegistration', VehicleRegistrationSchema);
}
