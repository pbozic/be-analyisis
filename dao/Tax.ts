import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
/**
 * Create a new tax rate
 *
 * @param {Prisma.tax_ratesCreateInput} data - The tax rate data.
 * @returns {Promise<object>} The created tax rate.
 */
export async function createTaxRate(data: Prisma.tax_ratesCreateInput) {
	try {
		return await prisma.tax_rates.create({
			data: { ...data },
		});
	} catch (error) {
		throw new Error(`❌ Error creating tax rate:' ${error}`);
	}
}
/**
 * Get tax rate by name
 *
 * @param {string} name - The name of the tax rate.
 * @returns {Promise<object>} The tax rate.
 */
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
/**
 * Get all active tax rates
 *
 * @returns {Promise<object[]>} The list of active tax rates.
 */
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
/**
 * Get all inactive tax rates
 *
 * @returns {Promise<object[]>} The list of inactive tax rates.
 */
export async function getInactiveTaxRates() {
	try {
		return await prisma.tax_rates.findMany({
			where: {
				active: false,
				activated_at: null,
			},
		});
	} catch (error) {
		throw new Error(`❌ Error fetching inactive tax rates: ${error}`);
	}
}

export default { createTaxRate, getTaxByName, getActiveTaxRates, getInactiveTaxRates };
