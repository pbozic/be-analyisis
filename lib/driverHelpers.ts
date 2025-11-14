import { ACTIVITY_TYPE } from '@prisma/client';

import DriverDao from '../dao/Driver.js';
import OneSignal from './oneSignal.js';
import sockets from '../socket.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import prisma from '../prisma/prisma.js';
import type { DriverDetail } from '../schemas/dto/Driver/index.js';
import { DriverActivityLog } from '../types/drivers/DriverActivityLog.js';
import { DriverActivitySetting } from '../types/drivers/DriverActivitySetting.js';

const { UserSockets, io } = sockets;
/**
 * Periodic worker: checks driver ping recency and toggles online/inactive/offline states.
 * - Emits socket events when drivers become unavailable
 * - Sends localized notifications for inactive/offline transitions
 * @returns {Promise<void>}
 */
export async function checkPingStatus(): Promise<void> {
	try {
		console.log('Checking ping status');
		const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
		const drivers = (await DriverDao.getDrivers({
			where: {
				last_ping_at: { lte: tenMinutesAgo },
				online: true,
				on_order: false,
			},
			include: { user: true },
		})) as DriverDetail[];
		console.log('PING All drivers', drivers);
		for (const driver of drivers) {
			const fortyMinutesAgo = new Date(Date.now() - 40 * 60 * 1000);
			const twentyMinutesAgo = new Date(Date.now() - 20 * 60 * 1000);
			const lastPingAt = driver.last_ping_at ? new Date(driver.last_ping_at) : new Date(0);
			// Offline transition
			if (lastPingAt < fortyMinutesAgo) {
				console.log('Driver offline', driver.user_id, lastPingAt, driver.driver_id);
				const userSocket = UserSockets.get(driver.user_id);
				console.log('User socket', !!userSocket, driver.user_id);
				userSocket?.emit('driver-offline');
				if (driver.driver_id) {
					await handleDriverStatusChange(driver.driver_id, false);
					await DriverDao.updateDriverOnlineStatus(driver.driver_id, false);
					console.log('Driver offline', driver.user_id, lastPingAt, driver.driver_id);
					// @ts-expect-error io is a Proxy-typed object; runtime has .emit
					io.emit('driver_unavailable', driver.driver_id);
				}
				const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
				const l10nTextHeading = getLocalisedTexts('HEADING', driver.user);
				await OneSignal.sendNotificationToUser(l10nTextHeading?.driver, l10nText?.offline, driver.user_id);
				continue;
			}
			// Inactive transition
			if (lastPingAt < twentyMinutesAgo) {
				console.log('Driver inactive', driver.user_id, lastPingAt);
				const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
				const l10nTextHeading = getLocalisedTexts('HEADING', driver.user);
				await OneSignal.sendNotificationToUser(l10nTextHeading?.driver, l10nText?.inactive, driver.user_id);
			}
		}
	} catch (error) {
		console.error('Error in checkPingStatus', error);
	}
}
/**
 * Updates driver activity logs when the driver goes online/offline, including lockout logic.
 * When going online: creates ONLINE log and closes previous OFFLINE log if present.
 * When going offline: closes previous log, creates OFFLINE and LOCKED_OUT logs with timeouts.
 * @param {string} driver_id - Driver identifier.
 * @param {boolean} online - New online status.
 * @param {object|null} [latestLog=null] - Optional last activity log to speed up queries.
 * @param {object|null} [settings=null] - Optional activity settings; fetched if not provided.
 * @returns {Promise<void>}
 */
export async function handleDriverStatusChange(
	driver_id: string,
	online: boolean,
	latestLog: DriverActivityLog | null = null,
	settings: DriverActivitySetting | null = null
): Promise<void> {
	let activity_settings = settings;
	if (!activity_settings) {
		activity_settings = await prisma.driver_activity_settings.findFirst({
			where: { active: true },
			orderBy: { created_at: 'desc' },
		});
	}
	if (!activity_settings) return;
	let lastLog = latestLog;
	if (!lastLog) {
		lastLog = await prisma.driver_activity_logs.findFirst({
			where: { driver_id, ended_at: null },
			orderBy: { started_at: 'desc' },
		});
	}
	const latestOfflineLog = await prisma.driver_activity_logs.findFirst({
		where: { driver_id, activity_type: ACTIVITY_TYPE.OFFLINE },
		orderBy: { started_at: 'desc' },
	});
	const timeoutAt = new Date(Date.now() + activity_settings.online_timeout * 60 * 1000);
	if (online) {
		await prisma.driver_activity_logs.create({
			data: {
				driver: { connect: { driver_id } },
				activity_type: ACTIVITY_TYPE.ONLINE,
				timeout_at: timeoutAt,
			},
		});
		if (latestOfflineLog) {
			await prisma.driver_activity_logs.update({
				where: { driver_activity_log_id: latestOfflineLog.driver_activity_log_id },
				data: { ended_at: new Date() },
			});
		}
		return;
	}
	// offline path
	if (lastLog) {
		await prisma.driver_activity_logs.update({
			where: { driver_activity_log_id: lastLog.driver_activity_log_id },
			data: { ended_at: new Date() },
		});
	}
	const lockout_until =
		latestOfflineLog?.timeout_at && latestOfflineLog.timeout_at > new Date()
			? new Date(Date.now() + activity_settings.second_offline_lockout * 60 * 1000)
			: new Date(Date.now() + activity_settings.first_offline_lockout * 60 * 1000);
	await prisma.driver_activity_logs.create({
		data: {
			driver: { connect: { driver_id } },
			activity_type: ACTIVITY_TYPE.OFFLINE,
			timeout_at: timeoutAt,
		},
	});
	await prisma.driver_activity_logs.create({
		data: {
			driver: { connect: { driver_id } },
			activity_type: ACTIVITY_TYPE.LOCKED_OUT,
			lockout_until,
		},
	});
}

export default {
	checkPingStatus,
	handleDriverStatusChange,
};
