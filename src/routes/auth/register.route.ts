import { registerController } from '../../controllers';
import express from 'express';

const router = express.Router();

router.post('/api/register', registerController);

export default router;
