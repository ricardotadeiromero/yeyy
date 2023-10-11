import { Router } from "express";
import index from './routes/index.js';
import user from './routes/user.js'
const router = Router()

router.use(index);
router.use('/user',user);
export default router