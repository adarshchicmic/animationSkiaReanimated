import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated'

const ExpandAndContract = () => {

    const expand: any = useSharedValue(false);

    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: expand.value ? 'yellow' : 'green',
        transform: [{ scale: expand.value ? 1 : 1.2 }]
    }))
    useEffect(() => {
        // expand.value = withRepeat(withSpring(true, {
        //     mass: 5,
        //     damping: 10,
        //     stiffness: 100,
        // }), -1, true)


    }, [])

    const handleOnPress = () => {
        expand.value = withRepeat(withTiming(true, { duration: 2000 }), -1, true);
    }


    return (
        <View style={style.container}>
            <Animated.View style={[style.circle, animatedStyle]} />
            <Button title="click me" onPress={handleOnPress} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 40
    }

})

export default ExpandAndContract