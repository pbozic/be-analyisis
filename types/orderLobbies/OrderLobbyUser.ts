import type { OrderLobby } from './OrderLobby.js';
import type { User } from '../users/User.js';

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export type OrderLobbyUser = {
	order_lobby_users_id: string;
	user_id: string;
	order_lobbies_id: string;
	limit: number;
	created_at: Date;
	updated_at: Date;
	order_lobbies: OrderLobby;
	users: User;
};
