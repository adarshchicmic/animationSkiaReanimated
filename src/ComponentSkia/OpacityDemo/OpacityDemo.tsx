import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Circle, Group, vec } from '@shopify/react-native-skia'

const width = 256;
const height = 256;
const strokeWidth = 30;
const r = width / 2 - strokeWidth / 2;
const c = vec(width / 2, height / 2);

const OpacityDemo = () => {
    return (
        <Canvas style={{ width, height, borderWidth: 1 }}>
            <Group opacity={0.5}>
                <Circle c={c} r={r} color={'red'} />
                <Circle c={c} r={r} style={'stroke'} strokeWidth={strokeWidth} color={'lightblue'} />
                <Circle c={c} r={r} style={'stroke'} color={'mint'} strokeWidth={strokeWidth / 2} />
                <Circle c={c} r={r} style={'stroke'} color={'yellow'} strokeWidth={strokeWidth / 10} />
            </Group>
        </Canvas>
    )
}

export default OpacityDemo