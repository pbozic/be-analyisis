// src/types/fiscal.ts

// ───────────────────────────────────────────────────────────────────────────────
// Prisma model type aliases (internal domain types)
// We import generated interfaces and re-export clean app-level names.
// ───────────────────────────────────────────────────────────────────────────────
import type {
	business_premise as PrismaBusinessPremise,
	electronic_device as PrismaElectronicDevice,
	device_assignment as PrismaDeviceAssignment,
	invoice as PrismaInvoice,
	invoice_item as PrismaInvoiceItem,
	invoice_tax as PrismaInvoiceTax,
	certificate_metadata as PrismaCertificateMetadata,
	submission_log as PrismaSubmissionLog,
	furs_job as PrismaFursJob,
	NUMBERING_STRUCTURE as PrismaNUMBERING_STRUCTURE,
	PREMISE_TYPE as PrismaPREMISE_TYPE,
	FURS_JOB_TYPE as PrismaFURS_JOB_TYPE,
	FURS_JOB_STATUS as PrismaFURS_JOB_STATUS,
} from '../prisma/schemas/interfaces';

// Domain aliases (clean names app-wide)
export type BusinessPremise = PrismaBusinessPremise;
export type ElectronicDevice = PrismaElectronicDevice;
export type DeviceAssignment = PrismaDeviceAssignment;
export type Invoice = PrismaInvoice;
export type InvoiceItem = PrismaInvoiceItem;
export type InvoiceTax = PrismaInvoiceTax;
export type CertificateMetadata = PrismaCertificateMetadata;
export type SubmissionLog = PrismaSubmissionLog;
export type FursJob = PrismaFursJob;

// Re-export Prisma enums so callers can import them from one place.
export {
	PrismaNUMBERING_STRUCTURE as NUMBERING_STRUCTURE,
	PrismaPREMISE_TYPE as PREMISE_TYPE,
	PrismaFURS_JOB_TYPE as FURS_JOB_TYPE,
	PrismaFURS_JOB_STATUS as FURS_JOB_STATUS,
};

// ───────────────────────────────────────────────────────────────────────────────
// Shared utility types
// ───────────────────────────────────────────────────────────────────────────────

export type UUID = string;

// Safer money/decimal input type (what you accept at the edge)
export type Decimalish = string | number; // we’ll coerce to Prisma.Decimal server-side

// ISO timestamps used in APIs
export type ISODate = string; // "2025-09-09"
export type ISODateTime = string; // "2025-09-09T11:30:00Z"

// Local invoice issue time used in ZOI concat (exact string)
export type LocalIssueDateTime = string; // "dd.MM.yyyy HH:mm:ss"

// ───────────────────────────────────────────────────────────────────────────────
// INPUT DTOs — only for things we POST to the backend
// (Create/Submit flows from Web or Mobile)
// ───────────────────────────────────────────────────────────────────────────────

// BUSINESS
export type CreateBusinessInput = {
	name: string;
	tax_number: string; // 8 digits
};

// VEHICLE (created on web)
export type CreateVehicleInput = {
	business_id: UUID;
	license_plate: string;
	vin?: string | null;
	// We bind each vehicle 1:1 to a BusinessPremise ID (pre-chosen)
	business_premise_id: string; // <= 20 alnum
};

// BUSINESS PREMISE (FURS registration target)
export type CreateBusinessPremiseInput = {
	business_id: UUID;
	business_premise_id: string; // <= 20 alnum
	premise_type: PrismaPREMISE_TYPE; // taxis = "A"
	name?: string | null;
	validity_date?: ISODate | null; // when registration becomes valid
	special_notes?: string | null;
};

// ELECTRONIC DEVICE (internal only, not registered at FURS)
export type CreateElectronicDeviceInput = {
	business_premise_id: string;
	electronic_device_id: string; // <= 20 alnum
	name?: string | null;
	active?: boolean;
};

// DEVICE ASSIGNMENT (who uses what device, when)
export type CreateDeviceAssignmentInput = {
	driver_id: UUID;
	business_premise_id: string;
	electronic_device_id: string;
	valid_from: ISODateTime;
	valid_to?: ISODateTime | null;
};

// INVOICE CREATE (from mobile -> BE BEFORE submit to FURS)
// We store invoice + items + per-rate taxes + ZOI; BE will forward the signed token to FURS.
export type CreateInvoiceItemInput = {
	description: string;
	qty: Decimalish;
	unit?: string | null;
	unit_price: Decimalish;
	tax_rate: Decimalish; // e.g. "22.00"
	line_total: Decimalish; // keep consistent (incl/excl VAT based on your convention)
};

export type CreateInvoiceTaxInput = {
	tax_rate: Decimalish;
	taxable_amount: Decimalish;
	tax_amount: Decimalish;

	other_taxes_amount?: Decimalish | null;
	exempt_taxable_amount?: Decimalish | null;
	reverse_vat_taxable_amount?: Decimalish | null;
	nontaxable_amount?: Decimalish | null;
	special_tax_rules_amount?: Decimalish | null;
};

export type CreateInvoiceInput = {
	// who/where
	driver_id: UUID;
	business_id?: UUID | null;
	vehicle_id?: UUID | null;
	tax_number: string; // issuer TIN

	// identifiers
	numbering_structure: PrismaNUMBERING_STRUCTURE;
	business_premise_id: string;
	electronic_device_id: string;
	invoice_number: string; // numeric string

	// timing
	issue_datetime: ISODateTime; // UTC stored
	issue_datetime_local?: LocalIssueDateTime | null; // exact string used for ZOI

	// totals
	invoice_amount: Decimalish;
	returns_amount?: Decimalish | null;
	payment_amount: Decimalish;

	// fiscal
	zoi: string; // 32 hex
	operator_tax_number?: string | null;
	foreign_operator?: boolean | null;
	is_subsequent_submit?: boolean;

	// nested
	items: CreateInvoiceItemInput[];
	taxes: CreateInvoiceTaxInput[];

	// (optional) raw payloads for audit before send
	furs_request_json?: unknown;
};

// SUBMISSION LOG (usually BE-internal; rarely posted from clients)
export type CreateSubmissionLogInput = {
	invoice_id: UUID;
	message_id: string;
	sent_at?: ISODateTime;
	http_status?: number | null;
	transport?: 'XML' | 'JSON' | null;
	tls_version?: string | null;
	mtls_cn?: string | null;
	eor?: string | null;
	error_code?: string | null;
	error_message?: string | null;
	request_payload?: unknown;
	response_payload?: unknown;
};

// FURS JOBS (generic job tracking for BusinessPremise/Invoice/Echo)
export type CreateFursJobInput = {
	type: PrismaFURS_JOB_TYPE;
	status?: PrismaFURS_JOB_STATUS;
	business_id?: UUID | null;
	business_premise_id?: string | null;
	invoice_id?: UUID | null;
	driver_id?: UUID | null;

	request_url?: string | null;
	message_id: string;

	request_payload?: unknown; // decoded JSON
	request_token?: string | null; // compact JWS
};

// SUBMIT TOKENS (mobile → BE forwarders)
export type SubmitBusinessPremiseTokenInput = {
	driver_id: UUID;
	business_id: UUID;
	business_premise_id: string;
	message_id: string;
	token: string; // compact JWS
	// optional echo of decoded payload for DB convenience
	decoded_payload?: BusinessPremiseRequest | unknown;
};

export type SubmitInvoiceTokenInput = {
	driver_id: UUID;
	invoice_id: UUID;
	message_id: string;
	token: string; // compact JWS for InvoiceRequest
	// optional decoded payload for DB convenience
	decoded_payload?: unknown;
};

// ───────────────────────────────────────────────────────────────────────────────
// FURS JSON/JWS types (business premise; invoice types can be added next step)
// ───────────────────────────────────────────────────────────────────────────────

// JWS header used by FURS JSON API (always RS256)
export type JwsHeader = {
	alg: 'RS256';
	subject_name: string; // from cert
	issuer_name: string; // from cert
	serial: string; // cert serial as string (do not use number to avoid overflow)
	cty?: 'application/json';
	typ?: 'JOSE';
};

export type FursTokenEnvelope = { token: string };

// Business Premise JSON payload (wrapped in JWS)
export type BusinessPremiseHeader = {
	MessageID: string; // GUID/UUID
	DateTime: ISODateTime; // ISO 8601
};

export type RealEstatePremise = {
	PropertyID: {
		CadastralNumber: number;
		BuildingNumber: number;
		BuildingSectionNumber: number;
	};
	Address: {
		Street: string;
		HouseNumber: string;
		HouseNumberAdditional?: string;
		Community: string;
		City: string;
		PostalCode: string; // "####"
	};
};

export type BusinessPremiseBody = {
	TaxNumber: number; // 8 digits
	BusinessPremiseID: string; // 1..20 alnum
	BPIdentifier: {
		// Either real estate OR movable premise indicator (for taxis use PremiseType: "A")
		RealEstateBP?: RealEstatePremise;
		PremiseType?: 'A' | 'B' | 'C';
	};
	ValidityDate: ISODate; // "YYYY-MM-DD"
	SoftwareSupplier?: Array<{ TaxNumber?: number; NameForeign?: string }>;
	SpecialNotes?: string;
};

export type BusinessPremiseRequest = {
	BusinessPremiseRequest: {
		Header: BusinessPremiseHeader;
		BusinessPremise: BusinessPremiseBody;
	};
};

export type BusinessPremiseResponse =
	| { BusinessPremiseResponse: { Header: BusinessPremiseHeader } }
	| {
			BusinessPremiseResponse: {
				Header: BusinessPremiseHeader;
				Error: { ErrorCode: string; ErrorMessage: string };
			};
	  };

// ───────────────────────────────────────────────────────────────────────────────
// Convenience: signer interface (mobile native bridge) for RS256 JWS
// ───────────────────────────────────────────────────────────────────────────────
export type Rs256SignFn = (data: Uint8Array) => Promise<Uint8Array>; // RSASSA-PKCS1-v1_5 SHA-256
