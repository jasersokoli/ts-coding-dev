import { Router } from 'express';
import { getMessages, sendMessage } from './messagesController';
import { authMiddleware } from './authMiddleware';

const router = Router();

router.get('/messages', getMessages);
router.post('/message', authMiddleware, sendMessage);

export default router;
