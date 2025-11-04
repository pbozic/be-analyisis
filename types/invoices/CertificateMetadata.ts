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
