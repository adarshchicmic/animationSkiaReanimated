import { View, Text, Button } from 'react-native'
import React from 'react'
import Animated, { useSharedValue, withSpring, withTiming } from 'react-native-reanimated'


const GettingStarted = () => {
    const width = useSharedValue(100);

    const handlePress = () => {
        width.value = withSpring(width.value + 40);

    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={{ height: 100, backgroundColor: 'red', width, borderRadius: 10 }}
            />
            <Button title='click here' onPress={handlePress} />
        </View>
    )
}

export default GettingStarted