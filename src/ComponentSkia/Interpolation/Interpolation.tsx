import { View, Text, StyleSheet, Easing } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'


const Interpolation = () => {

    const opacity = useSharedValue(0);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(10);
    const rotate = useSharedValue('0deg');

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateX: translateX.value }, { rotate: rotate.value }, {
            translateY: translateY.value
        }],

    }))

    // useEffect(() => {
    //     value.value = withRepeat(withTiming(-value.value, {
    //         duration: 1000, easing: Easing.linear
    //     }), -1, true)
    // })
    useEffect(() => {
        opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true)
        translateX.value = withRepeat(withTiming(300, { duration: 1000 }), - 1, true)
        translateY.value = withRepeat(withTiming(200, { duration: 1000 }), - 1, true)
        rotate.value = withRepeat(withTiming("0deg", { duration: 10000 }), -1, true);

    }, [])


    return (
        <View style={style.container}>
            <Animated.View style={[style.boxStyle, animatedStyle]} />
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    boxStyle: {
        height: 800,
        width: 400,
        backgroundColor: 'green',
        borderRadius: 10,
    }
})

export default Interpolation