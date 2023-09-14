import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'



const HANDLE_WIDTH = 20;

const SliderWithPercentage = () => {
    const sliderWidth = useSharedValue(0);
    const progress = useSharedValue(0);
    const [state, setState] = useState(null)

    console.log(state, "this is sliderWidth")

    const animatedHandleStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: progress.value - HANDLE_WIDTH / 2 }]
    }))

    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(234, 234, 234)', justifyContent: 'flex-end', borderRadius: 10 }}
            onLayout={(e) => {
                sliderWidth.value = e.nativeEvent.layout.width;
                setState(e.nativeEvent.layout.width);
            }}
        >

            <Animated.View style={[{
                // height: 30,
                width: HANDLE_WIDTH,
                backgroundColor: 'red',
                borderRadius: 10,
                position: 'absolute',
                bottom: -20,
                top: -20,
            }, animatedHandleStyle]} />


        </View>
    )
}

export default SliderWithPercentage