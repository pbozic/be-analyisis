// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

import type { OrderLobby } from '../orderLobbies/OrderLobby.js';
import type { User } from '../users/User.js';

export type OrderLobbyUser = {
	order_lobby_users_id: string;
	user_id: string;
	order_lobbies_id: string;
	limit: number;
	created_at: string;
	updated_at: string;
	order_lobbies: OrderLobby;
	users: User;
};
