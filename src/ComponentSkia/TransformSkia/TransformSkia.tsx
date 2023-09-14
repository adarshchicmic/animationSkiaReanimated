import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Fill, Group, RoundedRect } from '@shopify/react-native-skia'


const TransformSkia = () => {
    return (
        <Canvas style={{ flex: 1 }} >
            <Fill color={'lightblue'} />
            <Group
                color={'blue'}
                transform={[{ skewY: Math.PI / 4 }]}
                origin={{ x: 128, y: 128 }}
            >
                <RoundedRect x={120} y={164} height={128} width={128} r={10} />
            </Group>
        </Canvas>
    )
}

export default TransformSkia