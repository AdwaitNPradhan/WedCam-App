/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initialize} from 'react-native-clarity';
if (!__DEV__) initialize('ksxv726l0r');

AppRegistry.registerComponent(appName, () => App);
