import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
