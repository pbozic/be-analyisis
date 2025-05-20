const express = require('express');
const router = express.Router();

const DocumentsController = require('../../controllers/DocumentsController');
const { deleteDocumentsAndFilesByDocumentId } = require('../../controllers/MenuController');

router.get('/', DocumentsController.listDocuments);
router.get('/:documentId', DocumentsController.getDocumentById);
router.get('/users/:userId', DocumentsController.getDocumentsForUser);
router.get('/businesses/:businessId', DocumentsController.getDocumentsForBusiness);
router.get('/deliveryPersons/:deliveryPersonId', DocumentsController.getDocumentsForDeliveryPerson);
router.get('/drivers/:driver_id', DocumentsController.getDocumentsForDriver);
router.get('/vehicles/:vehicleId', DocumentsController.getDocumentsForVehicle);
router.get('/type/:documentType', DocumentsController.getDocumentsByDocumentType);
router.get('/business/:business_id/type/:document_type', DocumentsController.getDocumentsForBusinessByDocumentType);
router.get('/user/type/:document_type', DocumentsController.getDocumentsForUserByDocumentType);
router.get('/drivers/:driverId/type/:documentType', DocumentsController.getDocumentsForDriverByDocumentType);
router.get(
	'/deliveryPersons/:deliveryPersonId/type/:documentType',
	DocumentsController.getDocumentsForDeliveryPersonByDocumentType
);
router.get('/vehicles/:vehicleId/type/:documentType', DocumentsController.getDocumentsForVehicleByDocumentType);

router.post('/create/user/:user_id', DocumentsController.createUserDocument);
router.post('/create/business/:business_id', DocumentsController.createBusinessDocument);
router.post('/create/driver/:driver_id', DocumentsController.createDriverDocument);
router.post('/create/vehicle/:vehicle_id', DocumentsController.createVehicleDocument);
router.post('/create/delivery_driver/:delivery_driver_id', DocumentsController.createDeliveryPersonDocument);

router.patch('/expirationDate', DocumentsController.updateDocumentExpirationDate);
router.patch('/issueDate', DocumentsController.updateDocumentIssueDate);
router.patch('/files', DocumentsController.updateDocumentFiles);
router.patch('/additionalInfo', DocumentsController.updateDocumentAdditionalInfo);

router.delete('/files/:field/:id', deleteDocumentsAndFilesByDocumentId);

module.exports = router;
