import mongoose, { Schema } from "mongoose";

const workSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);

export default Work;
