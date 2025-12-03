import mongoose, { Schema, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the User model
      required: true,
    },
  },
  { timestamps: true }
);

const Post = models.Blog || mongoose.model("Blog", BlogSchema);

export default Post;
