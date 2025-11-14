import Stripe from 'stripe';
import dotenv from 'dotenv';

import { SERVICE_TYPE } from './constants.js';
import BusinessDao, { getStripeIdsForAllBusinesses } from '../dao/Business.js';
import prisma from '../prisma/prisma.js';
import { UserWithBusinessUsersResponse } from '../schemas/dto/User/index.js';

dotenv.config();

// Instantiate Stripe client with explicit API version for typings
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: '2024-04-10',
});

// Local minimal types for inputs/outputs that are not Stripe-native
export type BusinessLike = {
	business_id: string;
	email: string;
	name: string;
	telephone: string;
	tax_id?: string | null;
	registration_id?: string | null;
	stripe_customer_id?: string | null;
	stripe_account_id?: string | null;
};

export type PaymentSheetCredentials = {
	setupIntent: string;
	ephemeralKey: string;
	customer: string;
};

export type CreatedPaymentIntentRef = {
	client_secret: string | null;
	payment_intent_logs_id: string;
};

/** Retrieve the platform account balance from Stripe. */
export async function getBalance(): Promise<Stripe.Balance> {
	return stripe.balance.retrieve();
}

/**
 * Create a Stripe connected account for a business.
 * @param {BusinessLike} business - Business entity with basic company details.
 * @returns {Promise<Stripe.Account>} The created connected account.
 */
export async function createAccount(business: BusinessLike): Promise<Stripe.Account> {
	return stripe.accounts.create({
		email: business.email,
		business_type: 'company',
		company: {
			name: business.name,
			phone: business.telephone,
			vat_id: business.tax_id ?? undefined,
			registration_number: business.registration_id ?? undefined,
		},
		metadata: {
			business_id: business.business_id,
		},
		controller: {
			fees: { payer: 'account' },
			losses: { payments: 'stripe' },
			stripe_dashboard: { type: 'full' },
			requirement_collection: 'stripe',
		},
	});
}

/**
 * Create an onboarding account link for a connected account.
 * @param {string} accountId - Connected account ID.
 * @param {string} business_id - Internal business ID to build return/refresh URLs.
 * @returns {Promise<Stripe.AccountLink>} AccountLink object.
 */
export async function getAccountLinks(accountId: string, business_id: string): Promise<Stripe.AccountLink> {
	return stripe.accountLinks.create({
		account: accountId,
		return_url: `https://api.klikni-web.eu/api/stripe/return/${business_id}`,
		refresh_url: `https://api.klikni-web.eu/api/stripe/generate/${business_id}`,
		type: 'account_onboarding',
	});
}

/**
 * Create a Stripe customer for a user.
 * @param {string} email - Customer email.
 * @param {string} fullName - Full name.
 * @param {string} phoneNumber - E.164 phone number.
 * @returns {Promise<Stripe.Customer>} Stripe customer object.
 */
export async function createCustomer(email: string, fullName: string, phoneNumber: string): Promise<Stripe.Customer> {
	return stripe.customers.create({
		name: fullName,
		email,
		phone: phoneNumber,
		address: { country: 'SI' },
	});
}

/**
 * Update a Stripe customer's email.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} email - New email address.
 * @returns {Promise<Stripe.Customer>} Updated customer.
 */
export async function updateCustomerEmail(customerId: string, email: string): Promise<Stripe.Customer> {
	return stripe.customers.update(customerId, { email });
}

/**
 * Update a Stripe customer's telephone.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} telephone - E.164 phone number.
 * @returns {Promise<Stripe.Customer>} Updated customer.
 */
export async function updateCustomerPhone(customerId: string, telephone: string): Promise<Stripe.Customer> {
	return stripe.customers.update(customerId, { phone: telephone });
}

/**
 * Generate PaymentSheet credentials for a given user.
 * @param {UserWithFavouritesResponse} user - User with stripe_customer_id field.
 * @returns {Promise<PaymentSheetCredentials>}
 */
export async function generatePaymentSheetCredentials(
	user: UserWithBusinessUsersResponse
): Promise<PaymentSheetCredentials> {
	if (!user.stripe_customer_id) throw new Error('User does not have a stripe customer id');
	const ephemeralKey = await stripe.ephemeralKeys.create(
		{ customer: user.stripe_customer_id },
		{ apiVersion: '2024-04-10' }
	);
	const setupIntent = await stripe.setupIntents.create({
		customer: user.stripe_customer_id,
		usage: 'off_session',
		automatic_payment_methods: { enabled: true },
	});
	return {
		setupIntent: setupIntent.client_secret as string,
		ephemeralKey: ephemeralKey.secret as string,
		customer: user.stripe_customer_id,
	};
}

/**
 * Generate PaymentSheet credentials for a business customer.
 * @param {string} business_id - Internal business ID.
 * @returns {Promise<PaymentSheetCredentials>}
 */
export async function generateBusinessPaymentSheetCredentials(business_id: string): Promise<PaymentSheetCredentials> {
	const business = await BusinessDao.getBusinessById(business_id);
	const ephemeralKey = await stripe.ephemeralKeys.create(
		{ customer: business?.stripe_customer_id as string },
		{ apiVersion: '2024-04-10' }
	);
	const setupIntent = await stripe.setupIntents.create({
		customer: business?.stripe_customer_id as string,
		usage: 'off_session',
		automatic_payment_methods: { enabled: true },
	});
	return {
		setupIntent: setupIntent.client_secret as string,
		ephemeralKey: ephemeralKey.secret as string,
		customer: business?.stripe_customer_id as string,
	};
}

/**
 * Confirm a PaymentIntent by ID.
 * @param {string} paymentIntentId - Stripe PaymentIntent ID.
 * @returns {Promise<Stripe.PaymentIntent>} Confirmed PaymentIntent.
 */
export async function confirmPaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent> {
	return stripe.paymentIntents.confirm(paymentIntentId);
}

/**
 * Create a wallet top-up PaymentIntent for a user.
 * @param {number} amount - Amount in smallest currency unit (e.g., cents).
 * @param {string} currency - ISO currency code (e.g., 'eur').
 * @param {string | undefined} payment_method - Optional payment method ID.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} user_id - Internal user ID for metadata.
 * @param {string} return_url - Optional return URL.
 * @returns {Promise<Stripe.PaymentIntent>} Created PaymentIntent.
 */
export async function createPaymentIntentForWallet(
	amount: number,
	currency: string,
	payment_method: string | undefined,
	customerId: string,
	user_id: string,
	// eslint-disable-next-line no-unused-vars
	_return_url?: string
): Promise<Stripe.PaymentIntent> {
	if (amount <= 0) throw new Error('Amount must be greater than 0');
	return stripe.paymentIntents.create({
		amount,
		currency,
		customer: customerId,
		metadata: { user_id, type: 'wallet_topup' },
		...(payment_method ? { payment_method } : {}),
		confirm: false,
	});
}

/**
 * Create a platform PaymentIntent with optional metadata.
 * @param {number} amount - Amount in smallest currency unit.
 * @param {string} currency - ISO currency code.
 * @param {string} customerId - Stripe customer ID.
 * @param {Stripe.MetadataParam} [metadata={}] - Arbitrary key/values to store on the PaymentIntent.
 * @returns {Promise<Stripe.PaymentIntent>} Created PaymentIntent.
 */
export async function createPaymentIntentForPlatform(
	amount: number,
	currency: string,
	customerId: string,
	metadata: Stripe.MetadataParam = {}
): Promise<Stripe.PaymentIntent> {
	if (amount <= 0) throw new Error('Amount must be greater than 0');
	return stripe.paymentIntents.create({ amount, currency, customer: customerId, metadata, confirm: false });
}
/*
async function createPaymentIntentOnBehalf(amount, delivery_earnings, payment_method, customerId, business_stripe_id, delivery_business_stripe_id, orderId, return_url) {
	const customer = await stripe.customers.retrieve(customerId);
	console.log("payment_method", payment_method);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: Math.round(amount * 100),
		currency: "EUR",
		 customer: customerId,
		on_behalf_of: business_stripe_id,
		application_fee_amount: Math.round(((amount - delivery_earnings) * RESTAURANT_FEE) * 100),
		payment_method: payment_method,
		transfer_data: {
			destination: business_stripe_id,
		},
		capture_method: 'manual',
		metadata: {
			order_id: orderId,
			type: "order_payment"
		},
		// confirm: true,
		// return_url: return_url
	});
	if(delivery_business_stripe_id && delivery_earnings){
		let delivery_transfer = await stripe.transferToConnectedAccount(Math.round(delivery_earnings * 100), delivery_business_stripe_id, paymentIntent.id);
	}

	return paymentIntent
}
*/
/**
 * Refund a PaymentIntent by its ID.
 * @param {string} paymentIntentId - Stripe PaymentIntent ID.
 * @returns {Promise<Stripe.Refund>} Stripe Refund.
 */
export async function refundPaymentIntent(paymentIntentId: string): Promise<Stripe.Refund> {
	return stripe.refunds.create({ payment_intent: paymentIntentId });
}

/**
 * List saved card payment methods for a customer.
 * @param {string} stripe_customer_id - Stripe customer ID.
 * @returns {Promise<Stripe.PaymentMethod[]>} Collection of card PaymentMethods.
 */
export async function getPaymentMethods(stripe_customer_id: string): Promise<Stripe.PaymentMethod[]> {
	const paymentMethods = await stripe.customers.listPaymentMethods(stripe_customer_id, { type: 'card' });
	return paymentMethods.data;
}

/**
 * Transfer funds to a connected account.
 * @param {number} amount - Amount in cents.
 * @param {string} stripeAccountId - Destination connected account ID.
 * @param {string|null} [transferGroup=null] - Optional transfer group identifier.
 * @returns {Promise<Stripe.Transfer>} Stripe Transfer.
 */
export async function transferToConnectedAccount(
	amount: number,
	stripeAccountId: string,
	transferGroup: string | null = null
): Promise<Stripe.Transfer> {
	if (amount <= 0) throw new Error('Amount must be greater than 0');
	const base = { amount, currency: 'eur' as const, destination: stripeAccountId };
	return transferGroup
		? stripe.transfers.create({ ...base, transfer_group: transferGroup })
		: stripe.transfers.create(base);
}

/**
 * Check whether the connected account is active and charge/payout enabled.
 * @param {string} accountId - Connected account ID.
 * @returns {Promise<boolean>} True when active and enabled.
 */
export async function checkAccountActive(accountId: string): Promise<boolean> {
	const account = await stripe.accounts.retrieve(accountId);
	if (!account || !account.id) throw new Error('The connected account does not exist.');
	return Boolean(account.details_submitted && account.charges_enabled && account.payouts_enabled);
}

/**
 * Create a PaymentIntent that will be split later among recipients.
 * @param {string} customer_acc - Stripe customer ID.
 * @param {string} restaurant_acc - Destination account ID (for later transfer).
 * @param {string} order_id - Internal order ID.
 * @param {string} payment_method - Optional payment method ID.
 * @param {number} total_price - Amount in cents.
 * @param {number|string} merchant_cut - Merchant share (metadata only here).
 * @param {string} return_url - Optional URL.
 * @param {string} [type='order_payment'] - Metadata tag for the intent.
 * @returns {Promise<Stripe.PaymentIntent>} Created PaymentIntent.
 */
export async function createSplitPayment(
	customer_acc: string,
	restaurant_acc: string,
	order_id: string,
	payment_method: string | undefined,
	total_price: number,
	merchant_cut: number | string,
	return_url?: string,
	type: string = 'order_payment'
): Promise<Stripe.PaymentIntent | undefined> {
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(total_price),
			currency: 'EUR',
			customer: customer_acc,
			...(payment_method ? { payment_method } : {}),
			capture_method: 'manual',
			metadata: {
				order_type: SERVICE_TYPE.DELIVERY,
				order_id,
				type,
				merchant_cut: String(merchant_cut),
			},
			transfer_group: order_id,
		});
		return paymentIntent;
	} catch (err) {
		console.error(err);
	}
}

/**
 * Create a generic splittable PaymentIntent with supplied metadata cuts.
 * @param {string} customer_acc - Stripe customer ID.
 * @param {string} order_id - Internal order ID.
 * @param {string} payment_method - Optional payment method ID.
 * @param {number} total_price - Amount in cents.
 * @param {string} order_type - Type label for the order.
 * @param {object} cuts - Arbitrary key/values to store for later transfers.
 * @param {string} return_url - Optional return URL.
 * @param {string} [type='order_payment'] - Metadata tag.
 * @param {('manual'|'automatic')} [capture_method='manual'] - Capture method.
 * @returns {Promise<Stripe.PaymentIntent>} Created PaymentIntent.
 */
export async function createSplittablePayment(
	customer_acc: string,
	order_id: string,
	payment_method: string | undefined,
	total_price: number,
	order_type: string,
	cuts: Record<string, string | number> | undefined,
	return_url?: string,
	type: string = 'order_payment',
	capture_method: 'manual' | 'automatic' = 'manual'
): Promise<Stripe.PaymentIntent> {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: Math.round(total_price),
		currency: 'EUR',
		customer: customer_acc,
		...(payment_method ? { payment_method } : {}),
		capture_method,
		metadata: {
			order_type,
			order_id,
			type,
			...(cuts ?? {}),
		},
		transfer_group: order_id,
	});
	return paymentIntent;
}
/**
 * Transfer a portion from a succeeded PaymentIntent to a connected account.
 * @param {object} paymentIntent - Stripe PaymentIntent.
 * @param {string} destination_acc - Destination connected account ID.
 * @param {number} destination_cut - Amount in cents to transfer.
 * @param {Stripe.MetadataParam} [metadata={}] - Transfer metadata.
 * @returns {Promise<Stripe.Transfer>} Stripe Transfer.
 */
export async function splitCutFromPaymentIntent(
	paymentIntent: Stripe.PaymentIntent,
	destination_acc: string,
	destination_cut: number,
	metadata: Stripe.MetadataParam = {}
): Promise<Stripe.Transfer> {
	if (paymentIntent.status !== 'succeeded' || !paymentIntent.latest_charge) {
		throw new Error('Error transferring split from payment intent. Invalid status or missing charge.');
	}
	return stripe.transfers.create({
		amount: destination_cut,
		currency: 'eur',
		destination: destination_acc,
		source_transaction: paymentIntent.latest_charge as string,
		metadata,
	});
}

/**
 * Splits a cut of money from a given Stripe charge and transfers it to the specified destination account.
 * If the charge ID is provided, the transfer is made from that charge. If the charge ID is null,
 * the transfer is made from the platform account.
 *
 * @param {string|null} charge_id - The ID of the Stripe charge. If null, the transfer is made from the platform account.
 * @param {string} destination_acc - The account ID to which the cut will be transferred.
 * @param {number} destination_cut - The amount (in cents) to be transferred.
 * @param {string} order_id - The ID of the order associated with the transfer.
 * @returns {Promise<Stripe.Transfer>} - A promise that resolves to the transfer object returned by Stripe.
 * @throws {Error} - Throws an error if the transfer fails.
 */
export async function splitCutFromCharge(
	charge_id: string | null,
	destination_acc: string,
	destination_cut: number,
	order_id: string
): Promise<Stripe.Transfer> {
	return charge_id !== null
		? stripe.transfers.create({
				amount: destination_cut,
				currency: 'eur',
				destination: destination_acc,
				source_transaction: charge_id,
				metadata: { order_id },
			})
		: stripe.transfers.create({
				amount: destination_cut,
				currency: 'eur',
				destination: destination_acc,
				metadata: { order_id },
			});
}

/**
 * Payout any available balance to the specified connected account.
 * @param {string} stripe_acc_id - Connected account ID.
 * @returns {Promise<void>}
 */
export async function payoutAvailableBalance(stripe_acc_id: string): Promise<void> {
	if (!stripe_acc_id) throw new Error('Stripe account ID is required');
	const balance = await stripe.balance.retrieve({ stripeAccount: stripe_acc_id });
	const availableAmount = balance.available[0]?.amount ?? 0;
	if (availableAmount > 0) {
		await stripe.payouts.create({ amount: availableAmount, currency: 'eur' }, { stripeAccount: stripe_acc_id });
	}
}

/**
 * Iterate all businesses and payout their available balances.
 * @returns {Promise<void>}
 */
export async function payoutAvailableBalanceToBusinesses(): Promise<void> {
	const business_stripe_ids = (await getStripeIdsForAllBusinesses()) as Array<{ stripe_account_id: string }>;
	for (const business of business_stripe_ids) {
		await payoutAvailableBalance(business.stripe_account_id);
	}
}

/**
 * Create a Stripe product.
 * @param {string} name - Product name.
 * @param {string} description - Product description.
 * @returns {Promise<Stripe.Product>} Stripe Product.
 */
export async function createStripeProduct(name: string, description: string): Promise<Stripe.Product> {
	return stripe.products.create({ name, description });
}

/**
 * Create a Stripe price for a product.
 * @param {string} stripe_product_id - Product ID.
 * @param {number} amount - Unit amount in cents.
 * @param {string} [currency='EUR'] - Currency code.
 * @returns {Promise<Stripe.Price>} Stripe Price.
 */
export async function createStripePrice(
	stripe_product_id: string,
	amount: number,
	currency: string = 'EUR'
): Promise<Stripe.Price> {
	return stripe.prices.create({ product: stripe_product_id, unit_amount: amount, currency });
}

/**
 * Create a Stripe subscription for a customer and price.
 * @param {string} customerId - Customer ID.
 * @param {string} priceId - Price ID.
 * @returns {Promise<Stripe.Subscription>} Subscription.
 */
export async function createStripeSubscription(customerId: string, priceId: string): Promise<Stripe.Subscription> {
	return stripe.subscriptions.create({ customer: customerId, items: [{ price: priceId }] });
}
/**
 * Create a PaymentIntent on Stripe and store a reference in DB for later validation.
 * @param {number} amountInCents - Amount for the PaymentIntent in cents.
 * @returns {Promise<CreatedPaymentIntentRef>}
 */
export async function createAndStorePaymentIntent(amountInCents: number): Promise<CreatedPaymentIntentRef> {
	const pi = await stripe.paymentIntents.create({ amount: amountInCents, currency: 'usd', metadata: {} });
	const dbEntry = await prisma.payment_intent_logs.create({ data: { stripe_id: pi.id } });
	await stripe.paymentIntents.update(pi.id, { metadata: { db_id: dbEntry.payment_intent_logs_id } });
	return { client_secret: pi.client_secret, payment_intent_logs_id: dbEntry.payment_intent_logs_id };
}

/**
 * Validate a Stripe PaymentIntent against the stored DB reference.
 * @param {string} stripeId - PaymentIntent ID.
 * @param {string} expectedDbId - DB id stored on the PaymentIntent metadata.
 * @returns {Promise<Stripe.PaymentIntent>} The validated PaymentIntent.
 */
export async function validatePaymentIntent(stripeId: string, expectedDbId: string): Promise<Stripe.PaymentIntent> {
	const pi = await stripe.paymentIntents.retrieve(stripeId);
	if (!pi || (pi.metadata as Record<string, string | undefined>).db_id !== expectedDbId) {
		throw new Error('Invalid or mismatched PaymentIntent');
	}
	const dbEntry = await prisma.payment_intent_logs.findUnique({ where: { stripe_id: stripeId } });
	if (!dbEntry || dbEntry.payment_intent_logs_id !== expectedDbId) {
		throw new Error('PaymentIntent not found or mismatched in DB');
	}
	if (pi.status !== 'succeeded') {
		throw new Error(`PaymentIntent not paid. Current status: ${pi.status}`);
	}
	if ((pi as Stripe.PaymentIntent).amount_received !== (pi as Stripe.PaymentIntent).amount) {
		throw new Error('PaymentIntent amount received does not match expected amount.');
	}
	return pi;
}
/**
 * Delete a Stripe customer by ID.
 * @param {string} stripeCustomerId - Stripe customer ID.
 * @returns {Promise<Stripe.DeletedCustomer>} Deleted customer object.
 */
export async function deleteStripeCustomer(stripeCustomerId: string): Promise<Stripe.DeletedCustomer> {
	return stripe.customers.del(stripeCustomerId);
}

// Export the underlying Stripe client for low-level use
export { stripe as client };

// Default export to preserve the JS module shape
export default {
	client: stripe,
	createAccount,
	getAccountLinks,
	createAndStorePaymentIntent,
	validatePaymentIntent,
	createCustomer,
	generatePaymentSheetCredentials,
	generateBusinessPaymentSheetCredentials,
	createPaymentIntentForWallet,
	confirmPaymentIntent,
	refundPaymentIntent,
	getPaymentMethods,
	updateCustomerEmail,
	updateCustomerPhone,
	transferToConnectedAccount,
	getBalance,
	checkAccountActive,
	createSplitPayment,
	splitCutFromPaymentIntent,
	splitCutFromCharge,
	payoutAvailableBalanceToBusinesses,
	createPaymentIntentForPlatform,
	createStripeProduct,
	createStripePrice,
	createStripeSubscription,
	createSplittablePayment,
	deleteStripeCustomer,
};
