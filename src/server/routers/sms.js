import expressPromiseRouter from 'express-promise-router';
import cors from 'cors';
import { smsController } from '../controllers/sms';

const router = expressPromiseRouter();

router.route('/')
.options(cors())
.post(smsController)


export default router;
