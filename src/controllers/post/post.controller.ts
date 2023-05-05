import { Request, Response } from "express";
import { IPost } from "../../models/post.models";
import { createPostServices } from "../../services/post/post.service";

const createPostController = async (req: Request, res:Response):Promise<Response> =>{
    const postData: Omit<IPost, 'createdAt' | 'updatedAt'> = req.body
    const authorId = req.user.id
    const postCreated = await createPostServices(authorId ,postData)
    return res.status(201).json(postCreated)
}

export {createPostController}