import { View, Text } from 'react-native'
import React from 'react'
import { BlurMask, Canvas, Circle, vec } from '@shopify/react-native-skia'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { ownerSVGElement } from 'react-native-svg/lib/typescript/elements/Shape'


const MaskedView = () => {
    const offsetX = useSharedValue(0);
    const offsetY = useSharedValue(0);
    const touched = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetY.value, }]
    }))

    const handleGesture = Gesture.Pan()
        .onBegin(() => {
            touched.value = true;
        })
        .onChange((value) => {
            // offset.value = [value.translationX, value.translationY];
            // offset.value[1] = value.translationY;
            offsetX.value = value.translationX;
            offsetY.value = value.translationY;
        })
        .onFinalize(() => {
            // offsetX.value = 0;
            // offsetY.value = 0;
            touched.value = false;
        })


    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <GestureDetector gesture={handleGesture} >
                <Animated.View style={[{ flex: 1 }, animatedStyle]}>
                    <Canvas style={{ flex: 1 }}>
                        <Circle c={vec(128)} r={80} color={'lightblue'} >
                            <BlurMask blur={20} style={'outer'} />
                        </Circle>
                    </Canvas>
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    )
}

export default MaskedView