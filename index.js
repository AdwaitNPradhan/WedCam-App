/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {initialize} from 'react-native-clarity';
import App from './App';
import {name as appName} from './app.json';

if (!__DEV__) initialize('ksxv726l0r');
AppRegistry.registerComponent(appName, () => App);
