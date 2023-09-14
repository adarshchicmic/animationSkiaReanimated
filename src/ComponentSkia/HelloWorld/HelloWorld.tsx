import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Group, Circle } from '@shopify/react-native-skia'

const HelloWorld = () => {
    const size = 122;
    const r = size * .33;
    return (
        <View style={{ flex: 1, }}>
            <Canvas style={{ flex: 1 }} >
                <Group blendMode={'softLight'}>
                    <Circle cx={r} cy={r} r={r} color={'red'} />
                    <Circle cx={size - r} cy={r} r={r} color={"blue"} />
                    <Circle cx={size / 2} cy={size - r} r={r} color={'green'} />
                </Group>
            </Canvas>
        </View>
    )
}

export default HelloWorld