// If you run into problems, make sure the import config is tied to where the aws exports is

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
