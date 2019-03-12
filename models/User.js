const mongoose = require('mongoose');
/**
 * @const Schema - Mongoose Schema
 */
const Schema = mongoose.Schema;
/**
 * @schema - User Mongoose Schema
 */
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('users', UserSchema);
