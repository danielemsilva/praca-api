const mongoose = require('mongoose');
const Joi = require('joi');

const Student = mongoose.model('Student', new mongoose.Schema({
  'name': {
    'type': String,
    'min': 3,
    'max': 100,
    'required': true
  },
  'age': {
    'type': Number,
    'required': true
  },
  'course': {
    'type': String,
    'required': true
  },
  'grade': {
    'type': String,
    'required': true
  },
  'genre': {
    'type': String,
    'required': true
  }
}));

const validateStudent = (student) => {
  const schema = {
    'name': Joi.string.min(3).max(100).required(),
    'age': Joi.int.min(1).max(99).required(),
    'course': Joi.string.min(3).max(50).required(),
    'grade': Joi.string.min(3).max(50).required(),
    'genre': Joi.string.min(3).max(50).required()
  };

  return Joi.validate(student, schema);
};

module.exports.Student = Student;
module.exports.validateStudent = validateStudent;
