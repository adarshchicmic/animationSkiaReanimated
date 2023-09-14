import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { BlurMask, Canvas, Group, Rect, RoundedRect, Circle, translate } from '@shopify/react-native-skia'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'


const SkiaShader = () => {
    const scale = useSharedValue(1);
    const roundedRadius = useSharedValue(15);

    const styleBhoot = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    const handleOnPress = () => {
        scale.value = withRepeat(withTiming(3, { duration: 1000 }), -1, true);
        roundedRadius.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
    }


    return (
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.middleContainer, styleBhoot]}>
                <Canvas style={{ flex: 1, backgroundColor: '#AE743A' }}>
                    <Group blendMode={'difference'}>
                        <RoundedRect x={100} y={190} width={200} height={200} r={80} >
                            <BlurMask blur={10} style={'normal'} />
                        </RoundedRect>
                        <RoundedRect x={100} y={290} width={200} height={250} r={20} >
                            <BlurMask blur={40} style={'normal'} />
                        </RoundedRect>
                        <Circle cx={160} cy={270} r={roundedRadius.value} color={'blue'} >
                            <BlurMask blur={6} style={'normal'} />
                        </Circle>
                        <Circle cx={230} cy={270} r={15} color={'blue'} >
                            <BlurMask blur={6} style={'normal'} />
                        </Circle>
                    </Group>
                </Canvas>
            </Animated.View>
            <Pressable onPress={handleOnPress}>
                <Text>Click here...</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    middleContainer: {
        flex: 1,
    },


})

export default SkiaShader