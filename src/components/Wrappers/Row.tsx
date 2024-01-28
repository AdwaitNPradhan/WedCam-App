import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

const Row = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
