import { View, Button } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

const CustomizingAnimation = () => {
    return (
        <View>
            <Animated.View />
            <View>
                <Button title="click here" />
            </View>
        </View>
    )
}

export default CustomizingAnimation