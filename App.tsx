import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigators';
import {appStore} from './src/store/appStore';

function App(): React.JSX.Element {
  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('0d40c1ee-aa4d-4642-94e4-09d34593cbae');

  // requestPermission will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
  OneSignal.Notifications.requestPermission(true);

  // Method for listening for notification clicks
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={appStore}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar />
          <MainNavigator />
        </SafeAreaView>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
