import React from 'react';
import { type ImageSource } from 'expo-image';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'; 

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {

    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
 
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
            } else {
            scaleImage.value = Math.round(scaleImage.value / 2);
            }
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
          width: withSpring(scaleImage.value),
          height: withSpring(scaleImage.value),
        };
      });

      const drag = Gesture.Pan().onChange(e => {
        translateX.value += e.changeX;
        translateY.value += e.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    })

  return (
    <GestureDetector gesture={drag}>
    <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
            <Animated.Image 
            source={stickerSource as any} 
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
            />
        </GestureDetector>
    </Animated.View>
    </GestureDetector>
  );
}
