const prisma = require("../prisma/prisma");
const moment = require("moment-timezone");
const { PRICE_SURGE_MULTIPLIERS } = require("./constants");

async function getPriceSurgeDataForTransferTrip(route, departureTime, trafficData, demandData)
{
    let settlementId = await prisma.settlements.checkIfAllPointsAreInSameSettlement(route);

    if (!settlementId) {
        return {
            multiplier: 1,
            reasons: null,
        };
    }
    let reasons = [];
    let weatherSurgeData = await getWeatherPriceSurgeData(settlementId, departureTime);
    if (weatherSurgeData.rainData) {
        reasons.push("RAIN");
    }
    let weatherMultiplier = weatherSurgeData.weatherSurgeMultiplier || 1;
    let trafficMultiplier = 1;
    let demandMultiplier = 1;
    //2025-05-06T11:37:00.000Z

    const finalSurge = weatherMultiplier * trafficMultiplier * demandMultiplier;

    return {
        multiplier: Math.max(Math.min(finalSurge, PRICE_SURGE_MULTIPLIERS.MAX), 1),
        reasons: reasons,
    };
   
}
async function getWeatherPriceSurgeData(settlementId, departureTime) {
    const roundedEpoch = moment(departureTime).add(30, 'minutes').startOf('hour').unix();
    const weatherData = await prisma.weather_data.findFirst({
        where: {
          settlement_id: settlementId,
          time_epoch: {
            gte: roundedEpoch - 3600,
            lte: roundedEpoch + 3600,
          },
        },
        orderBy: {
          time_epoch: 'asc',
        },
    });
    if (!weatherData) {
        return {
          multiplier: 1,
          rainData: null
        };;
    }
    let rainData = getRainPrediction(weatherData);

    if (!rainData.willRain) {
        return {
          multiplier: 1,
          rainData: null
        };
    }

    let weatherSurgeMultiplier = getSurgeMultiplier(rainData);
   
    return {
        multiplier: weatherSurgeMultiplier,
        rainData: {
            willRain: rainData.willRain,
            message: rainData.message,
            intensity: rainData.intensity,
        },
    };
  }
function getRainPrediction(weatherData) {
    if (!weatherData || !weatherData.will_it_rain) {
      return {
        willRain: false,
        message: 'No rain expected',
        intensity: 'none',
      };
    }
  
    const mm = weatherData.precip_mm;
    let intensity = 'light';
  
    if (mm > 10) intensity = 'moderate';
    if (mm > 25) intensity = 'heavy';
  
    return {
      willRain: true,
      message: `Rain expected (${weatherData.chance_of_rain}% chance, ${mm}mm)`,
      intensity,
    };
  }
  function getSurgeMultiplier(rainData) {
    const chance = rainData.chance_of_rain ?? 0;
    const intensity = rainData.intensity ?? 'none';
  
    let baseMultiplier = 1;
  
    switch (intensity) {
      case 'light':
        baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.LIGHT;
        break;
      case 'moderate':
        baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.MODERATE;
        break;
      case 'heavy':
        baseMultiplier = PRICE_SURGE_MULTIPLIERS.WEATHER.HEAVY;
        break;
      default:
        baseMultiplier = 1.0;
    }
  
    if (chance < 40) {
      return 1.0;
    }
  
    const start = 40;
    const end = 100;
    const midpoint = 65;
    const normalized = (chance - start) / (end - start); // 0 at 40%, 1 at 100%
  
    const exponent = Math.log(0.5) / Math.log((midpoint - start) / (end - start)); // ≈ 0.356
    const ramp = Math.pow(normalized, exponent); // curved ramp: 0 → 1
  
    const adjustedMultiplier = 1 + (baseMultiplier - 1) * ramp;
  
    return adjustedMultiplier;
  }
  
module.exports = {
    getPriceSurgeDataForTransferTrip,
};