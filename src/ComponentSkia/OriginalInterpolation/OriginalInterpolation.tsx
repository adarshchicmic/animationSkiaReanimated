import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'


const OriginalInterpolation = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const styles = useAnimatedStyle(() => ({
        backgroundColor: '#149',
        transform: [{ translateX: translateX.value }, { translateY: translateY.value }]
    }))

    useEffect(() => {
        translateY.value = withSequence(
            withTiming(500, { duration: 400 }),
        )

        setInterval(() => translateX.value = withTiming(translateX.value + 20, { duration: 100 }), 100)
    }, [])

    const handleStartButtonPress = () => {
        translateX.value = 0;
        // translateY.value = 0;
    }

    return (
        <View style={style.container}>
            <ScrollView horizontal={true} style={{ borderWidth: 1 }} pagingEnabled={true} scrollEnabled={true}>
                <Animated.View style={[style.box, styles]} />
            </ScrollView>
            <View style={style.bottomView}>
                <View style={style.buttonView}>
                    <Pressable style={style.button}>
                        <Text style={style.buttonText}>Up</Text>
                    </Pressable>
                    <Pressable style={style.button} onPress={handleStartButtonPress}>
                        <Text style={style.buttonText}> Start</Text>
                    </Pressable>
                </View>
            </View>
        </View>


    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#151',
        borderRadius: 50,
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#129',
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: '#fff'
    }
})

export default OriginalInterpolation