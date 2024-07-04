const express = require('express');
const router = express.Router();

const DocumentsController = require("../../controllers/DocumentsController");

router.get('/', DocumentsController.listDocuments);
router.get('/:documentId', DocumentsController.getDocumentById);
router.get('/users/:userId', DocumentsController.getDocumentsForUser);
router.get('/businesses/:businessId', DocumentsController.getDocumentsForBusiness);
router.get('/deliveryPersons/:deliveryPersonId', DocumentsController.getDocumentsForDeliveryPerson);
router.get('/drivers/:driverId', DocumentsController.getDocumentsForDriver);
router.get('/vehicles/:vehicleId', DocumentsController.getDocumentsForVehicle);
router.get('/type/:documentType', DocumentsController.getDocumentsByDocumentType);
router.get('/business/:business_id/type/:document_type', DocumentsController.getDocumentsForBusinessByDocumentType);
router.get('/user/type/:document_type', DocumentsController.getDocumentsForUserByDocumentType);
router.get('/drivers/:driverId/type/:documentType', DocumentsController.getDocumentsForDriverByDocumentType);
router.get('/deliveryPersons/:deliveryPersonId/type/:documentType', DocumentsController.getDocumentsForDeliveryPersonByDocumentType);
router.get('/vehicles/:vehicleId/type/:documentType', DocumentsController.getDocumentsForVehicleByDocumentType);

router.post('/create/user', DocumentsController.createUserDocument);
router.post('/create/business', DocumentsController.createBusinessDocument);
router.post('/create/driver', DocumentsController.createDriverDocument);
router.post('/create/vehicle', DocumentsController.createVehicleDocument);
router.post('/create/deliveryPerson', DocumentsController.createDeliveryPersonDocument);

router.patch('/expirationDate', DocumentsController.updateDocumentExpirationDate);
router.patch('/issueDate', DocumentsController.updateDocumentIssueDate);
router.patch('/files', DocumentsController.updateDocumentFiles);
router.patch('/additionalInfo', DocumentsController.updateDocumentAdditionalInfo);

module.exports = router;