import { OrderLobbyResponseSchema } from './orderLobby.dto.js';
import type { OrderLobbyResponse } from './orderLobby.dto.js';
import { toOrderLobbyItemList } from './orderLobbyItem.mappers.js';
import { toOrderLobbyUserList } from './orderLobbyUser.mappers.js';

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

export function toOrderLobbyResponse(payload: unknown): OrderLobbyResponse {
	const p = payload as any;
	const obj: any = { ...p };
	if (p?.created_at) obj.created_at = toIso(p.created_at);
	if (p?.updated_at) obj.updated_at = toIso(p.updated_at);

	// Map nested arrays strictly using their mappers
	if (Array.isArray(p?.order_lobby_items)) {
		obj.order_lobby_items = toOrderLobbyItemList(p.order_lobby_items as unknown[]);
	}
	if (Array.isArray(p?.order_lobby_users)) {
		obj.order_lobby_users = toOrderLobbyUserList(p.order_lobby_users as unknown[]);
	}

	return OrderLobbyResponseSchema.parse(obj as unknown) as OrderLobbyResponse;
}

export function toOrderLobbyList(payload: unknown[]): OrderLobbyResponse[] {
	return payload.map(toOrderLobbyResponse);
}
