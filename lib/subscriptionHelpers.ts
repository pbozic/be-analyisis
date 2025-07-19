import type { MODULE_TYPE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { BusinessAddon, AddonAction } from '../types/subscriptions/Subscription.ts';

type CanPerformActionResult = {
	allowed: boolean;
	usage: number;
	limit: number | null; // null = unlimited
};

/**
 * Check if a reservation module is allowed to perform a specific action.
 * - Includes subscription and addon-based actions.
 * - Honors limits and usage (business_usage).
 * @param reservationModuleId
 * @param actionName
 * @returns
 */
export async function canPerformActionReservation(
	reservationModuleId: string,
	actionName: string
): Promise<CanPerformActionResult> {
	const MODULE: MODULE_TYPE = 'reservations';

	const action = await prisma.action.findFirst({
		where: {
			name: actionName,
			module: MODULE,
		},
		select: { action_id: true },
	});

	if (!action) {
		throw new Error(`Action "${actionName}" not found for module "${MODULE}"`);
	}

	const actionId = action.action_id;

	// 2. Get reservation_module with subscription and addons for this action
	const module = await prisma.reservation_module.findUnique({
		where: { reservation_module_id: reservationModuleId },
		select: {
			subscription: {
				select: {
					subscription_id: true,
					actions: {
						where: {
							action_id: actionId,
							module: MODULE,
						},
						select: { limit: true },
					},
				},
			},
			addons: {
				select: {
					addon: {
						select: {
							actions: {
								where: {
									action_id: actionId,
									module: MODULE,
								},
								select: { limit: true },
							},
						},
					},
				},
			},
		},
	});

	if (!module) {
		throw new Error(`Reservation module "${reservationModuleId}" not found`);
	}

	// 3. Aggregate all limits
	const subscriptionLimit = module.subscription?.actions[0]?.limit ?? 0;

	const addonLimits = module.business_addons.flatMap((ba: BusinessAddon) =>
		ba.addon.actions.map((aa: AddonAction) => aa.limit ?? 0)
	);

	const totalLimit = [subscriptionLimit, ...addonLimits].reduce<number | null>((sum, limit) => {
		if (sum === null || limit === null) return null;
		return sum + limit;
	}, 0);

	// 4. Check current usage
	const usage = await prisma.business_usage.findUnique({
		where: {
			reservation_module_id_action_id: {
				reservation_module_id: reservationModuleId,
				action_id: actionId,
			},
		},
		select: { used: true },
	});

	const used = usage?.used ?? 0;
	const allowed = totalLimit === null ? true : used < totalLimit;

	return {
		allowed,
		usage: used,
		limit: totalLimit,
	};
}
