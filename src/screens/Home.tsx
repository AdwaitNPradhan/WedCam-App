import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/Customs/Typography';
import Row from '../components/Wrappers/Row';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import useEncStore from '../hooks/useEncStore';

const Header = () => {
  return (
    <Row>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}>
        <View>
          <Typography>MemCam</Typography>
        </View>
        <View></View>
      </View>
    </Row>
  );
};

const Home = () => {
  const {Clear} = useEncStore();
  return (
    <View style={styles.container}>
      <Header />
      <Row>
        <Typography onPress={Clear}>Home</Typography>
      </Row>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  baseText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.QuickSand.regular,
  },
});
