import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'

const ShakeAnimation = () => {
    const offset = useSharedValue(0);
    const OFFSET = 40;
    const TIME = 250;
    const DELAY = 200;
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }]
    }))
    const handleOnPress = () => {
        // offset.value = withRepeat(withTiming(OFFSET), 6, true);
        offset.value = withDelay(DELAY, withSequence(
            withTiming(-OFFSET, { duration: TIME / 2 }),
            withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
            withTiming(0, { duration: TIME / 2 })
        ))
    }

    return (
        <View style={style.screen}>
            <Animated.View style={[style.boxStyle, animatedStyle]} />
            <Button title='Shake' onPress={handleOnPress} />
        </View>
    )
}


const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxStyle: {
        height: 100,
        width: 100,
        marginBottom: 10,
        backgroundColor: "#9ff",
        borderRadius: 20

    }
})

export default ShakeAnimation