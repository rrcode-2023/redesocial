import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
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
});

const UserModel = mongoose.model("User", userSchema);

export { UserModel };
