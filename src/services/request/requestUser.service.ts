import { AppError } from "../../errors/appError";
import { IRequest, RequestModel } from "../../models/request.models";
import { UserModel } from "../../models/user.model";
import { FriendModel } from "../../models/friend.models";

const createRequestService = async (
    requestingUserId: string,
    requestedUserId: any
): Promise<IRequest> => {
    const request = new RequestModel({
        requestingUser: requestingUserId,
        requestedUser: requestedUserId,
    });

    const user = await UserModel.findById(requestedUserId);

    const existingRequest = await RequestModel.findOne({
        requestingUser: requestingUserId,
        requestedUser: requestedUserId,
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    if (existingRequest) {
        throw new AppError("Friendship request already exists.", 400);
    }

    user.requests.push(requestedUserId);
    await user.save();

    return await request.save();
};

const acceptRequestService = async (requestId: string): Promise<IRequest> => {
    const request = await RequestModel.findById(requestId);

    if (!request) {
        throw new AppError("Request not found", 404);
    }

    request.status = "accepted";

    await request.save();

    const requestingUser = await UserModel.findById(request.requestingUser);
    const requestedUser = await UserModel.findById(request.requestedUser);

    if (!requestingUser || !requestedUser) {
        throw new AppError("User not found", 404);
    }

    const friendRequesting = new FriendModel({
        user: requestingUser._id,
        friend: requestedUser._id,
    });

    const friendRequested = new FriendModel({
        user: requestedUser._id,
        friend: requestingUser._id,
    });

    await friendRequesting.save();
    await friendRequested.save();

    return request;
};
const rejectRequestService = async (requestId: string): Promise<IRequest> => {
    const request = await RequestModel.findById(requestId);

    if (!request) {
        throw new AppError("Request not found", 404);
    }

    await RequestModel.findByIdAndRemove(requestId);

    const requestingUser = await UserModel.findById(request.requestingUser);
    const requestedUser = await UserModel.findById(request.requestedUser);

    if (!requestingUser || !requestedUser) {
        throw new AppError("User not found", 404);
    }

    requestingUser.requests = requestingUser.requests.filter(
        (request) => request.toString() !== requestId
    );

    requestedUser.requests = requestedUser.requests.filter(
        (request) => request.toString() !== requestId
    );

    await requestingUser.save();
    await requestedUser.save();

    return request;
};

const RequestUserService = {
    createRequestService,
    acceptRequestService,
    rejectRequestService,
};
export { RequestUserService };
