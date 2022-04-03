import express from 'express';
import { emailActivationController } from '../../controllers';

const router = express.Router();

router.get('/api/email/:link', emailActivationController);

export default router;
