const express = require("express");
const router = express.Router();
const ReservationController = require("../../../controllers/ReservationController");

router.get("/reservations", ReservationController.getReservations);
router.get("/reservations/:reservation_id", ReservationController.getReservationById);
router.get("/reservations/business/:business_id", ReservationController.getReservationsByBusinessId);
router.post("/reservations/create", ReservationController.createReservation);
router.patch("/reservations/status", ReservationController.updateReservationStatus);
router.delete("/reservations/:reservation_id", ReservationController.deleteReservation);

module.exports = router;