const prisma = require('../prisma/prisma');
const moment = require('moment');
const readline = require("readline");
const {client} = require('../lib/stripe');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const addStripeCountryToAllCustomers = async () => {
    
        const users = await prisma.users.findMany({
            where: {
                stripe_customer_id: {
                    not: null,
                }
            },
        });
        for (const user of users) {
            try {
                const updatedCustomer = await client.customers.update(customerId, {
                    shipping: {
                      address: {
                        country: 'SI'  // Update to the desired country
                      },                    }
                  });
                console.log("Customer updated: ", updatedCustomer);
            } catch (error) {
                console.error("Error updating customer: ", error);
            }
        }
        
}

async function main() {
    rl.question("Are you sure you want to run this, this will change users stripe customer to country SI!!!!!!!? (yes/no) ", async (answer) => {
        if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
           
                await addStripeCountryToAllCustomers();
        } else {
            console.log("Operation canceled.");
        }
        rl.close();
    });
   
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});