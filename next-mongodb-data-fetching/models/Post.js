import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Use this pattern to prevent Next.js hot-reloading issues
const Post = mongoose.models.post || mongoose.model('post', postSchema);

export default Post;
