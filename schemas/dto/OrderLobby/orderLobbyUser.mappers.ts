import { OrderLobbyUserResponseSchema } from './orderLobbyUser.dto.js';
import type { OrderLobbyUserResponse } from './orderLobbyUser.dto.js';

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

export function toOrderLobbyUserResponse(payload: unknown): OrderLobbyUserResponse {
    const p = payload as any;
    const obj = {
        ...p,
        created_at: toIso(p?.created_at),
        updated_at: toIso(p?.updated_at),
        users: p?.users ? { user_id: p.users.user_id, first_name: p.users.first_name, last_name: p.users.last_name } : undefined,
    };

    return OrderLobbyUserResponseSchema.parse(obj as unknown) as OrderLobbyUserResponse;
}

export function toOrderLobbyUserList(payload: unknown[]): OrderLobbyUserResponse[] {
    return payload.map(toOrderLobbyUserResponse);
}
