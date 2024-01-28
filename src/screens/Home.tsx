import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/Customs/Typography';
import Row from '../components/Wrappers/Row';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';

const Home = () => {
  return (
    <View style={styles.container}>
      <Row>
        <Typography>Home</Typography>
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
