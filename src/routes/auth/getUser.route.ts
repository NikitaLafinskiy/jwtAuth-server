import express from 'express';
import { getUserController } from '../../controllers';
import { authValidate } from '../../middleware/auth.middleware';

const router = express.Router();

router.get('/api/user/:id', authValidate, getUserController);

export default router;
