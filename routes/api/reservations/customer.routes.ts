import express from 'express';

import CustomerController from '../../../controllers/reservation/CustomerController';
import { validate } from '../../../middleware/zod';
import { CreateCustomerSchema, UpdateCustomerSchema } from '../../../types/reservation/Customer';

const router = express.Router();

router.get('/', CustomerController.getCustomers);
router.post('/', validate(CreateCustomerSchema), CustomerController.createCustomer);
router.put('/:customerId', validate(UpdateCustomerSchema), CustomerController.updateCustomer);
router.delete('/:customerId', CustomerController.deleteCustomer);
router.get('/:customerId', CustomerController.getCustomerById);

export default router;
