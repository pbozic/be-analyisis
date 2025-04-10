const prisma = require("../prisma");

async function fiscalDevicesSeeder() {
    let exists = await prisma.fiscal_devices.findFirst({
        where: {
            name: "Phanteon Web Lite",
        }
    });
    if (exists) return;
    await prisma.fiscal_devices.create({
        data: {
            name: "Phanteon Web Lite",
        }
    })
}

module.exports = fiscalDevicesSeeder;