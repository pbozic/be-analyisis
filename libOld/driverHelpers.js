import DriverDao from '../dao/Driver.js';
import OneSignal from './oneSignal.js';
import socket from '../socket.js';
import { getLocalisedTexts } from '../localisations/languages.js';
import prisma from '../prisma/prisma.js';
import { ACTIVITY_TYPE } from './constants.js';
const { UserSockets, io } = socket;
/**
 * Periodic worker: checks driver ping recency and toggles online/inactive/offline states.
 * - Emits socket events when drivers become unavailable
 * - Sends localized notifications for inactive/offline transitions
 * @returns {Promise<void>}
 */
async function checkPingStatus() {
	try {
		console.log('Checking ping status');
		let drivers = await DriverDao.getDrivers({
			// where last ping > 10 minutes ago
			where: {
				last_ping_at: {
					lte: new Date(new Date() - 10 * 60 * 1000),
				},
				online: true,
				on_order: false,
			},
			include: {
				user: true,
			},
		});
		let allDrivers = drivers;
		console.log('PING All drivers', allDrivers);
		for (let driver of allDrivers) {
			//if ping is more than 20/40 minutes ago
			if (driver.last_ping_at < new Date(new Date() - 40 * 60 * 1000)) {
				console.log(
					'Driver offline',
					driver.user_id,
					driver.last_ping_at,
					driver.delivery_driver_id || driver.driver_id
				);
				const userSocket = UserSockets.get(driver.user_id);
				console.log('User socket', !!userSocket, driver.user_id);
				if (typeof userSocket === 'string') {
					UserSockets.get(driver.user_id).emit('driver-offline');
				} else {
					console.warn('Invalid socket ID for user:', driver.user_id, userSocket);
				}
				if (driver.driver_id) {
					await handleDriverStatusChange(driver.driver_id, false);
					await DriverDao.updateDriverOnlineStatus(driver.driver_id, false);
					console.log('Driver offline', driver.user_id, driver.last_ping_at, driver.driver_id);
					// send notification to driver
					io.emit('driver_unavailable', driver.driver_id);
				}
				const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
				const l10nTextHeading = getLocalisedTexts('HEADING', driver.user);
				await OneSignal.sendNotificationToUser(l10nTextHeading?.driver, l10nText?.offline, driver.user.user_id);
				continue;
			}
			// send notification to driver
			if (driver.last_ping_at < new Date(new Date() - 20 * 60 * 1000)) {
				console.log('Driver inactive', driver.user_id, driver.last_ping_at);
				if (driver.is_inactive) {
					continue;
				}
				if (driver.driver_id) {
					await DriverDao.updateDriver(driver.driver_id, {
						is_inactive: true,
					});
				}
				// send notification to driver
				const l10nText = getLocalisedTexts('DRIVER_NOTIFICATIONS', driver.user);
				const l10nTextHeading = getLocalisedTexts('HEADING', driver.user);
				await OneSignal.sendNotificationToUser(
					l10nTextHeading?.driver,
					l10nText?.inactive,
					driver.user.user_id
				);
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
async function handleDriverStatusChange(driver_id, online, latestLog = null, settings = null) {
	let activity_settings = settings;
	if (!settings) {
		activity_settings = await prisma.driver_activity_settings.findFirst({
			where: { active: true },
			orderBy: { created_at: 'desc' },
		});
	}
	if (activity_settings) {
		if (!latestLog) {
			latestLog = await prisma.driver_activity_logs.findFirst({
				where: {
					driver_id,
					ended_at: null,
				},
				orderBy: {
					started_at: 'desc',
				},
			});
		}
		const latestOfflineLog = await prisma.driver_activity_logs.findFirst({
			where: {
				driver_id,
				activity_type: ACTIVITY_TYPE.OFFLINE,
			},
			orderBy: {
				started_at: 'desc',
			},
		});
		const timeoutAt = new Date(Date.now() + activity_settings?.online_timeout * 60 * 1000);
		if (online) {
			await prisma.driver_activity_logs.create({
				data: {
					driver: {
						connect: {
							driver_id: driver_id,
						},
					},
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
		} else {
			if (latestLog) {
				await prisma.driver_activity_logs.update({
					where: { driver_activity_log_id: latestLog.driver_activity_log_id },
					data: { ended_at: new Date() },
				});
			}
			const lockout_until =
				latestOfflineLog?.timeout_at && latestOfflineLog.timeout_at > new Date()
					? new Date(Date.now() + activity_settings?.second_offline_lockout * 60 * 1000)
					: new Date(Date.now() + activity_settings?.first_offline_lockout * 60 * 1000);
			await prisma.driver_activity_logs.create({
				data: {
					driver: {
						connect: {
							driver_id: driver_id,
						},
					},
					activity_type: ACTIVITY_TYPE.OFFLINE,
					timeout_at: timeoutAt,
				},
			});
			await prisma.driver_activity_logs.create({
				data: {
					driver: {
						connect: {
							driver_id: driver_id,
						},
					},
					activity_type: ACTIVITY_TYPE.LOCKED_OUT,
					lockout_until,
				},
			});
		}
	}
}
export { checkPingStatus };
export { handleDriverStatusChange };
export default {
	checkPingStatus,
	handleDriverStatusChange,
};
