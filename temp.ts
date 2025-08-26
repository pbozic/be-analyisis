import { bootstrapAllExistingModuleNotifications } from './lib/reservationNotifications';

(async () => {
	try {
		await bootstrapAllExistingModuleNotifications();
	} catch (e) {
		console.error('Error during bootstrapping reservation notifications', e);
	} finally {
	}
})();
