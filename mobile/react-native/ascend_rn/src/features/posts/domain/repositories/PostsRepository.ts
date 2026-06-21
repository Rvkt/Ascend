import { Post } from '../entities/Post';

export interface PostsRepository {
  getPosts(): Promise<Post[]>;
}