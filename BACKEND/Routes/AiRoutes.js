import express from 'express';
import { getDogMatch } from '../Controller/AiController.js';
import { protect } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Yeh route "/match" par POST request aane par getDogMatch function call karega
router.post('/match', protect, getDogMatch);

export default router;
