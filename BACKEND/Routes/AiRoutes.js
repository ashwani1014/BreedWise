import express from 'express';
import { getDogMatch } from '../Controller/AiController.js';

const router = express.Router();

// Yeh route "/match" par POST request aane par getDogMatch function call karega
router.post('/match', getDogMatch);

export default router;
