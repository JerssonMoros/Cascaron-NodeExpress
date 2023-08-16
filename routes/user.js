const { Router } = require('express');
const { getUser, postUser, deleteUser, putUser } = require('../controllers/user');

const router = Router();

router.get('/hello', getUser);

router.put('/hello', putUser);

router.post('/hello', postUser );

router.delete('/hello', deleteUser);

module.exports = router;
