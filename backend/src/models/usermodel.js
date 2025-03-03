const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // This automatically creates an index
  },
  email: {
    type: String,
    required: true,
    unique: true,  // This automatically creates an index
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// REMOVE manual indexing (to avoid duplicates)
// userSchema.index({ username: 1 }, { unique: true });
// userSchema.index({ email: 1 }, { unique: true });

userSchema.pre('save', async function () {
  console.log('pre-defined', this);
});

module.exports = mongoose.model('User', userSchema);
