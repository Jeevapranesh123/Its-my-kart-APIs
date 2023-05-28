const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

// Create a student
router.post('/', studentController.createStudent);

// Read all students
router.get('/', studentController.getAllStudents);

// Read a single student
router.get('/:regid', studentController.getStudentById);

// Update a student
router.put('/:regid', studentController.updateStudent);

// Delete a student
router.delete('/:regid', studentController.deleteStudent);

module.exports = router;
