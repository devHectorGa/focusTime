import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors, fontSizes, spacing } from '../../utils';

export const FocusHistory = ({ history }) => {
  if (!history?.length) return null;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.title}>Things we haven't focused on anything yet:</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
