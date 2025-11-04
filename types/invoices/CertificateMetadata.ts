import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type CertificateMetadata = {
	certificate_metadata_id: string;
	driver_id: string;
	subject_dn: string;
	serial_number: string;
	sha256_thumbprint: string;
	valid_from: Date;
	valid_to: Date;
	ca_chain_pinned?: string | null;
	created_at: Date;
	updated_at: Date;
};

export const CreateCertificateMetadataSchema = z
	.object({
		certificate_metadata_id: z.string().uuid(),
		driver_id: z.string().uuid(),
		subject_dn: z.string(),
		serial_number: z.string(),
		sha256_thumbprint: z.string(),
		valid_from: z.unknown(),
		valid_to: z.unknown(),
		ca_chain_pinned: z.string().nullable().optional(),
	})
	.openapi('CreateCertificateMetadata');

export type CreateCertificateMetadataInput = z.infer<typeof CreateCertificateMetadataSchema>;

export const UpdateCertificateMetadataSchema =
	CreateCertificateMetadataSchema.partial().openapi('UpdateCertificateMetadata');
export type UpdateCertificateMetadataInput = z.infer<typeof UpdateCertificateMetadataSchema>;

export const CertificateMetadataResponseSchema = z
	.object({
		certificate_metadata_id: z.string(),
		driver_id: z.string(),
		subject_dn: z.string(),
		serial_number: z.string(),
		sha256_thumbprint: z.string(),
		valid_from: z.string().datetime(),
		valid_to: z.string().datetime(),
		ca_chain_pinned: z.string().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
	})
	.openapi('CertificateMetadataResponse');

export type CertificateMetadataResponse = z.infer<typeof CertificateMetadataResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateCertificateMetadata', CreateCertificateMetadataSchema);
	registry.register('UpdateCertificateMetadata', UpdateCertificateMetadataSchema);
	registry.register('CertificateMetadataResponse', CertificateMetadataResponseSchema);
}
