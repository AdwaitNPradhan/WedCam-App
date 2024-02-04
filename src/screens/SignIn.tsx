import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../components/Buttons/Button';
import TextInputField from '../components/Customs/TextInputField';
import Typography from '../components/Customs/Typography';
import Row from '../components/Wrappers/Row';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import useAuthAPI from '../hooks/useAuthAPI';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const {isLoading, Login} = useAuthAPI();
  const onContinuePress = async () => {
    if (!email) return;
    console.log('Continue Pressed');
    await Login(email);
  };
  return (
    <View style={styles.container}>
      <Row style={styles.row}>
        <View style={{margin: 40}}></View>
        <View>
          <Typography
            style={[
              styles.text,
              {fontSize: 40, fontFamily: Fonts.QuickSand.bold},
            ]}>
            MemCam
          </Typography>
        </View>
        <View>
          <Typography
            style={[
              styles.text,
              {
                fontSize: 20,
                textAlign: 'center',
                fontFamily: Fonts.QuickSand.medium,
              },
            ]}>
            Turn your device into a shared memory space
          </Typography>
        </View>
      </Row>
      <Row style={styles.row}>
        <View style={[{width: '80%'}]}>
          <View>
            <TextInputField
              keyboardType="email-address"
              returnKeyLabel="Next"
              placeholderTextColor={Colors.grey}
              placeholder="Your Email here"
              textAlign="center"
              onChangeText={setEmail}
              autoCapitalize={'none'}
              editable={!isLoading}
              style={{fontSize: 20, fontFamily: Fonts.QuickSand.medium}}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Button
              text="Continue"
              onPress={onContinuePress}
              disabled={!email}
              isLoading={isLoading}
            />
          </View>
        </View>
      </Row>
      <Row style={styles.row}>
        <Typography style={[styles.text, {fontSize: 20}]}>
          Made with care by
        </Typography>
        <Typography
          style={[
            styles.text,
            {fontFamily: Fonts.QuickSand.regular, fontSize: 16},
          ]}>
          Adwait Narayan Pradhan
        </Typography>
        <Typography
          style={[
            styles.text,
            {fontFamily: Fonts.QuickSand.regular, fontSize: 16},
          ]}>
          Rudrava Mukherjee
        </Typography>
      </Row>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: Fonts.QuickSand.semiBold,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
