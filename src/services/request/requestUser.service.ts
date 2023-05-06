import { AppError } from "../../errors/appError";
import { IRequest, RequestModel } from "../../models/request.models";
import { UserModel } from "../../models/user.model";

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

  request!.status = "accepted";

  return await request!.save();
};

const rejectRequestService = async (requestId: string): Promise<IRequest> => {
  const request = await RequestModel.findById(requestId);

  request!.status = "rejected";

  return await request!.save();
};

const RequestUserService = {
  createRequestService,
  acceptRequestService,
  rejectRequestService,
};
export { RequestUserService };
