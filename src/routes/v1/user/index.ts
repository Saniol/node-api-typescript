import { Router } from 'express';
// import createEntry from './createEntry';
import getCollection from './getCollection';
import getEntry from './getEntry';
// import updateEntry from './updateEntry';
// import deleteEntry from './deleteEntry';

const router: Router = Router();

router.get('/', getCollection);
router.get('/:id', getEntry);

export default router;
