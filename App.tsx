import {
  View,
  Text,
  SafeAreaView,
} from 'react-native'
import React from 'react'
import GettingStarted from './src/Component/GettingStarted/GettingStarted'
import AnimatedStyleProps from './src/Component/AnimatedStyleProps/AnimatedStyleProps'
import CreateYourOwnAnimatedElement from './src/Component/CreateOwnAnimated/CreateYourOwnAnimatedElement'
import CustomizingAnimation from './src/Component/CustomizingAnimations/CustomizingAnimation'
import WithRepeatAnimation from './src/Component/WithRepeatAnimation/WithRepeatAnimation'
import WithSpringHeavy from './src/Component/WithSpringHeavy/WithSpringHeavy'
import ShakeAnimation from './src/Component/ShakeAnimation/ShakeAnimation'
import HandlingGesture from './src/Component/HandlingGesture/HandlingGesture'
import ExpandAndContract from './src/Component/ExpandAndContractContinuously/ExpandAndContract'
import SliderWithPercentage from './src/Component/SliderWithPercentage/SliderWithPercentage'
import Slider from './src/Component/Slider/Slider'
import HelloWorld from './src/ComponentSkia/HelloWorld/HelloWorld'
import Overview from './src/ComponentSkia/Overview/Overview'
import Context from './src/ComponentSkia/Context/Context'
import PaintingOverview from './src/ComponentSkia/PaintingOverview/PaintingOverview'
import Inheritence from './Inheritence'
import LinearGradient from './src/ComponentSkia/LinearGradient/LinearGradient'
import LinearGradients from './src/ComponentSkia/LinearGradient/LinearGradient'
import OpacityDemo from './src/ComponentSkia/OpacityDemo/OpacityDemo'
import Groups from './src/ComponentSkia/Groups/Groups'
import TransformSkia from './src/ComponentSkia/TransformSkia/TransformSkia'
import MaskedView from './src/ComponentSkia/MaskedView/MaskedView'
import Interpolation from './src/ComponentSkia/Interpolation/Interpolation'
import OriginalInterpolation from './src/ComponentSkia/OriginalInterpolation/OriginalInterpolation'
import { ScrollView } from 'react-native-gesture-handler'
import { Comp } from './src/ComponentSkia/ScrollView/ScrollView'
import SkiaShader from './src/ComponentSkia/SkiaShader/SkiaShader'

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>

      {/* <GettingStarted /> */}
      {/* <AnimatedStyleProps /> */}
      {/* <CreateYourOwnAnimatedElement /> */}
      {/* <CustomizingAnimation /> */}
      {/* <WithRepeatAnimation /> */}
      {/* <WithSpringHeavy /> */}
      {/* <ShakeAnimation /> */}
      {/* <HandlingGesture /> */}
      {/* <ExpandAndContract /> */}
      {/* <SliderWithPercentage /> */}
      {/* <Slider /> */}
      {/* <HelloWorld /> */}
      {/* <Overview /> */}
      {/* <Context /> */}
      {/* <PaintingOverview /> */}
      {/* <Inheritence /> */}
      {/* <LinearGradients /> */}
      {/* <OpacityDemo /> */}
      {/* <Groups /> */}
      {/* <TransformSkia /> */}
      {/* <MaskedView /> */}
      {/* <Interpolation /> */}
      {/* <OriginalInterpolation /> */}
      {/* <Comp /> */}
      <SkiaShader />
    </SafeAreaView >
  )
}

export default App