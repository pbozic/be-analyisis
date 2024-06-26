const express = require("express");
const router = express.Router();
const ReservationController = require("../../../controllers/ReservationController");

router.get("", ReservationController.getReservations);
router.get("/:reservation_id", ReservationController.getReservationById);
router.get("/business/:business_id", ReservationController.getReservationsByBusinessId);
router.post("/create", ReservationController.createReservation);
router.post("/table", ReservationController.addTableNumber);
router.patch("/status", ReservationController.updateReservationStatus);
router.delete("/:reservation_id", ReservationController.deleteReservation);

module.exports = router;