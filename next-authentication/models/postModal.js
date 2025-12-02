import mongoose, { Schema, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the User model
      required: true,
    },
  },
  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", PostSchema);

export default Post;
