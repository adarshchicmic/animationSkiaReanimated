import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Circle, Group } from '@shopify/react-native-skia';

const width = 256;
const height = 256;

const Inheritence = () => {
    const r = width / 6;
    return (
        <Canvas style={{ height, width }}>
            <Group color='lightblue'>
                <Circle cx={r} cy={r} r={r} />
                <Group style={'stroke'} strokeWidth={10}>
                    <Circle cx={r * 4} cy={r * 3} r={r} />
                </Group>

            </Group>
        </Canvas>
    )
}

export default Inheritence