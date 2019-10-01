/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class PageOne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          {/* <Image style={{ height: 250, width: 250, justifyContent: 'center', alignSelf: 'center', marginTop: 100 }} source={require('../images/pristine.png')} /> */}
        </View>
    )
  }
}


export default PageOne;
