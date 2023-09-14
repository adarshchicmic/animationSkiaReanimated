import { View, Text } from 'react-native'
import React from 'react'
import { Canvas, Circle, Paint, vec } from '@shopify/react-native-skia'

const width = 256;
const height = 256;
const PaintingOverview = () => {
    const strokeWidth = 20;
    const c = vec(width / 2, height / 2);
    const r = (width - strokeWidth) / 2;

    return (

        <Canvas style={{ flex: 1 }}>
            <Circle c={c} r={r} color={'red'} >
                <Paint color={'lightblue'} />
                <Paint style={'stroke'} color={'red'} strokeWidth={strokeWidth} />
                <Paint style={'stroke'} color={'blue'} strokeWidth={strokeWidth / 4} />
            </Circle>

        </Canvas>


    )
}
export default PaintingOverview