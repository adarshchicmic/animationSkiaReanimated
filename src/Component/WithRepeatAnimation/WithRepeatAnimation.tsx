import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const duration = 2000;
const WithRepeatAnimation = () => {
    const defaultAnim = useSharedValue(200);
    const linear = useSharedValue(200);
    const handleOnPress = () => {
        console.log("Pressed")
    }
    const reduceMotion = useReducedMotion();

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ translateX: defaultAnim.value }]
    }))
    const animatedChanged = useAnimatedStyle(() => ({
        transform: [{ translateX: linear.value }]
    }))

    useEffect(() => {
        linear.value = withRepeat(
            withTiming(-linear.value, {
                duration: duration,
            }),
            -1,
            true
        )
        defaultAnim.value = withRepeat(withTiming(- defaultAnim.value, {
            duration
        }),
            -1,
            false
        )
    })


    return (
        <View style={style.fullPage}>
            <Animated.View style={[style.boxStyle, animatedDefault]}>
                <Text>Inout Animation </Text>
            </Animated.View>
            <Animated.View style={[style.boxStyle, animatedChanged]}>
                <Text>Linear Animations </Text>
            </Animated.View>
            <Button title='Click me' onPress={handleOnPress} />
        </View>
    )
}

const style = StyleSheet.create({
    fullPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    boxStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'violet',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default WithRepeatAnimation