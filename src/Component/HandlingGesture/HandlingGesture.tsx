import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState, } from 'react'
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';

const HandlingGesture = () => {
    const [state, setState] = useState(0);
    const pressed = useSharedValue(false);
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);

    const styles = useAnimatedStyle(() => ({
        backgroundColor: pressed.value ? "#ff0" : '#0ff',
        transform: [{ translateX: offsetX.value }, { scale: withTiming(pressed.value ? 1 : 1) }, { translateY: offsetY.value }]
    }))

    const gesture = Gesture.Pan()
        .onBegin(() => pressed.value = true)
        // .onBegin(() => pressed.value = true)
        // .onFinalize(() => pressed.value = false)
        .onChange((value) => {
            offsetX.value = value.translationX;
            offsetY.value = value.translationY;

            // setState(() => value.translationX)

        })
        .onFinalize((value) => {
            // setTranslateValue()
            offsetX.value = withDecay({
                velocity: value.velocityX
            })
            offsetY.value = withDecay({
                velocity: value.velocityY
            })
            offsetX.value = withSpring(0);
            offsetY.value = withSpring(0);
            pressed.value = false
        })
    // .numberOfTaps(5)
    return (
        <GestureHandlerRootView style={style.container}>
            <View style={style.container}>
                {/* <Text>{state}</Text> */}
                <GestureDetector gesture={gesture} >
                    <Animated.View style={[style.circle, styles]} />
                </GestureDetector>
            </View>
        </GestureHandlerRootView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    circle: {
        height: 120,
        width: 120,
        borderRadius: 60,

    }
})

export default HandlingGesture