import { View, Button } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const AnimatedStyleProps = () => {
    const translateX = useSharedValue(0);
    const handleOnPress = () => {
        // translateX.value = withSpring(translateX.value + 60);
        translateX.value = (translateX.value + 40)
    }
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }]
    }))
    return (
        <View>
            <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'blue', borderRadius: 10 }, animatedStyle]} />
            <Button title='Click me' onPress={handleOnPress} />
        </View>
    )
}

export default AnimatedStyleProps