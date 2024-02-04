import {DrawerHeaderProps} from '@react-navigation/drawer';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Typography from '../components/Customs/Typography';
import MaterialIcon from '../components/Icons/MaterialIcon';
import Row from '../components/Wrappers/Row';
import {Fonts} from '../constants/fonts';

const Header = ({route, layout, navigation, options}: DrawerHeaderProps) => (
  <Row
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={{marginRight: 10}}>
        <MaterialIcon name="menu" size={20} color={Colors.black} />
      </Pressable>
      <View>
        <Typography
          style={{fontFamily: Fonts.QuickSand.semiBold, fontSize: 24}}>
          MemCapture
        </Typography>
      </View>
    </View>
  </Row>
);

export default Header;

const styles = StyleSheet.create({});
