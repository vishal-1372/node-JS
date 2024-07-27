const express = require('express');
const studentcontroller = require('./../controller/student.controller');

const router = express.Router();

router.get('/student', studentcontroller.index);
router.get('/student/:id', studentcontroller.show);
router.post('/student', studentcontroller.store);
router.put('/student', studentcontroller.update);
router.delete('/student', studentcontroller.destroy);
module.exports = router;