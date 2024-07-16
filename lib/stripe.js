const { UserDefinedMessageInstance } = require('twilio/lib/rest/api/v2010/account/call/userDefinedMessage');

const stripe = require('stripe')('sk_test_51PU87JI9NRgffbADhlN4ejn2TKtC3mnQi8SUGZgGSD0wPbF83UVqaePyFlaJyxUb8AvcSM5NTjegUiRitUfeSH0l00leFCjt6o');

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
    const accountLink = await stripe.accountLinks.create({
        account: accountId,
        return_url: `http://localhost:3000/return/${accountId}`,
        refresh_url: `http://localhost:3000/refresh/${accountId}`,
        type: "account_onboarding",
    });
    return accountLink;
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
async function createPaymentIntentForWallet(amount, payment_method, customerId, user_id, return_url) { 
    console.log({
        amount: amount,
       
        customer: customerId,
        metadata: {
            user_id: user_id,
            type: "wallet_topup"
        },
        payment_method: payment_method,
        return_url: return_url
    })
    return await stripe.paymentIntents.create({
        amount: amount,
        currency: "EUR",
        customer: customerId,
        metadata: {
            user_id: user_id,
            type: "wallet_topup"
        },
        payment_method: payment_method,
        confirm: true,
        return_url: return_url
    });
}
async function createPaymentIntentOnBehalf(amount, payment_method, customerId, stripeAccountId, orderId, return_url) {
    const customer = await stripe.customers.retrieve(customerId);
    console.log("payment_method", payment_method);
    return await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "EUR",
         customer: customerId,
        on_behalf_of: stripeAccountId,
        application_fee_amount: Math.round((amount * 0.2) * 100),
        payment_method: payment_method,
        transfer_data: {
            destination: stripeAccountId,
        },
        capture_method: 'manual',
        metadata: {
            order_id: orderId,
            type: "order_payment"
        },
        // confirm: true,
        // return_url: return_url
    });
}
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
module.exports = {
    client: stripe,
    createAccount,
    getAccountLinks,
    createCustomer,
    generatePaymentSheetCredentials,
    createPaymentIntentForWallet,
    createPaymentIntentOnBehalf,
    confirmPaymentIntent,
    refundPaymentIntent,
    getPaymentMethods,
    updateCustomerEmail,
    updateCustomerPhone
}