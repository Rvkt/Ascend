import React, { useEffect } from 'react';

import {
    FlatList,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { usePostsStore } from '../store/postsStore';
import { PostCard } from '../components/PostCard';
import { RequestStatus } from '../../../../core/types/RequestStatus';
import { AppHeader } from '../../../../core/components/AppHeader';

export const PostsScreen = () => {
    const {
        posts,
        status,
        error,
        fetchPosts,
    } = usePostsStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (status === RequestStatus.Loading) {
        return (
            <SafeAreaView style={styles.centerContainer}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    if (status === RequestStatus.Error) {
        return (
            <SafeAreaView style={styles.centerContainer}>
                <Text>{error}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader
                title="Posts"
                subtitle="JSON Placeholder API"
            />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PostCard post={item} />
                )}
                onRefresh={fetchPosts}
                refreshing={status === RequestStatus.Initial}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    listContent: {
        paddingTop: 12,
        paddingBottom: 16,
    },
});