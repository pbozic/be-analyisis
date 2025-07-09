import dailyMealHelpers from './lib/dailyMealHelpers.ts';
const today_midnight = new Date(new Date().setHours(0, 0, 0, 0));
dailyMealHelpers.generateDMInstancesForDateSimple(today_midnight.toISOString());
