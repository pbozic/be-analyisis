import express from 'express';

import CustomerController from '../../../controllers/reservation/CustomerController';
import { validate } from '../../../middleware/zod.js';
import {
	CreateCustomerRequestSchema,
	UpdateCustomerRequestSchema,
} from '../../../schemas/dto/reservations/customer/customer.dto.js';

const router = express.Router();

router.get('/', CustomerController.getCustomers);
router.post('/', validate(CreateCustomerRequestSchema), CustomerController.createCustomer);
router.put('/:customer_id', validate(UpdateCustomerRequestSchema), CustomerController.updateCustomer);
router.delete('/:customer_id', CustomerController.deleteCustomer);
router.get('/:customer_id', CustomerController.getCustomerById);

export default router;
