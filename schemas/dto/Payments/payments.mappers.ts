import { PaymentResponseSchema, PaymentListResponseSchema, PaymentSplitSchema } from './payments.dto.js';
import type { PaymentResponse, PaymentSplit } from './payments.dto.js';
import type { PaymentWithIncludesPrisma } from '../../../prisma/includes/payments.js';
import type { payment_splits } from '@prisma/client';
import type { PaymentSplitWithIncludesPrisma } from '../../../prisma/includes/paymentSplits.js';

function toIso(d: unknown): string | undefined | null {
    if (d === null) return null;
    if (d === undefined) return undefined;
    if (typeof d === 'string') return d;
    if (d instanceof Date) return d.toISOString();
    try {
        return (d as any)?.toISOString?.() ?? String(d);
    } catch {
        return String(d);
    }
}

export function toPaymentSplit(
    payload:
        | payment_splits
        | PaymentWithIncludesPrisma['payment_splits'][number]
        | PaymentSplitWithIncludesPrisma
        | null
        | undefined
): PaymentSplit {
    const p = payload as any;
    const out = {
        ...p,
        created_at: toIso(p?.created_at),
        updated_at: toIso(p?.updated_at),
    };
    return PaymentSplitSchema.parse(out) as PaymentSplit;
}

export function toPaymentResponse(payload: PaymentWithIncludesPrisma | null | undefined): PaymentResponse {
    const p = payload;
    const out = {
        ...p,
        created_at: toIso(p?.created_at),
        updated_at: toIso(p?.updated_at),
        payment_splits: Array.isArray(p?.payment_splits) ? p.payment_splits.map(toPaymentSplit) : undefined,
        daily_meal_subscription: p?.daily_meal_subscription ?? undefined,
    };
    return PaymentResponseSchema.parse(out) as PaymentResponse;
}

export function toPaymentList(payload: PaymentWithIncludesPrisma[]): PaymentResponse[] {
    return PaymentListResponseSchema.parse(
        payload.map((p) => toPaymentResponse(p))
    ) as PaymentResponse[];
}
