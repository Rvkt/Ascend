import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Post } from '../../domain/entities/Post';

interface Props {
  post: Post;
}

export const PostCard = ({
  post,
}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {post.title}
      </Text>

      <Text style={styles.body}>
        {post.body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  body: {
    fontSize: 14,
  },
});