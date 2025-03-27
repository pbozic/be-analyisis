const prisma = require("../prisma/prisma");
const { TAXI_ORDER_STATUS, DOCUMENT_TYPE } = require("../lib/constants");

const getReservations = async (args) => {
	try {
		return await prisma.reservations.findMany({
			...args,
			include: {
				business: true,
				user: true,
			},
		});
	} catch (error) {
		console.error("Error retrieving reservations:", error);
		throw new Error(error);
	}
};

async function getReservationIfNotCompleted(user_id) {
	try {

		const now=new Date();
		const twoHoursBeforeNow = new Date(now.getTime() - 2 * 60 * 60 * 1000);

		const reservation = await prisma.reservations.findFirst({
			orderBy: [
					{
						datetime: 'asc',
					}
				],
			where: {
				user_id: user_id,
				status: {
					notIn: ['TABLE_RESERVATION_COMPLETED', 'TABLE_RESERVATION_REJECTED']
				},
				datetime: {
					gte: twoHoursBeforeNow
				}
			},
			include: {
				business: {
					select: {
						business_id:true,
						name: true,
						email: true,
						telephone: true,
						address: true,
						documents: {
							where: {
								document_type: { in:[DOCUMENT_TYPE.LOGO,DOCUMENT_TYPE.BANNER] }
							},
							include: {
								files: true
							}
						}
					}
				}
			}
		});
		if(reservation){
			let logo = null;
			let banner = null;
			for (let d of reservation?.business?.documents) {
				if (d.document_type === "LOGO") {
					logo = d.files[0].url;
				} else if (d.document_type === "BANNER") {
					banner = d.files[0].url;
				}
			}
			reservation.business.logo = logo;
			reservation.business.banner = banner;
			delete reservation.business.documents;
			return reservation;
		}else{
			return null
		}
	} catch (e) {
		console.error("Error fetching reservation:", e);
		throw new Error(e.message);
	}
}


const getReservationById = async (reservation_id) => {
	try {
		return await prisma.reservations.findUnique({
			where: {
				reservation_id: reservation_id,
			},
			include: {
				business: true,
				user: true,
			},
		});
	} catch (error) {
		console.error("Error retrieving reservation:", error);
		throw new Error(error);
	}
};

const createReservation = async (reservationData) => {
	try {
		const reservation = await prisma.reservations.create({
			data: reservationData,
			include: {
				business: {
					select: {
						business_id:true,
						name: true,
						email: true,
						telephone: true,
						address: true,
						documents: {
							where: {
								document_type: { in:[DOCUMENT_TYPE.LOGO,DOCUMENT_TYPE.BANNER] }
							},
							include: {
								files: true
							}
						}
					}
				}
			}
		});

		if(reservation){
			let logo = null;
			let banner = null;
			for (let d of reservation?.business?.documents) {
				if (d.document_type === "LOGO") {
					logo = d.files[0].url;
				} else if (d.document_type === "BANNER") {
					banner = d.files[0].url;
				}
			}
			reservation.business.logo = logo;
			reservation.business.banner = banner;
			delete reservation.business.documents;
			return reservation;
		}else{
			return null
		}
	} catch (error) {
		console.error("Error creating reservation:", error);
		throw new Error(error);
	}
};

const updateReservationStatus = async (reservation_id, status) => {
	try {
		return await prisma.reservations.update({
			where: {
				reservation_id: reservation_id,
			},
			data: {
				status: status,
			},
		});
	} catch (error) {
		console.error("Error updating reservation status:", error);
		throw new Error(error);
	}
};

const addTableNumber = async (reservation_id, table) => {
	try {
		return await prisma.reservations.update({
			where: {
				reservation_id: reservation_id,
			},
			data: {
				table: table,
			},
		});
	} catch (error) {
		console.error("Error updating reservation table number:", error);
		throw new Error(error);
	}
};

const deleteReservation = async (reservation_id) => {
	try {
		return await prisma.reservations.delete({
			where: {
				reservation_id: reservation_id,
			},
		});
	} catch (error) {
		console.error("Error deleting reservation:", error);
		throw new Error(error);
	}
};

module.exports = {
	getReservations,
	getReservationById,
	createReservation,
	updateReservationStatus,
	deleteReservation,
	addTableNumber,
	getReservationIfNotCompleted
};