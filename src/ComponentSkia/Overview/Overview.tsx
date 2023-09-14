import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Canvas, Circle, useCanvasRef } from '@shopify/react-native-skia'


const Overview = () => {
    const ref = useCanvasRef();

    useEffect(() => {
        setTimeout(() => {
            const image = ref.current?.makeImageSnapshot();

            if (image) {
                const bytes = image.encodeToBytes();

            }
        }, 100)
    })

    return (
        <View style={{ flex: 1 }}>
            <Canvas style={{ flex: 1 }} ref={ref}>
                <Circle cx={128} cy={128} r={128} color={'red'} />
            </Canvas>
        </View>


    )
}

export default Overview