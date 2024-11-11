// Models/Post.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to User
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true },  // URL to the uploaded image
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // Users who liked the post
  comments: [commentSchema],  // Array of comments
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema);
