import expressPromiseRouter from 'express-promise-router';
import cors from 'cors';
import { smsUser, geoUser } from '../controllers/api';

const router = expressPromiseRouter();

router.route('/sms')
.options(cors())
.post(smsUser)

router.route('/geo')
.options(cors())
// .post(geoUser)
.get(geoUser)

export default router;
