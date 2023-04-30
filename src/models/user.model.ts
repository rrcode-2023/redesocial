import mongoose from "mongoose";
import { IPost } from "./post.models";

export interface IUser extends Omit<mongoose.Document, "id"> {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt?: Date;
  gender: string;
  profilePicture: string;
  profileCover: string;
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: {
    type: Date,
    required: true,
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
  gender: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  profileCover: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
