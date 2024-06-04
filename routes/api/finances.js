const express = require("express");
const router = express.Router();
const FinanceController = require("../../controllers/FinancesController");

router.get("/:finance_id", FinanceController.getFinanceRecordById);
router.get("/business/:business_id", FinanceController.getFinanceRecordByBusinessId);

router.post("/create", FinanceController.createNewFinanceRecord);
router.patch("/:finance_id", FinanceController.updateFinanceRecord);
router.patch("/:finance_id/account_number", FinanceController.updateAccountNumber);
router.patch("/:finance_id/bank_name", FinanceController.updateBankName);
router.patch("/:finance_id/payment_preferences", FinanceController.updatePaymentPreferences);

router.delete("/:finance_id", FinanceController.deleteFinanceRecord);

module.exports = router;