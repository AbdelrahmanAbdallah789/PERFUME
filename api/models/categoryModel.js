import mongoose, { Types } from "mongoose";
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 32,
    trim: true,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema);
