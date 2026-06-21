import { create } from 'zustand';

import { Post } from '../../domain/entities/Post';
import { GetPostsUseCase } from '../../domain/usecases/GetPostsUseCase';

import { PostsRemoteDataSourceImpl } from '../../data/datasources/PostsRemoteDataSource';
import { PostsRepositoryImpl } from '../../data/repositories/PostsRepositoryImpl';
import { RequestStatus } from '../../../../core/types/RequestStatus';

interface PostsState {
  posts: Post[];
status: RequestStatus;
error: string | null;

  fetchPosts: () => Promise<void>;
}

const remoteDataSource = new PostsRemoteDataSourceImpl();

const repository = new PostsRepositoryImpl(
  remoteDataSource,
);

const getPostsUseCase = new GetPostsUseCase(
  repository,
);

export const usePostsStore = create<PostsState>(
  (set) => ({
    posts: [],
    status: RequestStatus.Initial,
    error: null,

    fetchPosts: async () => {
      try {
        set({
          status: RequestStatus.Loading,
          error: null,
        });

        const posts =
          await getPostsUseCase.execute();

        set({
          posts,
          status: RequestStatus.Success,
        });
      } catch (error) {
        set({
          error: 'Failed to load posts',
          status: RequestStatus.Error,
        });
      }
    },
  }),
);