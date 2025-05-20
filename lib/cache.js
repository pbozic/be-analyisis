const schedule = require('node-schedule');

const exportData = async (app) => {
	let data = [];
	app.locals.map = data;
};

function loadCachedExportData(app) {
	return app.locals.map;
}

// CALL EXAMPLE INSIDE THE routes REQ -> loadCachedExportData(req.app)

async function precacheDataExport(app) {
	const runTask = async () => {
		console.log('Starting pre-caching excel data export scheduler.');

		await exportData(app);
		console.log('done pre-caching excel data export.');
	};
	await runTask();

	//added a check for the hour to make sure the function only runs between midnight and 4 am.
	const job = schedule.scheduleJob('0 */2 0-4 * * *', async function (fireDate) {
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

module.exports = {
	exportData,
	precacheDataExport,
};
