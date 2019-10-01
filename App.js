/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Animated,
  ImageBackground,
  Easing,
  Text
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { PageOne, PageTwo, PageThree, PageFour } from './Screens'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      interval: 0
    }

    this.animVal = new Animated.Value(1)
    this.spinValue = new Animated.Value(0)
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        interval: 1
      }, () => {
        this.updatePage()
      })
    }, 500)

    // this.spin()
    // this.animate()
    // Animated.timing(this.animVal, {

    // })
  }

  updatePage() {
    setInterval(() => {
      this.setState({
        interval: this.state.interval + 1
      })
    }, 2000)
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 9100,
        easing: Easing.linear
      }
    ).start(() => this.spin())

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

    setTimeout(() => this.animatedValue.stopAnimation(({ value }) => console.log("Final Value: " + value)), 250);

  }

  render() {
    const { interval } = this.state

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 2],
      outputRange: [-200, -1]
    })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    })
    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    })

    return (
      <ImageBackground style={{ flex: 1, backgroundColor: 'rgb(80,194,232)' }} source={require('./images/background.png')}>
        {!interval ? <PageOne /> : interval === 1 ? <PageTwo /> : interval === 2 ? <PageThree /> : <PageFour />}
      </ImageBackground>
    )
  }
}


export default App;
