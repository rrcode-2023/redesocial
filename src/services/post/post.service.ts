import { IPost, PostModel } from "../../models/post.models";

const createPostServices = async (authorId:string,postData: Omit<IPost, 'createdAt' | 'updatedAt'>):Promise<IPost> =>{
    const post = new PostModel({...postData,createdBy:authorId})
    return await post.save()
}

export {createPostServices}