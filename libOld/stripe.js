import Stripe from 'stripe';
import dotenv from 'dotenv';

import { SERVICE_TYPE } from './constants.js';
import BusinessDao, { getStripeIdsForAllBusinesses } from '../dao/Business.js';
import prisma from '../prisma/prisma.js';
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
/**
 * Retrieve the platform account balance from Stripe.
 * @returns {Promise<object>} Stripe balance object.
 */
async function getBalance() {
	const balance = await stripe.balance.retrieve();
	return balance;
}
/**
 * Create a Stripe connected account for a business.
 * @param {object} business - Business entity with basic company details.
 * @returns {Promise<object>} The created connected account.
 */
async function createAccount(business) {
	const account = await stripe.accounts.create({
		email: business.email,
		business_type: 'company',
		company: {
			name: business.name,
			phone: business.telephone,
			vat_id: business.tax_id,
			registration_number: business.registration_id,
		},
		metadata: {
			business_id: business.business_id,
		},
		controller: {
			fees: {
				payer: 'account',
			},
			losses: {
				payments: 'stripe',
			},
			stripe_dashboard: {
				type: 'full',
			},
			requirement_collection: 'stripe',
		},
	});
	return account;
}
/**
 * Create an onboarding account link for a connected account.
 * @param {string} accountId - Connected account ID.
 * @param {string} business_id - Internal business ID to build return/refresh URLs.
 * @returns {Promise<object>} AccountLink object.
 */
async function getAccountLinks(accountId, business_id) {
	try {
		// const account = await stripe.accounts.retrieve(accountId);
		// if (!account || account.charges_enabled === false) {
		//     throw new Error("The connected account is not in a valid state for onboarding.");
		// }
		const accountLink = await stripe.accountLinks.create({
			account: accountId,
			return_url: `https://api.klikni-web.eu/api/stripe/return/${business_id}`,
			refresh_url: `https://api.klikni-web.eu/api/stripe/generate/${business_id}`,
			type: 'account_onboarding',
		});
		return accountLink;
	} catch (error) {
		console.error('Error creating account link:', error);
		throw new Error('Failed to create account link for onboarding.');
	}
}
/**
 * Create a Stripe customer for a user.
 * @param {string} email - Customer email.
 * @param {string} fullName - Full name.
 * @param {string} phoneNumber - E.164 phone number.
 * @returns {Promise<object>} Stripe customer object.
 */
async function createCustomer(email, fullName, phoneNumber) {
	return await stripe.customers.create({
		name: fullName,
		email: email,
		phone: phoneNumber,
		address: {
			country: 'SI',
		},
	});
}
/**
 * Update a Stripe customer's email.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} email - New email address.
 * @returns {Promise<object>} Updated customer.
 */
async function updateCustomerEmail(customerId, email) {
	return await stripe.customers.update(customerId, {
		email: email,
	});
}
/**
 * Update a Stripe customer's telephone.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} telephone - E.164 phone number.
 * @returns {Promise<object>} Updated customer.
 */
async function updateCustomerPhone(customerId, telephone) {
	return await stripe.customers.update(customerId, {
		phone: telephone,
	});
}
/**
 * Generate PaymentSheet credentials for a given user.
 * @param {object} user - User with stripe_customer_id field.
 * @returns {Promise<{setupIntent:string,ephemeralKey:string,customer:string}>}
 */
async function generatePaymentSheetCredentials(user) {
	if (!user.stripe_customer_id) throw new Error('User does not have a stripe customer id');
	const ephemeralKey = await stripe.ephemeralKeys.create(
		{ customer: user.stripe_customer_id },
		{ apiVersion: '2024-04-10' }
	);
	const setupIntent = await stripe.setupIntents.create({
		customer: user.stripe_customer_id,
		usage: 'off_session',
		// In the latest version of the API, specifying the `automatic_payment_methods` parameter
		// is optional because Stripe enables its functionality by default.
		automatic_payment_methods: {
			enabled: true,
		},
	});
	return {
		setupIntent: setupIntent.client_secret,
		ephemeralKey: ephemeralKey.secret,
		customer: user.stripe_customer_id,
	};
}

/**
 * Generate PaymentSheet credentials for a business customer.
 * @param {string} business_id - Internal business ID.
 * @returns {Promise<{setupIntent:string,ephemeralKey:string,customer:string}>}
 */
async function generateBusinessPaymentSheetCredentials(business_id) {
	const business = await BusinessDao.getBusinessById(business_id);
	const ephemeralKey = await stripe.ephemeralKeys.create(
		{ customer: business.stripe_customer_id },
		{ apiVersion: '2024-04-10' }
	);
	console.log(business, 'business for payment sheet credentials');
	const setupIntent = await stripe.setupIntents.create({
		customer: business.stripe_customer_id,
		usage: 'off_session',
		// In the latest version of the API, specifying the `automatic_payment_methods` parameter
		// is optional because Stripe enables its functionality by default.
		automatic_payment_methods: {
			enabled: true,
		},
	});
	return {
		setupIntent: setupIntent.client_secret,
		ephemeralKey: ephemeralKey.secret,
		customer: business.stripe_customer_id,
	};
}
/**
 * Confirm a PaymentIntent by ID.
 * @param {string} paymentIntentId - Stripe PaymentIntent ID.
 * @returns {Promise<object>} Confirmed PaymentIntent.
 */
async function confirmPaymentIntent(paymentIntentId) {
	return await stripe.paymentIntents.confirm(paymentIntentId);
}
/**
 * Create a wallet top-up PaymentIntent for a user.
 * @param {number} amount - Amount in smallest currency unit (e.g., cents).
 * @param {string} currency - ISO currency code (e.g., 'eur').
 * @param {string} payment_method - Optional payment method ID.
 * @param {string} customerId - Stripe customer ID.
 * @param {string} user_id - Internal user ID for metadata.
 * @param {string} return_url - Optional return URL.
 * @returns {Promise<object>} Created PaymentIntent.
 */
// eslint-disable-next-line no-unused-vars
async function createPaymentIntentForWallet(amount, currency, payment_method, customerId, user_id, _return_url) {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0');
		}
		let payment_intent = await stripe.paymentIntents.create({
			amount: amount,
			currency: currency,
			customer: customerId,
			metadata: {
				user_id: user_id,
				type: 'wallet_topup',
			},
			...(payment_method && { payment_method: payment_method }),
			confirm: false,
			// return_url: return_url,
		});
		// payment_intent = await stripe.paymentIntents.update(payment_intent.id, {
		// 	transfer_group: payment_intent.latest_charge,
		// });
		return payment_intent;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
}
/**
 * Create a platform PaymentIntent with optional metadata.
 * @param {number} amount - Amount in smallest currency unit.
 * @param {string} currency - ISO currency code.
 * @param {string} customerId - Stripe customer ID.
 * @param {object} [metadata={}] - Arbitrary key/values to store on the PaymentIntent.
 * @returns {Promise<object>} Created PaymentIntent.
 */
async function createPaymentIntentForPlatform(amount, currency, customerId, metadata = {}) {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0');
		}
		let payment_intent = await stripe.paymentIntents.create({
			amount: amount,
			currency: currency,
			customer: customerId,
			metadata: metadata,
			confirm: false,
		});
		return payment_intent;
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
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
 * @returns {Promise<object>} Stripe Refund.
 */
async function refundPaymentIntent(paymentIntentId) {
	return await stripe.refunds.create({
		payment_intent: paymentIntentId,
	});
}
/**
 * List saved card payment methods for a customer.
 * @param {string} stripe_customer_id - Stripe customer ID.
 * @returns {Promise<object[]>} Collection of card PaymentMethods.
 */
async function getPaymentMethods(stripe_customer_id) {
	try {
		const paymentMethods = await stripe.customers.listPaymentMethods(stripe_customer_id, { type: 'card' });
		return paymentMethods.data;
	} catch (error) {
		throw new Error(error);
	}
}
/**
 * Transfer funds to a connected account.
 * @param {number} amount - Amount in cents.
 * @param {string} stripeAccountId - Destination connected account ID.
 * @param {string|null} [transferGroup=null] - Optional transfer group identifier.
 * @returns {Promise<object>} Stripe Transfer.
 */
async function transferToConnectedAccount(amount, stripeAccountId, transferGroup = null) {
	try {
		if (amount <= 0) {
			throw new Error('Amount must be greater than 0');
		}
		return await stripe.transfers.create(
			transferGroup
				? {
						amount: amount,
						currency: 'eur',
						destination: stripeAccountId,
						transfer_group: transferGroup,
					}
				: {
						amount: amount,
						currency: 'eur',
						destination: stripeAccountId,
					}
		);
	} catch (error) {
		console.error('Error transferring to connected account:', error);
	}
}
/**
 * Check whether the connected account is active and charge/payout enabled.
 * @param {string} accountId - Connected account ID.
 * @returns {Promise<boolean>} True when active and enabled.
 */
async function checkAccountActive(accountId) {
	try {
		const account = await stripe.accounts.retrieve(accountId);
		console.log('stripe account', account);
		if (!account || !account.id) {
			throw new Error('The connected account does not exist.');
		}
		return account.details_submitted && account.charges_enabled && account.payouts_enabled;
	} catch (error) {
		console.error('Error retrieving account state:', error);
		throw new Error('Failed to retrieve account state: ' + error.message);
	}
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
 * @returns {Promise<object>} Created PaymentIntent.
 */
async function createSplitPayment(
	customer_acc,
	restaurant_acc,
	order_id,
	payment_method,
	total_price,
	merchant_cut,
	return_url,
	type = 'order_payment'
) {
	//transfer_prices, transfer_destinations){
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(total_price),
			currency: 'EUR',
			customer: customer_acc,
			// on_behalf_of: business_stripe_id,
			// application_fee_amount: Math.round(app_fee * 100),
			...(payment_method && { payment_method }),
			// transfer_data: {
			//     destination: business_stripe_id,
			// },
			capture_method: 'manual',
			metadata: {
				order_type: SERVICE_TYPE.DELIVERY,
				order_id: order_id,
				type,
				merchant_cut: `${merchant_cut}`,
			},
			// confirm: true,
			// return_url: return_url,
			transfer_group: order_id,
		});
		// const transferRestaurant = await splitCutFromPaymentIntent(
		//     paymentIntent,
		//     restaurant_acc,
		//     ((total_price-delivery_cost) * (1-RESTAURANT_FEE))
		// );
		return paymentIntent;
	} catch (error) {
		console.log(error);
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
 * @returns {Promise<object>} Created PaymentIntent.
 */
async function createSplittablePayment(
	customer_acc,
	order_id,
	payment_method,
	total_price,
	order_type,
	cuts,
	return_url,
	type = 'order_payment',
	capture_method = 'manual'
) {
	//transfer_prices, transfer_destinations){
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: Math.round(total_price),
			currency: 'EUR',
			customer: customer_acc,
			...(payment_method && { payment_method }),
			capture_method,
			metadata: {
				order_type: order_type,
				order_id: order_id,
				type,
				...(cuts ? cuts : {}),
			},
			// return_url: return_url,
			transfer_group: order_id,
		});
		return paymentIntent;
	} catch (error) {
		console.error(error);
		throw new Error('Error in createSplittablePayment: ', error);
	}
}

/**
 * Transfer a portion from a succeeded PaymentIntent to a connected account.
 * @param {object} paymentIntent - Stripe PaymentIntent.
 * @param {string} destination_acc - Destination connected account ID.
 * @param {number} destination_cut - Amount in cents to transfer.
 * @param {object} [metadata={}] - Transfer metadata.
 * @returns {Promise<object>} Stripe Transfer.
 */
async function splitCutFromPaymentIntent(paymentIntent, destination_acc, destination_cut, metadata = {}) {
	console.info('PI when splitting: ', paymentIntent);
	if (paymentIntent.status === 'succeeded' && paymentIntent.latest_charge) {
		try {
			const transfer = await stripe.transfers.create({
				amount: destination_cut,
				currency: 'eur',
				destination: destination_acc,
				source_transaction: paymentIntent.latest_charge,
				metadata: metadata,
			});
			return transfer;
		} catch (error) {
			throw new Error(`Error transferring split from payment intent: ${error}`);
		}
	} else {
		throw new Error('Error transferring split from payment intent. Invalid status or missing charge.');
	}
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
 * @returns {Promise<Object>} - A promise that resolves to the transfer object returned by Stripe.
 * @throws {Error} - Throws an error if the transfer fails.
 */
async function splitCutFromCharge(charge_id, destination_acc, destination_cut, order_id) {
	try {
		const transfer =
			charge_id !== null
				? await stripe.transfers.create({
						amount: destination_cut,
						currency: 'eur',
						destination: destination_acc,
						source_transaction: charge_id,
						metadata: {
							order_id: order_id,
						},
					})
				: await stripe.transfers.create({
						amount: destination_cut,
						currency: 'eur',
						destination: destination_acc,
						metadata: {
							order_id: order_id,
						},
					});
		return transfer;
	} catch (error) {
		throw new Error(`Error transferring split from charge: ${error}`);
	}
}
/**
 * Payout any available balance to the specified connected account.
 * @param {string} stripe_acc_id - Connected account ID.
 * @returns {Promise<void>}
 */
async function payoutAvailableBalance(stripe_acc_id) {
	try {
		if (!stripe_acc_id) {
			throw new Error('Stripe account ID is required');
		}
		// Fetch available balance for the Stripe account
		const balance = await stripe.balance.retrieve({
			stripeAccount: stripe_acc_id,
		});
		const availableAmount = balance.available[0]?.amount;
		if (availableAmount > 0) {
			const payout = await stripe.payouts.create(
				{
					amount: availableAmount,
					currency: 'eur',
				},
				{
					stripeAccount: stripe_acc_id,
				}
			);
			console.log('Payout created:', payout);
		} else {
			console.log('No available balance for payout.');
		}
	} catch (error) {
		console.error('Error during payout process:', error);
	}
}
/**
 * Iterate all businesses and payout their available balances.
 * @returns {Promise<void>}
 */
async function payoutAvailableBalanceToBusinesses() {
	try {
		const business_stripe_ids = await getStripeIdsForAllBusinesses();
		for (const business of business_stripe_ids) {
			await payoutAvailableBalance(business.stripe_account_id);
		}
	} catch (e) {
		console.error('Error during payout process:', e);
	}
}
/**
 * Create a Stripe product.
 * @param {string} name - Product name.
 * @param {string} description - Product description.
 * @returns {Promise<object>} Stripe Product.
 */
async function createStripeProduct(name, description) {
	try {
		return await stripe.products.create({
			name: name,
			description: description,
		});
	} catch (error) {
		console.error('Error creating Stripe product:', error);
		throw new Error('Failed to create Stripe product.');
	}
}
/**
 * Create a Stripe price for a product.
 * @param {string} stripe_product_id - Product ID.
 * @param {number} amount - Unit amount in cents.
 * @param {string} [currency='EUR'] - Currency code.
 * @returns {Promise<object>} Stripe Price.
 */
async function createStripePrice(stripe_product_id, amount, currency = 'EUR') {
	try {
		return await stripe.prices.create({
			product: stripe_product_id,
			unit_amount: amount,
			currency: currency,
		});
	} catch (error) {
		console.error('Error creating Stripe price:', error);
		throw new Error('Failed to create Stripe price.');
	}
}
/**
 * Create a Stripe subscription for a customer and price.
 * @param {string} customerId - Customer ID.
 * @param {string} priceId - Price ID.
 * @returns {Promise<object>} Subscription.
 */
async function createStripeSubscription(customerId, priceId) {
	try {
		return await stripe.subscriptions.create({
			customer: customerId,
			items: [{ price: priceId }],
		});
	} catch (error) {
		console.error('Error creating Stripe subscription:', error);
		throw new Error('Failed to create Stripe subscription.');
	}
}
/**
 * Create a PaymentIntent on Stripe and store a reference in DB for later validation.
 * @param {number} amountInCents - Amount for the PaymentIntent in cents.
 * @returns {Promise<{client_secret:string,payment_intent_logs_id:string}>}
 */
async function createAndStorePaymentIntent(amountInCents) {
	const pi = await stripe.paymentIntents.create({
		amount: amountInCents,
		currency: 'usd',
		metadata: {},
	});
	const dbEntry = await prisma.payment_intent_logs.create({
		data: {
			stripe_id: pi.id,
		},
	});
	await stripe.paymentIntents.update(pi.id, {
		metadata: { db_id: dbEntry.payment_intent_logs_id },
	});
	return {
		client_secret: pi.client_secret,
		payment_intent_logs_id: dbEntry.payment_intent_logs_id,
	};
}
/**
 * Validate a Stripe PaymentIntent against the stored DB reference.
 * @param {string} stripeId - PaymentIntent ID.
 * @param {string} expectedDbId - DB id stored on the PaymentIntent metadata.
 * @returns {Promise<object>} The validated PaymentIntent.
 */
async function validatePaymentIntent(stripeId, expectedDbId) {
	const pi = await stripe.paymentIntents.retrieve(stripeId);
	if (!pi || pi.metadata.db_id !== expectedDbId) {
		throw new Error('Invalid or mismatched PaymentIntent');
	}
	const dbEntry = await prisma.payment_intent_logs.findUnique({
		where: { stripe_id: stripeId },
	});
	if (!dbEntry || dbEntry.payment_intent_logs_id !== expectedDbId) {
		throw new Error('PaymentIntent not found or mismatched in DB');
	}
	if (!pi) {
		throw new Error('PaymentIntent not found.');
	}
	if (pi.status !== 'succeeded') {
		throw new Error(`PaymentIntent not paid. Current status: ${pi.status}`);
	}
	if (pi.amount_received !== pi.amount) {
		throw new Error('PaymentIntent amount received does not match expected amount.');
	}
	return pi;
}
export { stripe as client };
export { createAccount };
export { getAccountLinks };
export { createAndStorePaymentIntent };
export { validatePaymentIntent };
export { createCustomer };
export { generatePaymentSheetCredentials };
export { createPaymentIntentForWallet };
export { confirmPaymentIntent };
export { refundPaymentIntent };
export { getPaymentMethods };
export { updateCustomerEmail };
export { updateCustomerPhone };
export { transferToConnectedAccount };
export { getBalance };
export { checkAccountActive };
export { createSplitPayment };
export { splitCutFromPaymentIntent };
export { splitCutFromCharge };
export { payoutAvailableBalanceToBusinesses };
export { createPaymentIntentForPlatform };
export { createStripeProduct };
export { createStripePrice };
export { createStripeSubscription };
export { createSplittablePayment };
export { generateBusinessPaymentSheetCredentials };
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
};
