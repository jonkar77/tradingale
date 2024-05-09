// src/models/post/userPost.ts
import mongoose, { Schema, Model } from 'mongoose';

// Check if the model already exists before defining it
const Post: Model<any> = mongoose.models.posts || mongoose.model('posts', new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}));

export default Post;