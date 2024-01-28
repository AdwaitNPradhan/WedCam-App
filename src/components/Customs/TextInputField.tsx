import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';

const TextInputField = (props: TextInputProps) => {
  return (
    <TextInput {...props} style={[styles.baseTextInputStyle, props.style]} />
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  baseTextInputStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    fontFamily: Fonts.QuickSand.semiBold,
    fontSize: 14,
    padding: 10,
    paddingBottom: 4,
    borderColor: Colors.grey,
    color: Colors.black,
  },
});
