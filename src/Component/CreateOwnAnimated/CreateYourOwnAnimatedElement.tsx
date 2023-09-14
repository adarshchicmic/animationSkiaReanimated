import { View, Button } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring, withTiming, Easing } from 'react-native-reanimated'
import { Circle } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CreateYourOwnAnimatedElement = () => {
    const res = useSharedValue(10);
    const handleOnPress = () => {
        res.value = withTiming(res.value * 1.5, {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
        })
        // res.value = withSpring(res.value * 1.5)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Animated.View style={{ width: res, height: res, borderRadius: res, backgroundColor: 'red', alignSelf: 'center' }} />
            <View style={{ position: 'absolute', bottom: 0, borderWidth: 1 }}>
                <Button title="Click me" onPress={handleOnPress} />
            </View>

        </View>
    )
}

export default CreateYourOwnAnimatedElement