import { Post } from '../entities/Post';
import { PostsRepository } from '../repositories/PostsRepository';

export class GetPostsUseCase {
  constructor(
    private readonly repository: PostsRepository,
  ) {}

  execute(): Promise<Post[]> {
    return this.repository.getPosts();
  }
}