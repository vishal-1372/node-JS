const express = require('express');
const studentcontroller = require('./../controller/student.controller');
const studentValidator = require('./../studentValidator')

const router = express.Router();

router.get('/student', studentcontroller.index);
router.get('/student/:id', studentcontroller.show);
router.post('/student', studentValidator.createStudent, studentcontroller.store);
router.put('/student', studentcontroller.update);
router.delete('/student', studentcontroller.destroy);
module.exports = router;