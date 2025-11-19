import type { action_bundle, MODULE_TYPE, Prisma as TPrisma } from '@prisma/client';
import Stripe from 'stripe';

import prisma from '../prisma/prisma.js';
import type { BusinessAddon, AddonAction } from '../schemas/dto/Subscription/subscription.dto.ts';
import stripe from './stripe.js';
import ReservationModuleDao from '../dao/reservation/ReservationModule.ts';

type CanPerformActionResult = {
	allowed: boolean;
	usage: number;
	limit: number | null; // null = unlimited
};

/**
 * Check if a reservation module is allowed to perform a specific action.
 * - Includes subscription and addon-based actions.
 * - Honors limits and usage (business_usage).
 * @param {string} reservationModuleId
 * @param {string} actionName
 * @returns {Promise<CanPerformActionResult>}
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

	const addonLimits = module.addons.flatMap((ba: BusinessAddon) =>
		ba.addon.actions.map((aa: AddonAction) => aa.limit ?? 0)
	);

	const totalLimit = [subscriptionLimit, ...addonLimits].reduce<number | null>((sum, limit) => {
		if (sum === null || limit === null) return null;
		return sum + limit;
	}, 0);

	// 4. Check current usage
	const result = await prisma.business_usage.aggregate({
		where: {
			reservation_module_id: reservationModuleId,
			action_id: actionId,
		},
		_sum: {
			used: true,
		},
	});

	const used = result._sum.used ?? 0;
	const allowed = totalLimit === null ? true : used < totalLimit;

	return {
		allowed,
		usage: used,
		limit: totalLimit,
	};
}
type DesiredAddonInput = {
	priceId: string;
	quantity: number;
};

type DesiredSubscriptionInput = {
	bundlePriceId: string; // required, one bundle
	addons?: DesiredAddonInput[]; // optional, zero or more addons with quantities
};

type SubscriptionPhaseItems = {
	/** Items to apply immediately (current phase) */
	currentPhaseItems: Stripe.SubscriptionScheduleCreateParams.Phase.Item[];
	/** Items to apply next billing cycle (next phase), optional */
	nextPhaseItems?: Stripe.SubscriptionScheduleCreateParams.Phase.Item[];
};

/**
 * Builds Stripe subscription schedule items for immediate and next-cycle application.
 * - Bundles: exactly one from desiredBundles
 *   - Replace immediately only if price increases → triggers proration
 * - Addons: zero or more from desiredAddons, respecting desired quantities
 * - Upgrades (new items or increased quantity) → current phase
 * - Downgrades (removed items or decreased quantity) → next phase
 *
 * @param {Stripe.SubscriptionItem & { price: Stripe.Price & { product: Stripe.Product } }} currentPhaseItems - Current subscription items
 * @param {action_bundle} desiredBundle - Desired bundle to apply
 * @param {DesiredAddonInput[]} desiredAddons - Desired addons with quantities
 * @param {action_bundle[]} existingBundleObjects - All existing bundle objects from DB
 * @returns {SubscriptionPhaseItems} - Items for current and next phases
 */
export function buildSchedulePhaseItems(
	currentPhaseItems: (Stripe.SubscriptionItem & {
		price: Stripe.Price & { product: Stripe.Product };
	})[],
	desiredBundle: action_bundle,
	desiredAddons: { priceId: string; quantity: number }[],
	existingBundleObjects: action_bundle[]
): SubscriptionPhaseItems {
	const currentBundles = new Map<string, Stripe.SubscriptionItem>();
	const currentAddons = new Map<string, Stripe.SubscriptionItem>();

	// Split current items into bundles vs addons
	const existingBundleProductIds = new Set(existingBundleObjects.map((b) => b.stripe_product_id));
	for (const item of currentPhaseItems) {
		const product = item.price.product as Stripe.Product;
		if (existingBundleProductIds.has(product.id)) {
			currentBundles.set(item.price.id, item);
		} else {
			currentAddons.set(item.price.id, item);
		}
	}

	const newCurrentPhaseItems: Stripe.SubscriptionScheduleCreateParams.Phase.Item[] = [];
	const nextPhaseItems: Stripe.SubscriptionScheduleCreateParams.Phase.Item[] = [];

	// Find current bundle if exists
	const currentBundleItem = Array.from(currentBundles.values())[0];
	if (!currentBundleItem) {
		// No current bundle → add immediately
		newCurrentPhaseItems.push({ price: desiredBundle.stripe_price_id, quantity: 1 });
		nextPhaseItems.push({ price: desiredBundle.stripe_price_id, quantity: 1 });
	} else {
		const currentBundleObj = existingBundleObjects.find(
			(b) => b.stripe_product_id === (currentBundleItem.price.product as Stripe.Product).id
		);
		if (!currentBundleObj) {
			throw new Error('Current bundle not found in existingBundleObjects');
		}

		if (desiredBundle.price_cents > currentBundleObj.price_cents) {
			// Price increase → replace immediately
			newCurrentPhaseItems.push({ price: desiredBundle.stripe_price_id, quantity: 1 });
			nextPhaseItems.push({ price: desiredBundle.stripe_price_id, quantity: 1 });
		} else {
			// No immediate change → keep current bundle in current phase
			newCurrentPhaseItems.push({ price: currentBundleItem.price.id, quantity: 1 });
			nextPhaseItems.push({ price: desiredBundle.stripe_price_id, quantity: 1 }); // replacement next phase
		}
	}

	// --- Handle Addons ---
	const desiredAddonMap = new Map<string, number>();
	desiredAddons.forEach((a) => desiredAddonMap.set(a.priceId, a.quantity));

	for (const [priceId, desiredQty] of desiredAddonMap.entries()) {
		const currentItem = currentAddons.get(priceId);
		if (!currentItem) {
			// New addon → upgrade immediately
			newCurrentPhaseItems.push({ price: priceId, quantity: desiredQty });
			nextPhaseItems.push({ price: priceId, quantity: desiredQty });
		} else {
			const currentQty = currentItem.quantity ?? 0;
			if (desiredQty > currentQty) {
				// Upgrade
				newCurrentPhaseItems.push({ price: priceId, quantity: desiredQty });
				nextPhaseItems.push({ price: priceId, quantity: desiredQty });
			} else if (desiredQty < currentQty) {
				// Downgrade → keep current now, apply next cycle
				newCurrentPhaseItems.push({ price: priceId, quantity: currentQty });
				nextPhaseItems.push({ price: priceId, quantity: desiredQty });
			} else {
				// Unchanged
				newCurrentPhaseItems.push({ price: priceId, quantity: currentQty });
				nextPhaseItems.push({ price: priceId, quantity: currentQty });
			}
		}
		currentAddons.delete(priceId);
	}

	// Any remaining current addons → remove next cycle
	for (const [, item] of currentAddons) {
		newCurrentPhaseItems.push({ price: item.price.id, quantity: item.quantity ?? 1 });
		nextPhaseItems.push({ price: item.price.id, quantity: 0 });
	}

	return {
		currentPhaseItems: newCurrentPhaseItems,
		nextPhaseItems,
	};
}

type CreateOrUpdateSubscriptionInput = {
	reservation_module_id: string;
	bundleId: string;
	addonPriceIds?: { priceId: string; quantity: number }[];
	tx?: TPrisma.TransactionClient;
};

/**
 * Create or update a reservation module's Stripe subscription schedule.
 * - Creates new schedule if none exists.
 * - Updates existing schedule with new bundle/addons.
 *
 * @param {CreateOrUpdateSubscriptionInput} input - Input parameters
 * @returns {Promise<{ scheduleId: string; paymentRequired: boolean; clientSecret?: string }>} - Result with schedule ID and payment info
 */
export async function createOrUpdateReservationModuleSubscription(
	input: CreateOrUpdateSubscriptionInput
): Promise<{ scheduleId: string; paymentRequired: boolean; clientSecret?: string }> {
	const { reservation_module_id, bundleId, addonPriceIds = [], tx } = input;
	const client = tx || prisma;

	// 1️⃣ Load reservation module and business
	const reservation_module = await ReservationModuleDao.getReservationModuleById(reservation_module_id);
	if (!reservation_module) throw new Error('Reservation module not found');
	const customerId = reservation_module.business?.stripe_customer_id;
	if (!customerId) throw new Error('Stripe customer ID not found');

	// 2️⃣ Load desired bundle object and existing bundles from DB
	const desiredBundle = await prisma.action_bundle.findUnique({
		where: { action_bundle_id: bundleId },
	});
	if (!desiredBundle) throw new Error('Desired bundle not found');

	const existingBundles = await prisma.action_bundle.findMany();

	// 3️⃣ Retrieve existing schedule and subscription if exists
	const currentScheduleId = reservation_module.stripe_subscription_schedule_id || null;
	let schedule: (Stripe.SubscriptionSchedule & { subscription: Stripe.Subscription | string }) | null = null;
	let underlyingSub:
		| (Stripe.Subscription & { latest_invoice: Stripe.Invoice & { payment_intent: Stripe.PaymentIntent } })
		| null = null;
	let currentPhaseItems: (Stripe.SubscriptionItem & { price: Stripe.Price & { product: Stripe.Product } })[] = [];

	if (currentScheduleId) {
		schedule = await stripe.client.subscriptionSchedules.retrieve(currentScheduleId, {
			expand: ['subscription', 'phases.items.price.product'],
		});
		if (!schedule) throw new Error('Schedule not found');

		underlyingSub = await stripe.client.subscriptions.retrieve(schedule.subscription.id as string, {
			expand: ['items.data.price.product', 'latest_invoice.payment_intent'],
		});
		if (!underlyingSub) throw new Error('Schedule subscription not found');
		currentPhaseItems = underlyingSub.items.data as typeof currentPhaseItems;
	}

	// 4️⃣ Build current and next phase items
	const { currentPhaseItems: newCurrentPhaseItems, nextPhaseItems } = buildSchedulePhaseItems(
		currentPhaseItems,
		desiredBundle,
		addonPriceIds.map((a) => ({ priceId: a.priceId, quantity: a.quantity })),
		existingBundles
	);

	let paymentRequired = false;
	let clientSecret: string | undefined;

	if (schedule) {
		// --- Update existing schedule ---
		const phases: Stripe.SubscriptionScheduleUpdateParams.Phase[] = [
			{
				end_date: schedule.current_phase?.end_date,
				start_date: schedule?.current_phase?.start_date,
				items: newCurrentPhaseItems,
				proration_behavior: 'always_invoice' as Stripe.SubscriptionCreateParams.ProrationBehavior,
			},
			...(nextPhaseItems && nextPhaseItems.length
				? [
						{
							items: nextPhaseItems,
							proration_behavior: 'none' as Stripe.SubscriptionCreateParams.ProrationBehavior,
						},
					]
				: []),
		];

		// Only set start_date on first phase when updating
		schedule = await stripe.client.subscriptionSchedules.update(schedule.id, {
			phases,
			metadata: { reservation_module_id },
		});

		console.log('schedule before update and retrieve', schedule);
		underlyingSub = await stripe.client.subscriptions.retrieve(schedule.subscription as string, {
			expand: ['latest_invoice.payment_intent'],
		});

		const pi = underlyingSub.latest_invoice?.payment_intent;
		if (pi && (pi.status === 'requires_action' || pi.status === 'requires_payment_method')) {
			paymentRequired = true;
			clientSecret = pi.client_secret ?? undefined;
		}
	} else {
		// --- Create new schedule from scratch ---
		const phases: Stripe.SubscriptionScheduleCreateParams.Phase[] = [
			{
				items: newCurrentPhaseItems,
				proration_behavior: 'always_invoice',
			},
		];

		schedule = await stripe.client.subscriptionSchedules.create({
			customer: customerId,
			end_behavior: 'release',
			start_date: Math.floor(Date.now() / 1000),
			metadata: { reservation_module_id },
			phases,
		});
		console.log('schedule', schedule);

		underlyingSub = await stripe.client.subscriptions.retrieve(schedule.subscription as string, {
			expand: ['latest_invoice.payment_intent'],
		});

		const pi = underlyingSub.latest_invoice?.payment_intent;
		if (pi && (pi.status === 'requires_action' || pi.status === 'requires_payment_method')) {
			paymentRequired = true;
			clientSecret = pi.client_secret ?? undefined;
		}
	}

	// 5️⃣ Update DB to store schedule ID
	await client.reservation_module.update({
		where: { reservation_module_id },
		data: { stripe_subscription_schedule_id: schedule.id },
	});

	return { scheduleId: schedule.id, paymentRequired, clientSecret };
}

/**
 * Sync a reservation_module's DB state with its Stripe subscription.
 * - Updates bundle (action_bundle_id)
 * - Updates addons (business_addon rows)
 * - Updates subscription_expires_at
 *
 * @param {string} reservationModuleId
 * @param {TPrisma.TransactionClient} [tx]
 * @returns {Promise<void>}
 */
export async function syncReservationModuleWithStripe(
	reservation_module_id: string,
	tx?: TPrisma.TransactionClient
): Promise<void> {
	const prismaClient = tx || prisma;

	// 1️⃣ Load reservation module
	const reservationModule = await prismaClient.reservation_module.findUnique({
		where: { reservation_module_id },
		include: { business: true },
	});

	if (!reservationModule?.stripe_subscription_schedule_id) {
		throw new Error('Reservation module has no stripe_subscription_id');
	}

	// 2️⃣ Fetch schedule and products from Stripe without exceeding expansion limits
	const schedule = await stripe.client.subscriptionSchedules.retrieve(
		reservationModule.stripe_subscription_schedule_id,
		{
			expand: ['subscription.items.data.price'], // only expand subscription items, not price.product
		}
	);

	if (!schedule) {
		throw new Error('Stripe schedule not found');
	}
	if (schedule.status !== 'active' || schedule.phases.length === 0 || schedule.phases[0].items.length === 0) {
		throw new Error('Stripe schedule is not active');
	}
	const subscriptionItems = schedule.phases[0]?.items;
	console.log('before error: ', schedule, subscriptionItems);

	// Collect all Stripe product IDs from prices
	const productPriceIds = subscriptionItems.map((item) => item.price);

	// Retrieve the full Stripe Product objects in a batch
	const stripeProducts = (
		await Promise.all(productPriceIds.map((id) => stripe.client.prices.retrieve(id, { expand: ['product'] })))
	).map((price) => price.product);

	console.log(stripeProducts);
	// Map product IDs to subscription items
	const productMap = new Map<string, Stripe.SubscriptionItem>();
	subscriptionItems.forEach((item, index) => {
		const product = stripeProducts[index];
		if (!product || !item.quantity) return;
		productMap.set(product.id, item as Stripe.SubscriptionItem);
	});

	// 4️⃣ Load bundles and addons
	const [bundles, addons, existingBusinessAddons] = await Promise.all([
		prismaClient.action_bundle.findMany({
			where: { stripe_product_id: { in: Array.from(productMap.keys()) } },
		}),
		prismaClient.addon.findMany({
			where: { stripe_product_id: { in: Array.from(productMap.keys()) } },
		}),
		prismaClient.business_addon.findMany({
			where: { reservation_module_id },
		}),
	]);

	if (bundles.length !== 1) {
		throw new Error(`Expected exactly one bundle in subscription, found ${bundles.length}`);
	}

	const bundle = bundles[0];

	const addonIdsFromStripe = new Set(addons.map((a) => a.addon_id));
	const addonIdsInDb = new Set(existingBusinessAddons.map((ba) => ba.addon_id));

	const toRemove = existingBusinessAddons
		.filter((ba) => !addonIdsFromStripe.has(ba.addon_id))
		.map((ba) => ba.addon_id);

	// 5️⃣ Run transaction
	await prisma.$transaction(async (tx2: TPrisma.TransactionClient) => {
		// Update bundle + subscription expiration
		await tx2.reservation_module.update({
			where: { reservation_module_id },
			data: {
				action_bundle_id: bundle.action_bundle_id,
				subscription_expires_at: new Date(schedule.subscription!.current_period_end * 1000),
			},
		});

		// Add or update addons with quantity
		for (const addon of addons) {
			const stripeItem = productMap.get(addon.stripe_product_id)!;
			await tx2.business_addon.upsert({
				where: {
					business_addon_connection: {
						reservation_module_id,
						addon_id: addon.addon_id,
					},
				},
				update: {
					quantity: stripeItem.quantity ?? 1,
				},
				create: {
					reservation_module_id,
					addon_id: addon.addon_id,
					quantity: stripeItem.quantity ?? 1,
				},
			});
		}

		// Remove addons that are no longer in Stripe
		if (toRemove.length > 0) {
			await tx2.business_addon.deleteMany({
				where: {
					reservation_module_id,
					addon_id: { in: toRemove },
				},
			});
		}
	});
}

/** 
export async function createStripeSubscription(
	reservation_module_id: string,
	bundle_name: string,
	tx?: TPrisma.TransactionClient
): Promise<void> {
	const reservation_module = await ReservationModuleDao.getReservationModuleById(reservation_module_id);
	const action_bundle = await ActionBundleDao.getSubscriptionByName(bundle_name);
	if (!reservation_module || !action_bundle) {
		throw new Error('Reservation module not found');
	}
	let subscriptionItems: Stripe.SubscriptionCreateParams.Item[] = [{ price: action_bundle.stripe_price_id }];
	let paymentRequired = false;
	let clientSecret = null;
	const subscription = await stripe.client.subscriptions.create({
		customer: reservation_module.business!.stripe_customer_id,
		items: subscriptionItems,
		payment_behavior: 'default_incomplete',
		collection_method: 'charge_automatically',
		// billing_cycle_anchor: 'now',
		proration_behavior: 'none',
		expand: ['latest_invoice.payment_intent'],
		metadata: { business_id: reservation_module.business_id, type: 'word_buys' },
	});

	await prisma.business.update({
		where: { business_id: reservation_module.business_id },
		data: { word_buy_stripe_subscription_id: subscription.id },
	});

	const pi = subscription.latest_invoice?.payment_intent;
	if (pi && (pi.status === 'requires_action' || pi.status === 'requires_payment_method')) {
		paymentRequired = true;
		clientSecret = pi.client_secret || null;
	}
}
**/

// export async function createReservationSubscription(reservationModuleId: string, 	tx?: TPrisma.TransactionClient
// ): Promise<void> {
// 	const prismaClient = tx ?? prisma;
// 	const freeTrialData = {
// 		name: 'Free Trial',
// 		price_cents: 0,
// 		seed_key: 'subscription_trial_reservations',
// 		actions: [
// 			{ action: 'MANAGE_BOOKING', limit: null },
// 			{ action: 'ADD_EMPLOYEE', limit: 1 },
// 			{ action: 'ADD_LOCATION', limit: 1 },
// 			{ action: 'ADD_SERVICE', limit: null },
// 			{ action: 'ADD_CUSTOMER', limit: 1 },
// 			{ action: 'SEND_SMS', limit: 160 },
// 			{ action: 'VIEW_DASHBOARD', limit: null },
// 		],
// 	};

// 	const productId = await getOrCreateProduct(MODULE);

// 	const actionsMap: Record<string, { action_id: string }> = {};
// 	const allActions = await prismaClient.action.findMany();
// 	for (const act of allActions) {
// 		actionsMap[act.name] = { action_id: act.action_id };
// 	}

// 	const stripePriceId = await getOrCreatePrice(productId, sub.price_cents, sub.seed_key);

// 				const createdSub = await tx.action_bundle.upsert({
// 					where: { name: sub.name },
// 					update: {
// 						price_cents: sub.price_cents,
// 						stripe_price_id: stripePriceId,
// 						module: { set: MODULE },
// 					},
// 					create: {
// 						name: sub.name,
// 						price_cents: sub.price_cents,
// 						stripe_price_id: stripePriceId,
// 						module: MODULE,
// 					},
// 				});

// 				await tx.subscription_action.deleteMany({
// 					where: { subscription_id: createdSub.subscription_id },
// 				});

// 				for (const sa of sub.actions) {
// 					const actionName = RESERVATION_ACTIONS[sa.action];
// 					const foundAction = actionsMap[actionName];
// 					if (!foundAction) throw new Error(`Action not found: ${actionName}`);

// 					await tx.subscription_action.create({
// 						data: {
// 							subscription: { connect: { subscription_id: createdSub.subscription_id } },
// 							action: { connect: { action_id: foundAction.action_id } },
// 							limit: sa.limit,
// 							module: MODULE,
// 						},
// 					});
// 				}
// }
