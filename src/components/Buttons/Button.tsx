import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../constants/colors';
import {Fonts} from '../../constants/fonts';
import Typography from '../Customs/Typography';

const Button = ({
  text,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
  isLoading,
}: {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.baseButtonStyles, buttonStyle]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.black} />
        ) : (
          <Typography style={[styles.baseTextStyle, textStyle]}>
            {text}
          </Typography>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  baseButtonStyles: {
    borderWidth: 1,
    backgroundColor: Colors.grey33,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  baseTextStyle: {
    fontFamily: Fonts.QuickSand.semiBold,
  },
});
