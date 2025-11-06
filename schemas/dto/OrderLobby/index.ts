// Export all OrderLobby related DTOs
export * from './orderLobby.js';
export * from './orderLobbyItem.js';
export * from './orderLobbyUser.dto.ts';

// Re-export registerSchemas functions with specific names to avoid conflicts
export { registerSchemas as registerOrderLobbySchemas } from './orderLobby.js';
export { registerSchemas as registerOrderLobbyItemSchemas } from './orderLobbyItem.js';
export { registerSchemas as registerOrderLobbyUserSchemas } from './orderLobbyUser.dto.js';
