import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';

export async function createTaxRate(data: Prisma.tax_ratesCreateInput) {
	try {
		return await prisma.tax_rates.create({
			data: { ...data },
		});
	} catch (error) {
		throw new Error(`❌ Error creating tax rate:' ${error}`);
	}
}

export async function getTaxByName(name: string) {
	try {
		return await prisma.tax_rates.findFirst({
			where: {
				name,
				active: true,
			},
		});
	} catch (error) {
		throw new Error(`❌ Error fetching tax rate by name: ${error}`);
	}
}

export async function getActiveTaxRates() {
	try {
		return await prisma.tax_rates.findMany({
			where: {
				active: true,
			},
			orderBy: {
				rate: 'asc',
			},
		});
	} catch (error) {
		throw new Error(`❌ Error fetching active tax rates: ${error}`);
	}
}

export default { createTaxRate, getTaxByName, getActiveTaxRates };
