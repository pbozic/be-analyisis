import prisma from '../prisma/prisma.js';
import { TransportModuleDetail } from '../schemas/dto/Transport/transport.dto.js';
import { toTransportModuleDetail } from '../schemas/dto/Transport/transport.mappers.js';
/**
 * Disable the transport module for business.
 *
 * @param {string} transport_module_id - The ID of the transport module.
 * @returns {Promise<TransportModuleDetail>} The updated transport module.
 */
export async function disableTransportModule(transport_module_id: string): Promise<TransportModuleDetail> {
	try {
	const updated = await prisma.transport_module.update({ where: { transport_module_id }, data: { active: false } });
		return toTransportModuleDetail(updated);
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error disabling transport module:', message);
		throw new Error(message);
	}
}
/**
 * Enable the transport module for business.
 *
 * @param {string} transport_module_id - The ID of the transport module.
 * @returns {Promise<TransportModuleDetail>} The updated transport module.
 */
export async function enableTransportModule(transport_module_id: string): Promise<TransportModuleDetail> {
	try {
	const updated = await prisma.transport_module.update({ where: { transport_module_id }, data: { active: true } });
		return toTransportModuleDetail(updated);
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error enabling store:', message);
		throw new Error(message);
	}
}

export default { disableTransportModule, enableTransportModule };
