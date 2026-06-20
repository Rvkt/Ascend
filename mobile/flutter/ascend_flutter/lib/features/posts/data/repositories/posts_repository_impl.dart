import '../../domain/entities/post.dart';
import '../../domain/repositories/posts_repository.dart';
import '../datasources/posts_remote_data_source.dart';

class PostsRepositoryImpl implements PostsRepository {
  final PostsRemoteDataSource remoteDataSource;

  const PostsRepositoryImpl(this.remoteDataSource);

  @override
  Future<List<Post>> getPosts() {
    return remoteDataSource.getPosts();
  }
}