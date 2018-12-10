import expressPromiseRouter from 'express-promise-router';
import cors from 'cors';
import { demoController } from '../controllers/demo';

const router = expressPromiseRouter();

router.route('/')
.get(demoController);


export default router;
