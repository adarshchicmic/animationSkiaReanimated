import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'


const WithSpringHeavy = () => {
    const animationWithHeavySpring = useSharedValue(100);
    const animationHeavyHoonMai = useSharedValue(100);

    const animationStyleWithSpring = useAnimatedStyle(() => ({
        transform: [{ translateX: animationWithHeavySpring.value }]
    }))
    const animationStyleHeavyHoonMai = useAnimatedStyle(() => ({
        transform: [{ translateX: animationHeavyHoonMai.value }]
    }))

    useEffect(() => {
        animationWithHeavySpring.value = withRepeat(withSpring(-animationWithHeavySpring.value), -1, true);

        animationHeavyHoonMai.value = withRepeat(withSpring(-animationHeavyHoonMai.value, {
            mass: 5,
            damping: 20,
            stiffness: 100,
        }), -1, true)
    })

    return (
        <View style={style.page}>
            <Animated.View style={[style.boxes, animationStyleWithSpring]}>
                <Text>WithSpringHeavy</Text>
            </Animated.View>
            <Animated.View style={[style.boxes, animationStyleHeavyHoonMai]}>
                <Text> Heavy hoon mai </Text>
            </Animated.View>

        </View>
    )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxes: {
        height: 100,
        width: 100,
        backgroundColor: '#f68',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    }
})
export default WithSpringHeavy