import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../../core/network/dio_provider.dart';
import '../../data/datasources/posts_remote_data_source.dart';
import '../../data/repositories/posts_repository_impl.dart';
import '../../domain/entities/post.dart';
import '../../domain/repositories/posts_repository.dart';
import '../../domain/usecases/get_posts_use_case.dart';

final postsRemoteDataSourceProvider =
Provider<PostsRemoteDataSource>((ref) {
  return PostsRemoteDataSourceImpl(
    ref.read(dioProvider),
  );
});

final postsRepositoryProvider = Provider<PostsRepository>((ref) {
  return PostsRepositoryImpl(
    ref.read(postsRemoteDataSourceProvider),
  );
});

final getPostsUseCaseProvider = Provider<GetPostsUseCase>((ref) {
  return GetPostsUseCase(
    ref.read(postsRepositoryProvider),
  );
});

final postsProvider = FutureProvider<List<Post>>((ref) async {
  return ref.read(getPostsUseCaseProvider).call();
});