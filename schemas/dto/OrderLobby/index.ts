// Export all OrderLobby related DTOs
export * from './orderLobby.dto.ts';
export * from './orderLobbyItem.dto.ts';
export * from './orderLobbyUser.dto.ts';

// Re-export registerSchemas functions with specific names to avoid conflicts
export { registerSchemas as registerOrderLobbySchemas } from './orderLobby.dto.ts';
export { registerSchemas as registerOrderLobbyItemSchemas } from './orderLobbyItem.dto.ts';
export { registerSchemas as registerOrderLobbyUserSchemas } from './orderLobbyUser.dto.ts';
