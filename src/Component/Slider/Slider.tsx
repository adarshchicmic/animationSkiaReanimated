import React, { useState } from 'react';
import { View, Text, PanResponder, Animated, StyleSheet } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import { withSpring } from 'react-native-reanimated';

const Slider = () => {
    const [percentage, setPercentage] = useState(0);
    const translateX = new Animated.Value(0);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            const newValue = (gestureState.dx / 200) * 100; // Assuming slider width is 200
            setPercentage(newValue);
            Animated.event([null, { dx: translateX }], {
                useNativeDriver: false,
            })(event, gestureState);
        },
        onPanResponderRelease: (_, gestureState) => {
            Animated.spring(translateX, {
                toValue: 0,
                velocity: gestureState.vx,
                useNativeDriver: false,
            }).start();
        },
    });

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <Text style={styles.percentageText}>{percentage.toFixed(2)}%</Text>
                <PanGestureHandler {...panResponder.panHandlers}>
                    <Animated.View
                        style={[
                            styles.sliderTrack,
                            {
                                transform: [{ translateX: withSpring(translateX, {}) }],
                            },
                        ]}
                    />
                </PanGestureHandler>
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20,
    },
    sliderTrack: {
        width: 200, // Adjust this width as needed
        height: 20,
        backgroundColor: 'lightgray',
    },
    percentageText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Slider;
