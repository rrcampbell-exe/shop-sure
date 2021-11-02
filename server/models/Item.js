const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    quantity: {
      type: Number,
      required: false,
    },
    department: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

const Item = model('Item', itemSchema);

module.exports = itemSchema;  
  