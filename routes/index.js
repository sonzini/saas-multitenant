import { AsyncRouter } from 'express-async-router';

import ping from '../middlewares/ping';
import date from '../middlewares/date';
import favicon from '../middlewares/favicon';
import logErrors from '../middlewares/logErrors';
import errorHandler from '../middlewares/errorHandler';

import cards from './cards';
import plans from './plans';
import products from './products';
import accounts from './accounts';
import subscriptions from './subscriptions';

const router = AsyncRouter();

router.get('/ping', ping);
router.get('/date', date);
router.get('/favicon.ico', favicon);

router.use('/cards', cards);
router.use('/plans', plans);
router.use('/products', products);
router.use('/accounts', accounts);
router.use('/subscriptions', subscriptions);

router.use(logErrors);
router.use(errorHandler);

export default router;
