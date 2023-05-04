import mongoose from "mongoose";

export interface IRequest extends Omit<mongoose.Document, "id"> {
  requestingUser: mongoose.Types.ObjectId;
  requestedUser: mongoose.Types.ObjectId;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
  updatedAt?: Date;
}

const requestSchema = new mongoose.Schema({
  requestingUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  requestedUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
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
});

const RequestModel = mongoose.model<IRequest>("Request", requestSchema);

export { RequestModel };
