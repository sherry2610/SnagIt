import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';

LogBox.ignoreAllLogs(true)

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
