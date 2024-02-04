import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import APIClient, {AuthAPIClient} from '../api/axios.config';
import Typography from '../components/Customs/Typography';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import useAuthAPI from '../hooks/useAuthAPI';
import useEncStore from '../hooks/useEncStore';

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
  const {GetItem, Clear} = useEncStore();
  const {GetProfile} = useAuthAPI();

  const CheckLocalUser = async () => {
    setStatusText('Checking for login');
    const token = await GetItem('wedcam-token');
    if (!token) {
      setStatusText('No login found');
      switchToApp(true);
      return;
    }
    setStatusText('Login found');
    console.log('adf', token);
    APIClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    AuthAPIClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setStatusText('Authenticating');
    const user = await GetProfile();
    setTimeout(() => {
      if (!user) {
        setStatusText('Login failed');
      } else {
        setStatusText('Login success');
      }
      switchToApp(true);
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
    fontSize: 18,
    fontFamily: Fonts.QuickSand.semiBold,
  },
});
