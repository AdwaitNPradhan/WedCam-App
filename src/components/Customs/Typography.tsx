import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

const Typography = (props: TextProps) => {
  return <Text {...props} style={[styles.baseTextStyle, props.style]} />;
};

export default Typography;

const styles = StyleSheet.create({
  baseTextStyle: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.QuickSand.regular,
  },
});
