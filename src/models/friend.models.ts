import mongoose from "mongoose";

export interface IFriend extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    friend: mongoose.Types.ObjectId;
    createdAt: Date;
}

const friendSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    friend: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const FriendModel = mongoose.model<IFriend>("Friend", friendSchema);

export { FriendModel };
