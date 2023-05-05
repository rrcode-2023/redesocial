import { IRequest, RequestModel } from "../../models/request.models";

const createRequestService = async (
  requestingUserId: string,
  requestedUserId: string
): Promise<IRequest> => {
  const request = new RequestModel({
    requestingUser: requestingUserId,
    requestedUser: requestedUserId,
  });

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
