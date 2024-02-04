import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import CodePush from 'react-native-code-push';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import AppUpdate from '../screens/AppUpdate';
import {SelectIsLoggedIn} from '../store/appSlice';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
const requiredPermissions = [
  PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
  PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
  PERMISSIONS.ANDROID.READ_MEDIA_VISUAL_USER_SELECTED,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
];
const MainNavigator = () => {
  const [canMountApp, setCanMountApp] = useState(false);
  const isSignedIn = useSelector(SelectIsLoggedIn);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [checkForUpdate, setCheckforUpdate] = useState(true);
  const [statusText, setStatusText] = useState<string>('');
  const [switchToApp, setSwitchToApp] = useState(false);

  // ------------------ CodePush START --------------------
  const setSyncMessage = useCallback((message: string) => {
    // setStatusText(prev => (prev === '' ? message : prev + '\n' + message));
    setStatusText(message);
  }, []);

  const codePushStatusDidChange = useCallback(
    (syncStatus: CodePush.SyncStatus) => {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          setSyncMessage('Checking for updates');
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          setSyncMessage('Downloading update');
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          setSyncMessage('Awaiting user action');
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          setSyncMessage('Installing update');
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          setSyncMessage('App is up to date');
          pass();
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          setSyncMessage('Update cancelled by user');
          pass();
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          setSyncMessage('Update installed and will be applied on restart');
          pass();
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          setSyncMessage('Delegated');
          // setSyncMessage('An unknown error occurred');
          pass();
          break;
      }
    },
    [setSyncMessage],
  );
  const pass = () => {
    setTimeout(() => {
      setCheckforUpdate(false);
    }, 400);
  };

  useEffect(() => {
    CodePush.notifyAppReady();
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        rollbackRetryOptions: {
          delayInHours: 0.1,
          maxRetryAttempts: 5,
        },
      },
      codePushStatusDidChange,
    );
  }, [codePushStatusDidChange]);

  const GetPermissions = async () => {
    requestMultiple(requiredPermissions).then(statuses => {
      console.log(statuses);
      if (
        statuses[PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION] === 'granted' &&
        statuses[PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
        statuses[PERMISSIONS.ANDROID.READ_MEDIA_AUDIO] === 'granted' &&
        statuses[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === 'granted' &&
        statuses[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO] === 'granted' &&
        statuses[PERMISSIONS.ANDROID.READ_MEDIA_VISUAL_USER_SELECTED] ===
          'granted' &&
        statuses[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted'
      ) {
        setCanMountApp(true);
        return;
      } else {
        GetPermissions();
      }
    });
  };
  useEffect(() => {
    GetPermissions();
  }, []);
  // ------------------ CodePush END ----------------------
  console.log('--->', isSignedIn, 'ad');
  return (
    <>
      <SafeAreaView
        edges={['left', 'top', 'right']}
        style={{
          flex: 0,
        }}
      />
      <NavigationContainer>
        {canMountApp ? (
          !isSignedIn ? (
            <AppNavigator />
          ) : (
            <AuthNavigator />
          )
        ) : (
          <AppUpdate
            statusText={statusText}
            setStatusText={setStatusText}
            switchToApp={setCanMountApp}
            updateCheckComplete={!checkForUpdate}
          />
        )}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
