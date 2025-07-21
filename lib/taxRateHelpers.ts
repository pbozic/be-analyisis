import cron from 'node-cron';
import type { menu_items, tax_rates } from '@prisma/client';

import prisma from '../prisma/prisma.js';

/**
 * Schedule cron jobs for upcoming tax rate change
 */
export async function scheduleUpcomingTaxRateChange(taxRate: tax_rates): Promise<void> {
	try {
		const validFromDate = new Date(taxRate.valid_from);
		const now = new Date();
		const oneYearFromNow = new Date(now);
		oneYearFromNow.setFullYear(now.getFullYear() + 1);

		if (validFromDate > now && validFromDate <= oneYearFromNow) {
			const cronExpression = generateCronExpression(validFromDate);

			console.log(
				`Scheduling tax rate change for ${taxRate.name} (${taxRate.rate}%), valid from: ${validFromDate.toISOString()}`
			);

			const job = cron.schedule(
				cronExpression,
				async () => {
					await executeTaxRateChange(taxRate);
					job.destroy();
				},
				{
					scheduled: true,
					timezone: 'Europe/Ljubljana',
				}
			);
		}
	} catch (error) {
		console.error('Error in scheduleUpcomingTaxRateChange:', error);
		throw error;
	}
}

function generateCronExpression(date: Date): string {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	return `0 0 ${day} ${month} *`;
}

/**
 * Execute tax rate change
 */
async function executeTaxRateChange(newTaxRate: tax_rates): Promise<void> {
	const taxRateId = newTaxRate.tax_rates_id;
	console.log(`Executing tax rate change for ID: ${taxRateId}`);

	try {
		await prisma.$transaction(async (tx) => {
			const menuItemsToUpdate = await tx.menu_items.findMany({
				where: {
					tax_rate: {
						name: newTaxRate.name,
						active: true,
						valid_from: {
							lt: newTaxRate.valid_from,
						},
					},
				},
				include: {
					tax_rate: true,
				},
			});

			if (menuItemsToUpdate.length > 0) {
				// Get the old tax rate IDs to deactivate
				const oldTaxRateIds = [
					...new Set(menuItemsToUpdate.map((item: menu_items) => item.tax_rates_id).filter(Boolean)),
				];

				// Update all menu items to use the new tax rate
				await tx.menu_items.updateMany({
					where: {
						menu_item_id: {
							in: menuItemsToUpdate.map((item: menu_items) => item.menu_item_id),
						},
					},
					data: {
						tax_rates_id: newTaxRate.tax_rates_id,
					},
				});

				// Deactivate old tax rates
				if (oldTaxRateIds.length > 0) {
					await tx.tax_rates.updateMany({
						where: {
							tax_rates_id: {
								in: oldTaxRateIds,
							},
						},
						data: {
							active: false,
						},
					});
				}

				console.log(
					`Updated ${menuItemsToUpdate.length} menu items with new tax rate: ${newTaxRate.name} (${newTaxRate.rate}%)`
				);
			}

			// Activate the new tax rate
			await tx.tax_rates.update({
				where: { tax_rates_id: taxRateId },
				data: { active: true },
			});

			console.log(`Tax rate change completed successfully for: ${newTaxRate.name} (${newTaxRate.rate}%)`);
		});
	} catch (error) {
		console.error('Error executing tax rate change:', error);
		throw error;
	}
}

export default { scheduleUpcomingTaxRateChange };
