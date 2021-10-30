const { Schema, model } = require('mongoose');

const itemSchema = require('./Item')

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    savedItems: [itemSchema],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const List = model('List', listSchema);

module.exports = List;  
  