const weatherApi = require('./weatherApi');
const prisma = require('../prisma/prisma');

const centroid = require('@turf/centroid').default;

async function getSettlementsWeatherForecast() {
	const settlements = await prisma.settlements.findMany({
		select: {
			settlement_id: true,
			name: true,
			geojson: true,
			municipality: {
				select: {
					municipalities_id: true,
					name: true,
				},
			},
		},
	});

	for (const settlement of settlements) {
		const { geojson, settlement_id } = settlement;
		const center = centroid(geojson);
		const lat = center.geometry.coordinates[1];
		const lon = center.geometry.coordinates[0];

		try {
			const forecast = await weatherApi.getForecast(lat, lon, 1);
			// model weather_data {
			//     weather_data_id     String        @id @default(uuid()) @db.Uuid
			//     time_epoch          BigInt
			//     time                DateTime
			//     temp_c              Float
			//     is_day              Boolean
			//     condition_text      String
			//     condition_icon      String
			//     condition_code      Int
			//     wind_kph            Float
			//     wind_degree         Int
			//     wind_dir            String
			//     pressure_mb         Float
			//     precip_mm           Float
			//     snow_cm             Float
			//     humidity            Int
			//     cloud               Int
			//     feelslike_c         Float
			//     windchill_c         Float
			//     heatindex_c         Float
			//     dewpoint_c          Float
			//     will_it_rain        Boolean
			//     chance_of_rain      Int
			//     will_it_snow        Boolean
			//     chance_of_snow      Int
			//     vis_km              Float
			//     gust_kph            Float
			//     uv                  Float
			//     icon                String
			//     created_at          DateTime      @default(now()) @db.Timestamptz(6)
			//     updated_at          DateTime      @default(now()) @updatedAt @db.Timestamptz(6)

			//     municipalities_id   String        @db.Uuid
			//     municipality        municipalities @relation(fields: [municipalities_id], references: [municipalities_id])

			//     settlement_id      String?       @db.Uuid
			//     settlement          settlements?  @relation(fields: [settlement_id], references: [settlement_id])

			//     @@unique([time_epoch, settlement_id])
			//     @@index([time_epoch])
			//     @@index([municipalities_id])
			//     @@index([settlement_id])
			//     @@index([time])

			//   }

			await Promise.all(
				forecast.forecast.forecastday[0].hour.map((hour) =>
					prisma.weather_data.upsert({
						where: {
							// Composite unique identifier
							time_epoch_settlement_id: {
								time_epoch: hour.time_epoch,
								settlement_id: settlement_id,
							},
						},
						update: {
							// Fields to update if the record exists
							temp_c: hour.temp_c,
							is_day: !!hour.is_day,
							condition_text: hour.condition.text,
							condition_icon: hour.condition.icon,
							condition_code: hour.condition.code,
							wind_kph: hour.wind_kph,
							wind_degree: hour.wind_degree,
							wind_dir: hour.wind_dir,
							pressure_mb: hour.pressure_mb,
							precip_mm: hour.precip_mm,
							snow_cm: hour.snow_cm,
							humidity: hour.humidity,
							cloud: hour.cloud,
							feelslike_c: hour.feelslike_c,
							windchill_c: hour.windchill_c,
							heatindex_c: hour.heatindex_c,
							dewpoint_c: hour.dewpoint_c,
							will_it_rain: !!hour.will_it_rain,
							chance_of_rain: hour.chance_of_rain,
							will_it_snow: !!hour.will_it_snow,
							chance_of_snow: hour.chance_of_snow,
							vis_km: hour.vis_km,
							gust_kph: hour.gust_kph,
							uv: hour.uv,
							icon: hour.condition.icon,
							municipality: {
								connect: {
									municipalities_id: settlement.municipality.municipalities_id,
								},
							},
						},
						create: {
							time_epoch: hour.time_epoch,
							time: new Date(hour.time),
							temp_c: hour.temp_c,
							is_day: !!hour.is_day,
							condition_text: hour.condition.text,
							condition_icon: hour.condition.icon,
							condition_code: hour.condition.code,
							wind_kph: hour.wind_kph,
							wind_degree: hour.wind_degree,
							wind_dir: hour.wind_dir,
							pressure_mb: hour.pressure_mb,
							precip_mm: hour.precip_mm,
							snow_cm: hour.snow_cm,
							humidity: hour.humidity,
							cloud: hour.cloud,
							feelslike_c: hour.feelslike_c,
							windchill_c: hour.windchill_c,
							heatindex_c: hour.heatindex_c,
							dewpoint_c: hour.dewpoint_c,
							will_it_rain: !!hour.will_it_rain,
							chance_of_rain: hour.chance_of_rain,
							will_it_snow: !!hour.will_it_snow,
							chance_of_snow: hour.chance_of_snow,
							vis_km: hour.vis_km,
							gust_kph: hour.gust_kph,
							uv: hour.uv,
							icon: hour.condition.icon,
							settlement: {
								connect: {
									settlement_id: settlement_id,
								},
							},
							municipality: {
								connect: {
									municipalities_id: settlement.municipality.municipalities_id,
								},
							},
						},
					})
				)
			);
		} catch (error) {
			console.error(`Error fetching weather data for ${settlement.name}:`, error.message);
		}
	}
}

module.exports = {
	getSettlementsWeatherForecast,
};
