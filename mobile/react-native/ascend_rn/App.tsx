import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PostsScreen } from './src/features/posts/presentation/screens/PostsScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <PostsScreen />
    </SafeAreaProvider>
  );
}