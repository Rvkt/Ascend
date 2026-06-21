import { apiClient } from '../../../../core/network/apiClient';
import { ApiConstants } from '../../../../core/network/apiConstants';

import { PostModel } from '../models/PostModel';

export interface PostsRemoteDataSource {
  getPosts(): Promise<PostModel[]>;
}

export class PostsRemoteDataSourceImpl
  implements PostsRemoteDataSource {

  async getPosts(): Promise<PostModel[]> {
    const response = await apiClient.get(
      ApiConstants.posts,
    );

    return response.data.map(
      (json: any) => PostModel.fromJson(json),
    );
  }
}