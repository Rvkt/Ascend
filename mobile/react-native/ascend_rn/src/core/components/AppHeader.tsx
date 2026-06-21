import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
};

export const AppHeader = ({
  title,
  subtitle,
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        numberOfLines={1}
      >
        {title}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    width: '100%',
  },
});