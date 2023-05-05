import mongoose from "mongoose";
import { IUser } from "./user.model";

export interface IPost extends mongoose.Document {
  content: String;
  imgPost?: String | undefined;
  createdAt: Date;
  updatedAt: Date;
  createdBy: IUser["_id"];
}

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  imgPost: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const PostModel = mongoose.model("Post", postSchema);

export { PostModel };
