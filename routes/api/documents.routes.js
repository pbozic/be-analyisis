import express from 'express';

import { validate } from '../../middleware/zod.ts';
import DocumentsController from '../../controllers/DocumentsController.js';
import { deleteDocumentsAndFilesByDocumentId } from '../../controllers/MenuController.js';
import {
	CreateDocumentBodySchema,
	UpdateDocumentExpirationInputSchema,
	UpdateDocumentIssueInputSchema,
	UpdateDocumentFilesInputSchema,
	UpdateDocumentAdditionalInfoInputSchema,
	DeleteDocumentsAndFilesByFieldInputSchema,
} from '../../schemas/dto/Documents/document.dto.ts';
const router = express.Router();
router.get('/', DocumentsController.listDocuments);
router.get('/:documentId', DocumentsController.getDocumentById);
router.get('/users/:userId', DocumentsController.getDocumentsForUser);
/**
 *    * @module business
 *
 */
router.get('/businesses/:businessId', DocumentsController.getDocumentsForBusiness);
/**
 *    * @module transport
 *
 */
router.get('/drivers/:driver_id', DocumentsController.getDocumentsForDriver);
/**
 *    * @module transport
 *
 */
router.get('/vehicles/:vehicleId', DocumentsController.getDocumentsForVehicle);
router.get('/type/:documentType', DocumentsController.getDocumentsByDocumentType);
/**
 *    * @module business
 *
 */
router.get('/business/:business_id/type/:document_type', DocumentsController.getDocumentsForBusinessByDocumentType);
router.get('/user/type/:document_type', DocumentsController.getDocumentsForUserByDocumentType);
router.get('/drivers/:driverId/type/:documentType', DocumentsController.getDocumentsForDriverByDocumentType);
router.get('/vehicles/:vehicleId/type/:documentType', DocumentsController.getDocumentsForVehicleByDocumentType);
/**
 *    * @module general
 *
 */
router.post('/create/user/:user_id', validate(CreateDocumentBodySchema), DocumentsController.createUserDocument);
/**
 *    * @module business
 *
 */
router.post(
	'/create/business/:business_id',
	validate(CreateDocumentBodySchema),
	DocumentsController.createBusinessDocument
);
/**
 *    * @module transport
 *
 */
router.post('/create/driver/:driver_id', validate(CreateDocumentBodySchema), DocumentsController.createDriverDocument);
/**
 *    * @module transport
 *
 */
router.post(
	'/create/vehicle/:vehicle_id',
	validate(CreateDocumentBodySchema),
	DocumentsController.createVehicleDocument
);
// /**
//  *    * @module transport
//  *
//  */
// router.post(
// 	'/create/delivery_driver/:delivery_driver_id',
// 	validate(CreateDocumentBodySchema),
// 	DocumentsController.createDeliveryPersonDocument
// );
router.patch(
	'/expirationDate',
	validate(UpdateDocumentExpirationInputSchema),
	DocumentsController.updateDocumentExpirationDate
);
router.patch('/issueDate', validate(UpdateDocumentIssueInputSchema), DocumentsController.updateDocumentIssueDate);
router.patch('/files', validate(UpdateDocumentFilesInputSchema), DocumentsController.updateDocumentFiles);
router.patch(
	'/additionalInfo',
	validate(UpdateDocumentAdditionalInfoInputSchema),
	DocumentsController.updateDocumentAdditionalInfo
);
router.delete(
	'/files/:field/:id',
	validate(DeleteDocumentsAndFilesByFieldInputSchema, 'params'),
	deleteDocumentsAndFilesByDocumentId
);
export default router;
