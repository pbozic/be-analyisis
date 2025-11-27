import { VEHICLE_CLASS, VEHICLE_CATEGORY } from '@prisma/client';

import {
	DriverRefOutSchema,
	DocumentRefSchema,
	VehicleRefSchema,
	VehicleDetailSchema,
	VehicleBaseSchema,
} from './vehicle.dto.js';
import type { DriverRefOut, DocumentRef, VehicleRef, VehicleDetail, VehicleBase } from './vehicle.dto.js';
import { BasicUserDataSchema } from '../User/user.js';

// Mappers from Prisma payloads to DTOs
export function toDriverRefOut(driver: unknown | null | undefined): DriverRefOut | null {
	if (!driver) return null;
	const d = driver as {
		driver_id: string;
		user?: {
			first_name?: string;
			last_name?: string;
			email?: string | null;
			telephone?: string | null;
			telephone_code?: string | null;
			date_of_birth?: string | null;
		};
	};
	const basicUser = BasicUserDataSchema.parse({
		first_name: d.user?.first_name ?? '',
		last_name: d.user?.last_name ?? '',
		email: d.user?.email ?? undefined,
		telephone: d.user?.telephone ?? undefined,
		telephone_code: d.user?.telephone_code ?? undefined,
		date_of_birth: d.user?.date_of_birth ?? undefined,
	});
	return DriverRefOutSchema.parse({ driver_id: d.driver_id, user: basicUser });
}

export function toDocumentRef(doc: unknown): DocumentRef {
	const d = doc as { document_id: string; document_type?: string; documents_type?: string };
	const label = d.document_type || d.documents_type || 'document';
	return DocumentRefSchema.parse({ document_id: d.document_id, label });
}

export function toVehicleRef(vehicle: unknown): VehicleRef {
	const v = vehicle as {
		vehicle_id: string;
		license_plate?: string | null;
		make?: string | null;
		model?: string | null;
	};
	const makeModel = [v.make, v.model].filter(Boolean).join(' ').trim();
	const label = v.license_plate || makeModel || v.vehicle_id;
	return VehicleRefSchema.parse({ vehicle_id: v.vehicle_id, label });
}

type PrismaVehicle = {
	vehicle_id: string;
	transport_module_id?: string | null;
	active?: boolean | null;
	class?: VEHICLE_CLASS | null;
	category?: VEHICLE_CATEGORY | null;
	make?: string | null;
	model?: string | null;
	color?: string | null;
	license_plate?: string | null;
	business_premise_id?: string | null;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	current_driver?: {
		driver_id: string;
		user?: { user_id: string; first_name?: string | null; last_name?: string | null };
	} | null;
	drivers?: Array<{
		driver?: {
			driver_id: string;
			user?: { user_id: string; first_name?: string | null; last_name?: string | null };
		};
	}>;
	documents?: Array<{ document_id: string; document_type?: string; documents_type?: string }>;
};

export function toVehicleBase(row: PrismaVehicle): VehicleBase {
	const v = row;
	return VehicleBaseSchema.parse({
		vehicle_id: v.vehicle_id as string,
		transport_module_id: v.transport_module_id ?? null,
		active: v.active ?? null,
		class: v.class as (typeof VehicleBaseSchema)['_type']['class'],
		category: v.category as (typeof VehicleBaseSchema)['_type']['category'],
		make: v.make ?? null,
		model: v.model ?? null,
		color: v.color ?? null,
		license_plate: v.license_plate ?? null,
		business_premise_id: v.business_premise_id ?? null,
		created_at: v.created_at ? new Date(v.created_at as string | Date).toISOString() : undefined,
		updated_at: v.updated_at ? new Date(v.updated_at as string | Date).toISOString() : undefined,
	});
}

export function toVehicleDetail(vehicle: unknown): VehicleDetail {
	const v = vehicle as PrismaVehicle;
	const currentDriver = v.current_driver ? toDriverRefOut(v.current_driver) : null;
	const driverRecords = Array.isArray(v.drivers) ? v.drivers : [];
	const drivers = driverRecords
		.map((vd) => vd?.driver)
		.filter(Boolean)
		.map((d) => toDriverRefOut(d)!) as DriverRefOut[];
	const documentRecords = Array.isArray(v.documents) ? v.documents : [];
	const documents = documentRecords.map((d) => toDocumentRef(d));
	return VehicleDetailSchema.parse({
		vehicle_id: v.vehicle_id,
		transport_module_id: v.transport_module_id ?? null,
		active: v.active ?? null,
		class: v.class ?? null,
		category: v.category ?? null,
		make: v.make ?? null,
		model: v.model ?? null,
		color: v.color ?? null,
		license_plate: v.license_plate ?? null,
		business_premise_id: v.business_premise_id ?? null,
		created_at: v.created_at ? new Date(v.created_at as string | Date).toISOString() : undefined,
		updated_at: v.updated_at ? new Date(v.updated_at as string | Date).toISOString() : undefined,
		current_driver: currentDriver,
		drivers,
		documents,
	});
}
