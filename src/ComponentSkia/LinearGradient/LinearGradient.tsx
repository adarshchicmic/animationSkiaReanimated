import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Circle, LinearGradient, vec } from '@shopify/react-native-skia'


const height = 256;
const width = 256;

const LinearGradients = () => {
    const r = width / 2;
    return (
        <Canvas style={{ flex: 1 }}>
            <Circle cx={256} cy={256} r={78} opacity={0.9}>
                <LinearGradient
                    start={vec(220, 256)}
                    end={vec(256, 256)}
                    colors={['blue', 'yellow']}
                />
            </Circle>
        </Canvas >
    )
}

export default LinearGradients