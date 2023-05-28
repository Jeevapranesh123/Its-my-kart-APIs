// controllers/studentController.js

const Student = require('../models/student');

// Create a student
exports.createStudent = (req, res) => {
  const { name, age, grade, regid} = req.body;
  const student = new Student({ name, age, grade, regid });

  student
    .save()
    .then(() => {
      res.status(201).json({ message: 'Student created successfully', student });
    })
    .catch((err) => {
      res.status(400).json({ error: 'Error saving student', err });
    });
};

// Read all students
exports.getAllStudents = (req, res) => {
  Student.find()
    .then((students) => {
      res.json({"status":"success","data":students});
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error retrieving students' });
    });
};

// Read a single student
exports.getStudentById = (req, res) => {
  const { regid } = req.params;

  Student.findOne({ regid })
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({"status":"success", data : student});
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error retrieving student',err });
    });
};

// Update a student
exports.updateStudent = (req, res) => {
  const { regid } = req.params;
  const { name, age, grade } = req.body;

  Student.findOneAndUpdate({regid}, { name, age, grade,}, { new: true })
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({ message: 'Student updated successfully', student });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error updating student',err });
    });
};

// Delete a student
exports.deleteStudent = (req, res) => {
  const { regid } = req.params;

  Student.findOneAndRemove({ regid })
    .then((student) => {
      if (!student) {
        res.status(404).json({ error: 'Student not found' });
      } else {
        res.json({ message: 'Student deleted successfully' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error deleting student' });
    });
};
