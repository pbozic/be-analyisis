import prisma from '../prisma/prisma.js';
import { client as stripe } from '../lib/stripe.js';
import BusinessUserDao from './BusinessUsers.js';
import BusinessDao from './Business.js';
import {
	TranslationItem,
	WordDetail,
	WordBase,
	WordBuyItemDetail,
	CreateWordBuySubscriptionResponse,
	UpdateUserSubscriptionResponse,
} from '../schemas/dto/Word/word.dto.js';
import { WordBuyItem, UpdateSingleWordBuyRequest } from '../schemas/dto/Word/word.validators.js';
/**
 * Create a new word with its translations.
 *
 * @param {string} word
 * @param {string} category_id
 * @param {TranslationItem[]} translations
 * @returns {Promise<WordDetail>} Newly created word with translations.
 */
async function createWord(word: string, category_id: string, translations: TranslationItem[]): Promise<WordDetail> {
	// Create a new translatable record
	let translatable = await prisma.translatable.create({ data: {} });
	// Create the word with its relationships
	let new_word: WordDetail = await prisma.words.create({
		data: {
			word: word,
			popularity: 0,
			category: { connect: { categories_id: category_id } },
			translatable: { connect: { translatable_id: translatable.translatable_id } },
		},
		include: { translatable: true, category: true },
	});
	// Create translations
	let translats: TranslationItem[] = [];
	for (let translation of translations) {
		let trans = await prisma.translations.create({
			data: {
				translation: translation.translation,
				language: translation.language,
				translatable: { connect: { translatable_id: translatable.translatable_id } },
			},
		});
		translats.push(trans);
	}
	new_word.translations = translats;
	return new_word;
}
/**
 * Update an existing word and its translations.
 *
 * @param {string} id
 * @param {string} word
 * @param {string} categories_id
 * @param {TranslationItem[]} translations
 * @returns {Promise<WordDetail>} Updated word with translations.
 */
async function updateWord(
	id: string,
	word: string,
	categories_id: string,
	translations: TranslationItem[]
): Promise<WordDetail> {
	const existingWord: WordBase = await prisma.words.findUnique({
		where: { word_id: id },
		include: { translatable: true },
	});
	if (!existingWord) throw new Error('Word not found');
	const updatedWord: WordDetail = await prisma.words.update({
		where: { word_id: id },
		data: {
			word,
			...(categories_id ? { category: { connect: { categories_id: categories_id } } } : {}),
		},
		include: { category: true, translatable: true },
	});
	if (translations && translations.length > 0) {
		await prisma.translations.deleteMany({ where: { translatable_id: existingWord.translatable_id } });
		let translats: TranslationItem[] = [];
		for (let translation of translations) {
			let trans = await prisma.translations.create({
				data: {
					translation: translation.translation,
					language: translation.language,
					translatable: { connect: { translatable_id: existingWord.translatable_id } },
				},
			});
			translats.push(trans);
		}
		updatedWord.translations = translats;
	}
	return updatedWord;
}
/**
 * Delete a word by id.
 *
 * @param {string} id
 * @returns {Promise<unknown>} Deleted word.
 */
async function deleteWord(id: string): Promise<unknown> {
	return await prisma.words.delete({ where: { word_id: id } });
}
/**
 * Get a word by id.
 *
 * @param {string} id
 * @returns {Promise<WordDetail>} Found word.
 */
async function getWordById(id: string): Promise<WordDetail> {
	try {
		let word: any = await prisma.words.findUnique({
			where: { word_id: id },
			include: {
				translatable: { include: { translations: true } },
				category: true,
			},
		});
		if (!word) throw new Error('Word not found');
		word.translations = word.translatable.translations;
		delete word.translatable;
		return word;
	} catch (error) {
		console.error('Error getting word by ID:', error);
		throw new Error('Failed to get word');
	}
}
/**
 * Get all words with their translations and categories.
 *
 * @returns {Promise<WordDetail[]>} List of words with translations and categories.
 */
async function getAllWords(): Promise<WordDetail[]> {
	try {
		let words: any[] = await prisma.words.findMany({
			include: { translatable: { include: { translations: true } }, category: true },
		});
		for (let word of words) {
			word.translations = word.translatable.translations;
			delete word.translatable;
		}
		return words;
	} catch (error) {
		console.error('Error getting words:', error);
		throw new Error('Failed to get words');
	}
}
/** Get all words by category.
 *
 * @param {string} category
 * @returns {Promise<WordBase[]>} List of words in the category.
 */
async function getAllWordsByCategory(category: string): Promise<WordBase[]> {
	return await prisma.words.findMany({
		where: { category: { category_id: category } },
	});
}
/**
 * Remove category from a word.
 *
 * @param {string} id
 * @returns {Promise<WordBase>} Updated word.
 */
async function removeCategoryFromWord(id: string): Promise<WordBase> {
	return await prisma.words.update({
		where: { word_id: id },
		data: { category: { disconnect: true } },
	});
}
/**
 * Add category to a word.
 *
 * @param {string} id
 * @param {string} category
 * @returns {Promise<WordBase>} Updated word.
 */
async function addCategoryToWord(id: string, category: string): Promise<WordBase> {
	const word = await getWordById(id);
	if (word.category) {
		await removeCategoryFromWord(id);
	}
	return await prisma.words.update({
		where: { word_id: id },
		data: { category: { connect: { category_id: category } } },
	});
}

// =======================
// Word Buy
// =======================

/**
 * Create a word buy entry.
 *
 * @param {object} args
 * @returns {Promise<WordBuyItem>} Created word buy.
 */
async function createWordBuy(args: {
	word_id: string;
	business_id: string;
	price: number;
	stripe_subscription_id?: string | null;
}): Promise<WordBuyItem> {
	return await prisma.word_buy.create({
		data: {
			word: { connect: { word_id: args.word_id } },
			business: { connect: { business_id: args.business_id } },
			price: args.price,
			stripe_subscription_id: args.stripe_subscription_id || null,
		},
	});
}
/**
 * Update user subscription based on active word buys.
 *
 * @param {string} userId
 * @param {string} business_id
 * @returns {Promise<object>} Update result.
 */
export async function updateUserSubscription(
	userId: string,
	business_id?: string
): Promise<UpdateUserSubscriptionResponse> {
	try {
		const businessUser = await BusinessUserDao.getBusinessUserByUserId(userId);
		const business = await BusinessDao.getBusinessById(business_id || (businessUser as any)?.business_id);
		if (!business) throw new Error('Business not found');
		if (!(business as any).stripe_customer_id) throw new Error('User does not have a Stripe customer ID');

		const wordBuys = await getActiveWordBuysByBusiness((business as any).business_id);

		// No active word buys → cancel sub if exists
		if (!wordBuys || wordBuys.length === 0) {
			if ((business as any).word_buy_stripe_subscription_id) {
				await stripe.subscriptions.update((business as any).word_buy_stripe_subscription_id, {
					cancel_at_period_end: true,
				});
				await prisma.business.update({
					where: { business_id: (business as any).business_id },
					data: { word_buy_stripe_subscription_id: null },
				});
				await prisma.word_buy.updateMany({
					where: { business_id: (business as any).business_id },
					data: { stripe_subscription_id: null },
				});
			}
			return { success: true, subscriptionId: '', paymentRequired: false, clientSecret: null };
		}

		// Build items, detect ups/downs
		const subscriptionItems: Array<{ price: string; quantity: number }> = [];
		const nextPhaseItems: Array<{ price: string; quantity: number }> = [];
		let hasUpgrades = false;

		for (const wb of wordBuys as any[]) {
			const newAmount = Math.round((wb as any).price * 100);
			let currentPrice: any = null;

			if ((wb as any).stripe_price_id) {
				try {
					currentPrice = await stripe.prices.retrieve((wb as any).stripe_price_id);
				} catch {
					currentPrice = null;
				}
			}

			const createPrice = async (amount: number) => {
				const idemKey = `wb_${(wb as any).word_buy_id}_${amount}`;
				return stripe.prices.create(
					{
						unit_amount: amount,
						currency: 'eur',
						recurring: { interval: 'month' },
						product_data: { name: `Klikni Word: ${(wb as any).word.word}` },
						metadata: { word_buy_id: (wb as any).word_buy_id },
					},
					{ idempotencyKey: idemKey }
				);
			};

			const currentUnit = currentPrice?.unit_amount ?? null;

			if (currentUnit === null || currentUnit !== newAmount) {
				if (currentUnit === null || newAmount > currentUnit) {
					const newPrice = await createPrice(newAmount);
					await prisma.word_buy.update({
						where: { word_buy_id: (wb as any).word_buy_id },
						data: {
							stripe_price_id: newPrice.id,
							price: (wb as any).price,
							pending_price: null,
							pending_stripe_price_id: null,
						},
					});
					subscriptionItems.push({ price: newPrice.id, quantity: 1 });
					hasUpgrades = true;
				} else {
					const downgradePrice = await createPrice(newAmount);
					await prisma.word_buy.update({
						where: { word_buy_id: (wb as any).word_buy_id },
						data: { pending_price: (wb as any).price, pending_stripe_price_id: downgradePrice.id },
					});
					if (currentPrice?.id) {
						subscriptionItems.push({ price: currentPrice.id, quantity: 1 });
					} else {
						subscriptionItems.push({ price: downgradePrice.id, quantity: 1 });
					}
					nextPhaseItems.push({ price: downgradePrice.id, quantity: 1 });
				}
			} else {
				subscriptionItems.push({ price: currentPrice.id, quantity: 1 });
			}
		}

		let subscription: any;
		let clientSecret: string | null = null;
		let paymentRequired = false;

		if ((business as any).word_buy_stripe_subscription_id) {
			const currentSub: any = await stripe.subscriptions.retrieve(
				(business as any).word_buy_stripe_subscription_id,
				{ expand: ['latest_invoice.payment_intent', 'items.data.price'] }
			);

			if (nextPhaseItems.length > 0) {
				await stripe.subscriptionSchedules.create({
					customer: (business as any).stripe_customer_id,
					start_date: Math.floor(Date.now() / 1000),
					end_behavior: 'release',
					phases: [
						{
							items: subscriptionItems,
							start_date: currentSub.current_period_start,
							end_date: currentSub.current_period_end,
							proration_behavior: 'none',
						},
						{ items: nextPhaseItems, proration_behavior: 'none' },
					],
					metadata: { business_id: (business as any).business_id, word_buy_schedule: 'true' },
				});
				subscription = currentSub;
			} else {
				const deleteOps = currentSub.items.data.map((i: any) => ({ id: i.id, deleted: true }));
				const updated = await stripe.subscriptions.update(currentSub.id, {
					items: [...deleteOps, ...subscriptionItems],
					proration_behavior: hasUpgrades ? 'create_prorations' : 'none',
					expand: ['latest_invoice.payment_intent'],
				});
				subscription = updated;

				if (hasUpgrades && subscription.latest_invoice?.id) {
					let invoice: any = await stripe.invoices.retrieve(subscription.latest_invoice.id, {
						expand: ['payment_intent'],
					});
					if (invoice.status === 'draft') {
						invoice = await stripe.invoices.finalizeInvoice(invoice.id, { expand: ['payment_intent'] });
					}
					if (invoice.status === 'open') {
						const pi: any = invoice.payment_intent || null;
						if (pi && (pi.status === 'requires_action' || pi.status === 'requires_payment_method')) {
							paymentRequired = true;
							clientSecret = pi.client_secret || null;
						} else if (invoice.collection_method === 'charge_automatically') {
							try {
								await stripe.invoices.pay(invoice.id);
							} catch (e: any) {
								const epi = e?.raw?.payment_intent;
								if (
									epi &&
									(epi.status === 'requires_action' || epi.status === 'requires_payment_method')
								) {
									paymentRequired = true;
									clientSecret = epi.client_secret || null;
								} else {
									console.error('Invoice payment error:', e);
									throw new Error('Invoice payment failed');
								}
							}
						}
					}
				}
			}
		} else {
			subscription = await stripe.subscriptions.create({
				customer: (business as any).stripe_customer_id,
				items: subscriptionItems,
				payment_behavior: 'default_incomplete',
				collection_method: 'charge_automatically',
				proration_behavior: 'none',
				expand: ['latest_invoice.payment_intent'],
				metadata: { business_id: (business as any).business_id, type: 'word_buys' },
			});

			await prisma.business.update({
				where: { business_id: (business as any).business_id },
				data: { word_buy_stripe_subscription_id: subscription.id },
			});

			const pi: any = subscription.latest_invoice?.payment_intent;
			if (pi && (pi.status === 'requires_action' || pi.status === 'requires_payment_method')) {
				paymentRequired = true;
				clientSecret = pi.client_secret || null;
			}
		}

		await prisma.word_buy.updateMany({
			where: {
				business_id: (business as any).business_id,
				deleted_at: null,
				OR: [{ expires_at: null }, { expires_at: { gt: new Date() } }],
			},
			data: { stripe_subscription_id: subscription.id },
		});

		return { success: true, subscriptionId: subscription.id, paymentRequired, clientSecret };
	} catch (err: any) {
		console.error('❌ updateUserSubscription failed:', err);
		return { success: false, error: err?.message || 'Unknown error' };
	}
}
/**
 * Create word buy subscription for a set of words.
 *
 * @param {WordBuyItem[]} words
 * @param {string} business_id
 * @param {string} userId
 * @returns {Promise<object>} Subscription result.
 */
export async function createWordBuySubscription(
	words: WordBuyItem[],
	business_id: string,
	userId: string
): Promise<CreateWordBuySubscriptionResponse> {
	try {
		const business = await prisma.business.findUnique({ where: { business_id } });
		if (!(business as any)?.stripe_customer_id) {
			throw new Error('Business has no Stripe customer on file');
		}

		const now = new Date();
		const wordBuys = await Promise.all(
			words.map(async ({ word_id, price }) => {
				try {
					const last = await prisma.word_buy.findFirst({
						where: { word_id, business_id, deleted_at: null },
						orderBy: { created_at: 'desc' },
					});
					const subId =
						(last as any)?.stripe_subscription_id ||
						(business as any).word_buy_stripe_subscription_id ||
						null;
					if (last && (!(last as any).expires_at || (last as any).expires_at > now)) {
						await prisma.word_buy.update({
							where: { word_buy_id: (last as any).word_buy_id },
							data: { expires_at: now, stripe_subscription_id: null },
						});
					}
					return await prisma.word_buy.create({
						data: {
							word: { connect: { word_id } },
							business: { connect: { business_id } },
							price,
							stripe_subscription_id: subId,
						},
					});
				} catch (error) {
					console.error('Error creating word_buy:', error);
					throw error;
				}
			})
		);

		let reusedSubscription = false;
		let result: UpdateUserSubscriptionResponse;

		if ((business as any).word_buy_stripe_subscription_id) {
			console.log('🔁 Existing subscription found. Updating...');
			reusedSubscription = true;
			result = await updateUserSubscription(userId, business_id);
		} else {
			result = await updateUserSubscription(userId, business_id);
		}

		if ((result as any)?.subscriptionId)
			console.log('✅ Subscription active/updated:', (result as any).subscriptionId);

		return {
			wordBuyIds: wordBuys.map((wb: any) => wb.word_buy_id),
			subscriptionId: (result as any).subscriptionId,
			clientSecret: (result as any).clientSecret,
			paymentRequired: (result as any).paymentRequired,
			reusedSubscription,
		};
	} catch (err: any) {
		console.error('❌ createWordBuySubscription error:', err);
		throw new Error(err.message);
	}
}
/**
 * Add Stripe subscription ID to word buy.
 *
 * @param {string} id
 * @param {string} stripe_subscription_id
 * @returns {Promise<WordBuyItem>} Updated word buy.
 */
async function addStripeSubToWordBuy(id: string, stripe_subscription_id: string): Promise<WordBuyItem> {
	return await prisma.word_buy.update({ where: { word_buy_id: id }, data: { stripe_subscription_id } });
}
/** Get a word buy by id.
 *
 * @param {string} id
 * @returns {Promise<WordBuyItemDetail | null>} Found word buy.
 */
async function getWordBuyById(id: string): Promise<WordBuyItemDetail | null> {
	const wb = await prisma.word_buy.findUnique({ where: { word_buy_id: id } });
	if (!wb) return null;
	wb.translations = wb.translatable.translations;
	delete wb.translatable;
	return wb;
}
/**
 * Get all word buys.
 *
 * @returns {Promise<WordBuyItemDetail[]>} Found word buys.
 */
async function getAllWordBuys(): Promise<WordBuyItemDetail[]> {
	const wbs = await prisma.word_buy.findMany();
	for (let wb of wbs) {
		if (wb.word?.translatable?.translations) {
			wb.word.translations = wb.word.translatable.translations;
			delete wb.word.translatable;
		}
	}
	return wbs;
}
/**
 * Get all word buys by word.
 *
 * @param {string} word
 * @returns {Promise<WordBuyItemDetail[]>} Found word buys.
 */
async function getAllWordBuysByWord(word: string): Promise<WordBuyItemDetail[]> {
	const wbs: WordBuyItemDetail[] = await prisma.word_buy.findMany({ where: { word: { word_id: word } } });
	for (let wb of wbs) {
		if (wb.word?.translatable?.translations) {
			wb.word.translations = wb.word.translatable.translations;
			delete wb.word.translatable;
		}
	}
	return wbs;
}
/** * Get all word buys by business.
 *
 * @param {string} business
 * @param {object} whereObj
 * @returns {Promise<WordBuyItemDetail[]>} Found word buys.
 */
async function getAllWordBuysByBusiness(business: string, whereObj: any = {}): Promise<WordBuyItemDetail[]> {
	const wbs: WordBuyItemDetail[] = await prisma.word_buy.findMany({
		where: { business: { business_id: business }, ...whereObj },
		include: {
			word: { include: { translatable: { include: { translations: true } } } },
		},
	});
	for (let wb of wbs) {
		if (wb.word?.translatable?.translations) {
			wb.word.translations = wb.word.translatable.translations;
			delete wb.word.translatable;
		}
	}
	return wbs;
}
/**
 * Get active word buys by business.
 *
 * @param {string} business
 * @returns {Promise<WordBuyItemDetail[]>} Found word buys.
 */
async function getActiveWordBuysByBusiness(business: string): Promise<WordBuyItemDetail[]> {
	const now = new Date();
	const wbs: WordBuyItemDetail[] = await prisma.word_buy.findMany({
		where: {
			business: { business_id: business },
			deleted_at: null,
			OR: [{ expires_at: null }, { expires_at: { gt: now } }],
		},
		include: {
			word: { include: { translatable: { include: { translations: true } } } },
		},
	});
	for (let wb of wbs) {
		if (wb.word?.translatable?.translations) {
			wb.word.translations = wb.word.translatable.translations;
			delete wb.word.translatable;
		}
	}
	return wbs;
}
/** Delete a word buy (soft delete).
 *
 * @param {string} word_buy_id
 * @returns {Promise<WordBuyItem>} Updated word buy.
 */
async function deleteWordBuy(word_buy_id: string): Promise<WordBuyItem> {
	return await prisma.word_buy.update({
		where: { word_buy_id: word_buy_id },
		data: { stripe_subscription_id: null, deleted_at: new Date() },
	});
}
/** Update a word buy.
 *
 * @param {string} id
 * @param {UpdateSingleWordBuyRequest} data
 * @returns {Promise<WordBuyItem>} Updated word buy.
 */
async function updateWordBuy(id: string, data: UpdateSingleWordBuyRequest): Promise<WordBuyItem> {
	return await prisma.word_buy.update({ where: { word_buy_id: id }, data: { ...data } });
}

export { createWord };
export { updateWord };
export { deleteWord };
export { getWordById };
export { getAllWords };
export { getAllWordsByCategory };
export { createWordBuy };
export { addStripeSubToWordBuy };
export { getWordBuyById };
export { getAllWordBuys };
export { getAllWordBuysByWord };
export { getAllWordBuysByBusiness };
export { getActiveWordBuysByBusiness };
export { removeCategoryFromWord };
export { addCategoryToWord };
export { deleteWordBuy };
export { updateWordBuy };

export default {
	createWord,
	updateWord,
	deleteWord,
	getWordById,
	getAllWords,
	getAllWordsByCategory,
	createWordBuy,
	addStripeSubToWordBuy,
	getWordBuyById,
	getAllWordBuys,
	getAllWordBuysByWord,
	getAllWordBuysByBusiness,
	getActiveWordBuysByBusiness,
	removeCategoryFromWord,
	addCategoryToWord,
	createWordBuySubscription,
	updateUserSubscription,
	deleteWordBuy,
	updateWordBuy,
};
