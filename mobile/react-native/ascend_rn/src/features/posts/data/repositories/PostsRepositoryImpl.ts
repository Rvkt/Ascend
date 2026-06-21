import { Post } from '../../domain/entities/Post';
import { PostsRepository } from '../../domain/repositories/PostsRepository';
import { PostsRemoteDataSource } from '../datasources/PostsRemoteDataSource';

export class PostsRepositoryImpl
  implements PostsRepository {

  constructor(
    private readonly remoteDataSource: PostsRemoteDataSource,
  ) {}

  async getPosts(): Promise<Post[]> {
    return this.remoteDataSource.getPosts();
  }
}