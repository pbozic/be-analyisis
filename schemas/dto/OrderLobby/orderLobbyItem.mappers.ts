import { OrderLobbyItemResponseSchema } from './orderLobbyItem.dto.js';
import type { OrderLobbyItemResponse } from './orderLobbyItem.dto.js';

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

export function toOrderLobbyItemResponse(payload: unknown): OrderLobbyItemResponse {
	const p = payload as any;
	const obj = {
		...p,
		created_at: toIso(p?.created_at),
		updated_at: toIso(p?.updated_at),
		user: p?.user
			? {
					user_id: p.user.user_id,
					first_name: p.user.first_name ?? null,
					last_name: p.user.last_name ?? null,
					email: p.user.email ?? null,
					telephone: p.user.telephone,
					user_role: p.user.user_role,
				}
			: undefined,
		menu_item: p?.menu_item
			? {
					menu_item_id: p.menu_item.menu_item_id ?? p.menu_item_id,
					name: p.menu_item.name ?? p.menu_item_name,
					price_cents: p.menu_item.price_cents ?? p.menu_item_price_cents,
					description: p.menu_item.description,
				}
			: undefined,
		order_lobby: p?.order_lobby
			? {
					order_lobbies_id: p.order_lobby.order_lobbies_id,
					lobby_name: p.order_lobby.lobby_name,
					active: p.order_lobby.active,
					creator_id: p.order_lobby.creator_id,
					created_at: toIso(p.order_lobby.created_at),
				}
			: undefined,
	};

	return OrderLobbyItemResponseSchema.parse(obj as unknown) as OrderLobbyItemResponse;
}

export function toOrderLobbyItemList(payload: unknown[]): OrderLobbyItemResponse[] {
	return payload.map(toOrderLobbyItemResponse);
}
