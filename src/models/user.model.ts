import mongoose from "mongoose";

export interface IUser extends Omit<mongoose.Document, "id"> {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt?: Date;
  gender: string;
  profilePicture?: string;
  profileCover?: string;
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
  password: {
    type: String,
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
  },
  profileCover: {
    type: String,
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Friend",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  },
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
