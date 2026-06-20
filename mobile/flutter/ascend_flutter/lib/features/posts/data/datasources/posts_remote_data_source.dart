import 'package:ascend_flutter/core/network/api_constants.dart';
import 'package:dio/dio.dart';

import '../models/post_model.dart';

abstract class PostsRemoteDataSource {
  Future<List<PostModel>> getPosts();
}

class PostsRemoteDataSourceImpl implements PostsRemoteDataSource {
  final Dio dio;

  const PostsRemoteDataSourceImpl(this.dio);

  @override
  Future<List<PostModel>> getPosts() async {
    final response = await dio.get(ApiConstants.posts);

    final data = response.data as List;

    return data
        .map((json) => PostModel.fromJson(json as Map<String, dynamic>))
        .toList();
  }
}