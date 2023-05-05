import { Request, Response } from "express";
import { IRequest } from "../../models/request.models";
import { RequestUserService } from "../../services/request/requestUser.service";

const createRequestController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const requestingUserId = req.user.id;
  const requestedUserId = req.body.requestedUserId;
  const request: IRequest = await RequestUserService.createRequestService(
    requestingUserId,
    requestedUserId
  );

  return res.status(201).json(request);
};

const acceptRequestController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const requestId = req.params.requestId;

  await RequestUserService.acceptRequestService(requestId);

  return res.status(200).send();
};

const rejectRequestController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const requestId = req.params.requestId;

  await RequestUserService.rejectRequestService(requestId);

  return res.status(200).send();
};

export {
  createRequestController,
  acceptRequestController,
  rejectRequestController,
};
