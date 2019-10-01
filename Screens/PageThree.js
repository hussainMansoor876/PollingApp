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




class PageThree extends React.Component {
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
                <View style={{ flex: 4, bottom: 58 }}>
                    <PulseLoader
                        avatar={'https://res.cloudinary.com/dzkbtggax/image/upload/v1569936732/pristine_ocbvhh.png'}
                        interval={1000}
                        pulseMaxSize={700}
                        borderColor={'white'}
                        backgroundColor={'white'}
                        pressDuration={1000}
                        size={250}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Image style={{ alignSelf: 'center', height: 150, width: 150 }} source={require('../images/premium.png')} />
                </View>
            </View>
        )
    }
}


export default PageThree;
