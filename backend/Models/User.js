import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // List of users who follow this user
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // List of users this user follows
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User; 
