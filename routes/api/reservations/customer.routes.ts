import express from 'express';

import CustomerController from '../../../controllers/reservation/CustomerController';
import { validate } from '../../../middleware/zod';
import { CreateCustomerSchema, UpdateCustomerSchema } from '../../../types/reservations/Customer';

const router = express.Router();

router.get('/', CustomerController.getCustomers);
router.post('/', validate(CreateCustomerSchema), CustomerController.createCustomer);
router.put('/:customer_id', validate(UpdateCustomerSchema), CustomerController.updateCustomer);
router.delete('/:customer_id', CustomerController.deleteCustomer);
router.get('/:customer_id', CustomerController.getCustomerById);

export default router;
