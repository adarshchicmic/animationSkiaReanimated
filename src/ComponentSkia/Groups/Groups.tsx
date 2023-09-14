import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Circle, Group } from '@shopify/react-native-skia'


const Groups = () => {
    const r = 120;
    return (
        <Canvas style={{ flex: 1 }}>
            <Circle r={r} cx={r} cy={r} color={'#789'} />
            <Group>
                <Circle cx={r} cy={r} r={r / 2} color={'yellow'} style={'stroke'} strokeWidth={20} />
                <Circle cx={r} cy={r} r={r - 20} color={'yellow'} style={'stroke'} strokeWidth={10} />


            </Group>
        </Canvas>
    )
}

export default Groups