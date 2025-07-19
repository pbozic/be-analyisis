import type { Prisma } from '@prisma/client';
import { client as stripe } from '../../lib/stripe.js';
import prisma from '../prisma.js';
import type Stripe from 'stripe';
import type { MODULE_TYPE } from '../schemas/interfaces.ts';
import { RESERVATION_ACTIONS, ALL_ACTIONS } from '../../constants/actions.ts';

const MODULE: MODULE_TYPE = 'reservations';
const FLATTENED_ACTIONS: { name: string; module: MODULE_TYPE }[] = Object.entries(ALL_ACTIONS).flatMap(
	([module, actions]) =>
		Object.values(actions).map((name) => ({
			name,
			module: module as MODULE_TYPE,
		}))
);
type ActionLimit = {
	action: keyof typeof RESERVATION_ACTIONS;
	limit: number | null;
};

type SeedSubscription = {
	name: string;
	price_cents: number;
	seed_key: string;
	actions: ActionLimit[];
};

const SUBSCRIPTIONS: SeedSubscription[] = [
	{
		name: 'Basic',
		price_cents: 500,
		seed_key: 'subscription_basic_reservations',
		actions: Object.keys(RESERVATION_ACTIONS).map((key) => ({
			action: key as keyof typeof RESERVATION_ACTIONS,
			limit: 0,
		})),
	},
	{
		name: 'Free Trial',
		price_cents: 0,
		seed_key: 'subscription_trial_reservations',
		actions: [
			{ action: 'MANAGE_BOOKING', limit: null },
			{ action: 'ADD_EMPLOYEE', limit: 1 },
			{ action: 'ADD_LOCATION', limit: 1 },
			{ action: 'ADD_SERVICE', limit: null },
			{ action: 'ADD_CUSTOMER', limit: 1 },
			{ action: 'SEND_SMS', limit: 160 },
			{ action: 'VIEW_DASHBOARD', limit: null },
		],
	},
	{
		name: 'Standard',
		price_cents: 1000,
		seed_key: 'subscription_standard_reservations',
		actions: [
			{ action: 'MANAGE_BOOKING', limit: null },
			{ action: 'ADD_EMPLOYEE', limit: 1 },
			{ action: 'ADD_LOCATION', limit: 1 },
			{ action: 'ADD_SERVICE', limit: null },
			{ action: 'ADD_CUSTOMER', limit: 1 },
			{ action: 'SEND_SMS', limit: 160 },
			{ action: 'VIEW_DASHBOARD', limit: null },
		],
	},
	{
		name: 'Premium',
		price_cents: 2000,
		seed_key: 'subscription_premium_reservations',
		actions: [
			{ action: 'MANAGE_BOOKING', limit: null },
			{ action: 'ADD_EMPLOYEE', limit: 1 },
			{ action: 'ADD_LOCATION', limit: 1 },
			{ action: 'ADD_SERVICE', limit: null },
			{ action: 'ADD_CUSTOMER', limit: 1 },
			{ action: 'SEND_SMS', limit: 160 },
			{ action: 'VIEW_DASHBOARD', limit: null },
		],
	},
];

const ADDONS: {
	name: string;
	price_cents: number;
	seed_key: string;
	actions: ActionLimit[];
}[] = [
	{
		name: 'Additional SMS',
		price_cents: 6,
		seed_key: 'addon_sms_reservations',
		actions: [{ action: 'SEND_SMS', limit: 1 }],
	},
	{
		name: 'Additional Employee',
		price_cents: 1000,
		seed_key: 'addon_employee_reservations',
		actions: [{ action: 'ADD_EMPLOYEE', limit: 1 }],
	},
	{
		name: 'Additional Location',
		price_cents: 1000,
		seed_key: 'addon_location_reservations',
		actions: [{ action: 'ADD_LOCATION', limit: 1 }],
	},
];

async function getOrCreateProduct(module: string): Promise<string> {
	const productName = `Klikni: ${module}`;
	const existing = await stripe.products.list({ limit: 100 });
	const found = existing.data.find((p: Stripe.Product) => p.name === productName);
	if (found) return found.id;

	const created = await stripe.products.create({
		name: productName,
		metadata: { module },
	});
	return created.id;
}

async function getOrCreatePrice(productId: string, priceCents: number, seedKey: string): Promise<string> {
	const existing = await stripe.prices.list({ product: productId, limit: 100 });
	const found = existing.data.find(
		(p: Stripe.Price) => p.metadata?.seed_key === seedKey && p.unit_amount === priceCents
	);
	if (found) return found.id;

	const created = await stripe.prices.create({
		currency: 'eur',
		unit_amount: priceCents,
		recurring: { interval: 'month' },
		product: productId,
		metadata: { seed_key: seedKey },
	});
	return created.id;
}

export default async function seedSubscriptions(): Promise<void> {
	const productId = await getOrCreateProduct(MODULE);

	await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
		// 1. Create actions
		for (const act of FLATTENED_ACTIONS) {
			await tx.action.upsert({
				where: { name: act.name },
				update: { module: { set: act.module } },
				create: {
					name: act.name,
					module: act.module,
				},
			});
		}

		const actionsMap: Record<string, { action_id: string }> = {};
		const allActions = await tx.action.findMany();
		for (const act of allActions) {
			actionsMap[act.name] = { action_id: act.action_id };
		}

		// 2. Seed subscriptions
		for (const sub of SUBSCRIPTIONS) {
			const stripePriceId = await getOrCreatePrice(productId, sub.price_cents, sub.seed_key);

			const createdSub = await tx.subscription.upsert({
				where: { name: sub.name },
				update: {
					price_cents: sub.price_cents,
					stripe_price_id: stripePriceId,
					module: { set: MODULE },
				},
				create: {
					name: sub.name,
					price_cents: sub.price_cents,
					stripe_price_id: stripePriceId,
					module: MODULE,
				},
			});

			await tx.subscription_action.deleteMany({
				where: { subscription_id: createdSub.subscription_id },
			});

			for (const sa of sub.actions) {
				const actionName = RESERVATION_ACTIONS[sa.action];
				const foundAction = actionsMap[actionName];
				if (!foundAction) throw new Error(`Action not found: ${actionName}`);

				await tx.subscription_action.create({
					data: {
						subscription: { connect: { subscription_id: createdSub.subscription_id } },
						action: { connect: { action_id: foundAction.action_id } },
						limit: sa.limit,
						module: MODULE,
					},
				});
			}
		}

		// 3. Seed addons
		for (const addon of ADDONS) {
			const stripePriceId = await getOrCreatePrice(productId, addon.price_cents, addon.seed_key);

			const createdAddon = await tx.addon.upsert({
				where: { name: addon.name },
				update: {
					price_cents: addon.price_cents,
					stripe_price_id: stripePriceId,
					module: { set: MODULE },
				},
				create: {
					name: addon.name,
					price_cents: addon.price_cents,
					stripe_price_id: stripePriceId,
					module: MODULE,
				},
			});

			await tx.addon_action.deleteMany({
				where: { addon_id: createdAddon.addon_id },
			});

			for (const aa of addon.actions) {
				const actionName = RESERVATION_ACTIONS[aa.action];
				const foundAction = actionsMap[actionName];
				if (!foundAction) throw new Error(`Action not found: ${actionName}`);

				await tx.addon_action.create({
					data: {
						addon: { connect: { addon_id: createdAddon.addon_id } },
						action: { connect: { action_id: foundAction.action_id } },
						limit: aa.limit,
						module: MODULE,
					},
				});
			}
		}
	});
}
