import mongoose from "mongoose";
import { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the User model
      required: true,
    },
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevents redefining model on HMR
const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
