import express from 'express';
import { loginController } from '../../controllers';

const router = express.Router();

router.post('/api/login', loginController);

export default router;
