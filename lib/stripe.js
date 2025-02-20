const { UserDefinedMessageInstance } = require('twilio/lib/rest/api/v2010/account/call/userDefinedMessage');
const {RESTAURANT_FEE} = require('./constants');
const Stripe = require('stripe');
const dotenv = require('dotenv');
dotenv.config();
const { getStripeIdsForAllBusinesses } = require("../dao/Business");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const prisma = require("../prisma/prisma")
async function getBalance()
{
    const balance = await stripe.balance.retrieve();
    return balance;
}
async function createAccount(business) {
    const account = await stripe.accounts.create({
        email: business.email,
        business_type: "company",
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
            requirement_collection: "stripe"
        },
    });
    return account
}

async function getAccountLinks(accountId) {
    try {
        // const account = await stripe.accounts.retrieve(accountId);
        // if (!account || account.charges_enabled === false) {
        //     throw new Error("The connected account is not in a valid state for onboarding.");
        // }
        const accountLink = await stripe.accountLinks.create({
            account: accountId,
            return_url: `http://localhost:3001/return/${accountId}`,
            refresh_url: `http://localhost:3001/refresh/${accountId}`,
            type: "account_onboarding",
        });
        return accountLink;
    } catch (error) {
        console.error("Error creating account link:", error);
        throw new Error("Failed to create account link for onboarding.");
    }
}

async function createCustomer(email, fullName, phoneNumber) {
    return await stripe.customers.create({
        name: fullName,
        email: email,
        phone: phoneNumber
      });
}
async function updateCustomerEmail(customerId, email) {
    return await stripe.customers.update(customerId, {
        email: email
    });

}
async function updateCustomerPhone(customerId, telephone) {
    return await stripe.customers.update(customerId, {
        phone: telephone
    });

}
async function generatePaymentSheetCredentials(user, nonce) {
    if (!user.stripe_customer_id) throw new Error("User does not have a stripe customer id");
    const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: user.stripe_customer_id},
        {apiVersion: '2024-04-10'}
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
    return{
        setupIntent: setupIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: user.stripe_customer_id,
    }
}
async function confirmPaymentIntent(paymentIntentId) {
    return await stripe.paymentIntents.confirm(paymentIntentId);
}
async function createPaymentIntentForWallet(amount, currency, payment_method, customerId, user_id, return_url) {
    try {
        if(amount<=0){
            throw new Error("Amount must be greater than 0");
        }
        let payment_intent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            customer: customerId,
            metadata: {
                user_id: user_id,
                type: "wallet_topup"
            },
            ...(payment_method) && {payment_method: payment_method},
            confirm: true,
            return_url: return_url
        });
        payment_intent = await stripe.paymentIntents.update(payment_intent.id,{
            transfer_group: payment_intent.latest_charge
        });
        return payment_intent;
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

async function createPaymentIntentForPlatform(amount, currency, customerId, metadata = {}) {
    try {
        if(amount<=0){
            throw new Error("Amount must be greater than 0");
        }
        let payment_intent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            customer: customerId,
            metadata: metadata,
            confirm: false,
        });
        return payment_intent;
    }
    catch (error) {
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
async function refundPaymentIntent(paymentIntentId) {
    return await stripe.refunds.create({
        payment_intent: paymentIntentId,
    });
}

async function getPaymentMethods(stripe_customer_id) {
    try {
        const paymentMethods = await stripe.paymentMethods.list({
            customer: stripe_customer_id,
            type: 'card',
        });
        return paymentMethods.data;
    } catch (error) {
       throw new Error(error);
    }
}

async function transferToConnectedAccount(amount, stripeAccountId, transferGroup=null) {
    try{
        if(amount<=0){
            throw new Error("Amount must be greater than 0");
        }
        return await stripe.transfers.create(
            transferGroup ? {
                    amount: amount,
                    currency: "eur",
                    destination: stripeAccountId,
                    transfer_group: transferGroup
                } :
                {
                    amount: amount,
                    currency: "eur",
                    destination: stripeAccountId
                }
        );
    }catch (error){
        console.error("Error transferring to connected account:", error);
    }
}

async function checkAccountActive(accountId) {
    try {
        const account = await stripe.accounts.retrieve(accountId);
        console.log("stripe account", account);
        if (!account || !account.id) {
            throw new Error("The connected account does not exist.");
        }
        return account.details_submitted && account.charges_enabled && account.payouts_enabled;
    } catch (error) {
        console.error("Error retrieving account state:", error);
        throw new Error("Failed to retrieve account state: " + error.message);
    }
}

async function createSplitPayment(customer_acc, restaurant_acc, order_id, payment_method,total_price, delivery_cost, return_url){//transfer_prices, transfer_destinations){
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round((total_price) * 100),
            currency: "EUR",
            customer: customer_acc,
            // on_behalf_of: business_stripe_id,
            // application_fee_amount: Math.round(app_fee * 100),
            payment_method: payment_method,
            // transfer_data: {
            //     destination: business_stripe_id,
            // },
            capture_method: 'manual',
            metadata: {
                order_id: order_id,
                type: "order_payment",
                merchant_cut: `${((total_price-delivery_cost) * (1-RESTAURANT_FEE))}`
            },
            // confirm: true,
            // return_url: return_url,
            transfer_group: order_id
        });

        // const transferRestaurant = await splitCutFromPaymentIntent(
        //     paymentIntent,
        //     restaurant_acc,
        //     ((total_price-delivery_cost) * (1-RESTAURANT_FEE))
        // );
        return paymentIntent
    }catch (error){
        console.log(error)
    }
}

async function splitCutFromPaymentIntent(paymentIntent, destination_acc, destination_cut){
    console.info(paymentIntent)
    if(paymentIntent.status==="succeeded" && paymentIntent.latest_charge){
        try{
            const transfer = stripe.transfers.create({
                amount: Math.round(destination_cut*100),
                currency: "eur",
                destination: destination_acc,
                source_transaction: paymentIntent.latest_charge,
            });
            return transfer
        }catch (error){
            throw new Error(`Error transferring split from payment intent: ${error}` );
        }
    }else{
        throw new Error("Error transferring split from payment intent. Invalid status or missing charge.");
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
async function splitCutFromCharge(charge_id, destination_acc, destination_cut, order_id){
    try{
        const transfer = charge_id!==null ?
            await stripe.transfers.create({
                amount: destination_cut,
                currency: "eur",
                destination: destination_acc,
                source_transaction: charge_id,
                metadata: {
                    order_id:order_id,
                }
            }) :
            await stripe.transfers.create({
                amount: destination_cut,
                currency: "eur",
                destination: destination_acc,
                metadata: {
                    order_id:order_id,
                }
            })
        return transfer
    }catch (error){
        throw new Error(`Error transferring split from charge: ${error}` );
    }
}

async function payoutAvailableBalance(stripe_acc_id) {
    try {
        if(!stripe_acc_id) {
            throw new Error("Stripe account ID is required");
        }

        // Fetch available balance for the Stripe account
        const balance = await stripe.balance.retrieve({
            stripeAccount: stripe_acc_id
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

async function payoutAvailableBalanceToBusinesses() {
    try {
        const business_stripe_ids = await getStripeIdsForAllBusinesses();

        for (const business of business_stripe_ids) {
            await payoutAvailableBalance(business.stripe_account_id);
        }
    } catch (e) {
        console.error("Error during payout process:", e);
    }
}

async function createStripeProduct(name, description) {
    try {
        return await stripe.products.create({
            name: name,
            description: description,
        });
    } catch (error) {
        console.error("Error creating Stripe product:", error);
        throw new Error("Failed to create Stripe product.");
    }
}

async function createStripePrice(stripe_product_id, amount, currency = "EUR") {

    try {
        return await stripe.prices.create({
            product: stripe_product_id,
            unit_amount: amount,
            currency: currency,
        });
    } catch (error) {
        console.error("Error creating Stripe price:", error);
        throw new Error("Failed to create Stripe price.");
    }
}

async function createStripeSubscription(customerId, priceId) {
    try {
        return await stripe.subscriptions.create({
            customer: customerId,
            items: [{price: priceId}],
        });
    } catch (error) {
        console.error("Error creating Stripe subscription:", error);
        throw new Error("Failed to create Stripe subscription.");
    }
}

module.exports = {
    client: stripe,
    createAccount,
    getAccountLinks,
    createCustomer,
    generatePaymentSheetCredentials,
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
    createStripeSubscription
}