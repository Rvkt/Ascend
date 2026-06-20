import 'package:flutter/material.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'features/posts/presentation/pages/posts_page.dart';

void main() {
  runApp(
    const ProviderScope(
      child: AscendApp(),
    ),
  );
}

class AscendApp extends StatelessWidget {
  const AscendApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ascend Flutter',
      debugShowCheckedModeBanner: false,
      home: const PostsPage(),
    );
  }
}