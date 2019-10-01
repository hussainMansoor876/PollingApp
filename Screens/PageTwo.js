/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Animated,
  ImageBackground,
  Easing,
  Text,
  View,
  Image,
} from 'react-native';



class PageTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: 0
    }
    this.animatedValue = new Animated.Value(0)
  }

  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())

  }

  componentDidMount() {
    this.animate()
    setTimeout(() => {
      this.setState({
        interval: 1
      })
    },1000)
  }

  render() {
    const { interval } = this.state

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-80, 80]
    })

    const marginRight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-80, 80]
    })

    return (
      <View style={{ flex: 1 }}>
        {!interval ? <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 10, marginLeft: 20 }}>
          <Animated.Image
            style={{
              marginLeft: marginLeft,
              // transform: [{ rotate: spin }]
            }}
            source={require('../images/user.png')} />
          <Animated.Image
            style={{
              marginRight: marginRight,
              // transform: [{ rotate: spin }]
            }}
            source={require('../images/info.png')} />
        </View> : <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 10, marginLeft: 20 }}>
            <Image source={require('../images/user.png')} />
            <Image source={require('../images/info.png')} />
          </View>}
        <View style={{ flex: 5 }}>
          <Image style={{ height: 250, width: 250, justifyContent: 'center', alignSelf: 'center' }} source={require('../images/pristine.png')} />
        </View>
        <View style={{ flex: 2 }}>
          <Image style={{ alignSelf: 'center', height: 150, width: 150 }} source={require('../images/premium.png')} />
        </View>
      </View>
    )
  }
}


export default PageTwo;
