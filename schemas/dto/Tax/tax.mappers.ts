import { TaxRateRefSchema, TaxRateDetailSchema } from './tax.dto.js';
import type { TaxRateRef, TaxRateDetail } from './tax.dto.js';

type PrismaTaxRate = {
    tax_rates_id: string;
    name: string;
    description?: string | null;
    country?: string | null;
    rate: number;
    active: boolean;
    valid_from?: string | Date | null;
    created_at?: string | Date | null;
    updated_at?: string | Date | null;
    activated_at?: string | Date | null;
};

export function toTaxRateRef(row: unknown): TaxRateRef {
    const r = row as { tax_rates_id: string; name: string };
    return TaxRateRefSchema.parse({ tax_rates_id: r.tax_rates_id, label: r.name });
}

export function toTaxRateDetail(row: unknown): TaxRateDetail {
    const r = row as PrismaTaxRate;
    return TaxRateDetailSchema.parse({
        tax_rates_id: r.tax_rates_id,
        name: r.name,
        description: r.description ?? null,
        country: r.country ?? null,
        rate: r.rate,
        active: !!r.active,
        valid_from: r.valid_from ? new Date(r.valid_from as string | Date).toISOString() : undefined,
        created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
        updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
        activated_at: r.activated_at ? new Date(r.activated_at as string | Date).toISOString() : null,
    });
}

export default {
    toTaxRateRef,
    toTaxRateDetail,
};
