import mongoose from "mongoose";
import { Schema } from "mongoose";

const SessionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Refers to the User model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

const Session =
  mongoose.models.Session || mongoose.model("Session", SessionSchema);

export default Session;
