import schedule from 'node-schedule';
/**
 * Build and cache export data into app.locals.map for later retrieval.
 *
 * @param {object} app - Express app instance.
 * @returns {Promise<void>}
 */
const exportData = async (app) => {
	let data = [];
	app.locals.map = data;
};
/**
 * Load pre-cached export data from app.locals.map.
 *
 * @param {object} app - Express app instance.
 * @returns {any} Cached export data.
 */
function loadCachedExportData(app) {
	return app.locals.map;
}
// CALL EXAMPLE INSIDE THE routes REQ -> loadCachedExportData(req.app)
/**
 * Preload and schedule periodic refresh of export data (runs every 2 minutes between 00:00-04:59 Europe/Ljubljana).
 *
 * @param {object} app - Express app instance.
 * @returns {Promise<void>}
 */
async function precacheDataExport(app) {
	const runTask = async () => {
		console.log('Starting pre-caching excel data export scheduler.');
		await exportData(app);
		console.log('done pre-caching excel data export.');
	};
	await runTask();
	//added a check for the hour to make sure the function only runs between midnight and 4 am.
	schedule.scheduleJob('0 */2 0-4 * * *', async function () {
		let date = new Date();
		const options = { timeZone: 'Europe/Ljubljana' };
		const today = date.toLocaleTimeString('si-SI', options);
		let time = today.split('.');
		const h = time[0];
		console.log('Time: ' + today);
		if (Number(h) >= 0 && Number(h) <= 4) {
			await runTask();
		}
	});
}
export { exportData };
export { loadCachedExportData };
export { precacheDataExport };
export default {
	exportData,
	loadCachedExportData,
	precacheDataExport,
};
