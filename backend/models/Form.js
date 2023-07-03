const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FieldSchema = new Schema({
  id: Number,
  question: String,
  type: String,
  options: [String],
});

const FormSchema = new Schema({
  title: String,
  fields: [FieldSchema],
}, {
  timestamps: true,
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
