import { refreshController } from '../../controllers';
import express from 'express';

const router = express.Router();

router.get('/api/refresh', refreshController);

export default router;
