/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';


import PulseLoader from 'react-native-pulse-loader';




class PageFour extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginTop: 10, marginLeft: 20 }}>
                    <Image source={require('../images/user.png')} />
                    <Image source={require('../images/info.png')} />
                </View>
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


export default PageFour;
