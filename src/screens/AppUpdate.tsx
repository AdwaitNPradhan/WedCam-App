import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Typography from '../components/Customs/Typography';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';

const AppUpdate = ({
  statusText = 'Starting...',
  setStatusText,
  updateCheckComplete,
  switchToApp,
}: {
  statusText: string;
  setStatusText: (val: string) => void;
  updateCheckComplete: boolean;
  switchToApp: (val: boolean) => void;
}) => {
  const CheckLocalUser = async () => {
    setStatusText('Checking for login');
    setTimeout(() => {
      setStatusText('Authenticating');
      setTimeout(() => {
        setStatusText('Authenticated');
        setTimeout(() => {
          switchToApp(true);
        }, 200);
      }, 400);
    }, 400);
  };

  useEffect(() => {
    if (updateCheckComplete) {
      CheckLocalUser();
    }
  }, [updateCheckComplete]);

  return (
    <View style={styles.container}>
      <View>
        <ActivityIndicator size="small" color={Colors.black} />
        <Typography numberOfLines={2} ellipsizeMode="head" style={styles.text}>
          {statusText}
        </Typography>
      </View>
    </View>
  );
};

export default AppUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: 'center',
    color: Colors.grey,
    fontSize: 14,
    fontFamily: Fonts.QuickSand.semiBold,
  },
});
