import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Animated, Easing, Vibration, ToastAndroid } from 'react-native';

const GuidedBreathing = () => {
  const [holdCount, setHoldCount] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null | number>(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  let rating: string;

  if (holdCount >= 30) {
    rating = 'Welldone you are doing great'
  } else if (holdCount <= 30) {
    rating = 'Try and keep to your guided breath'
  }

    const showToast = () => {
     ToastAndroid.show(`You Hold breath for ${holdCount} secs, ${rating}`, ToastAndroid.SHORT);
    };

    const stopPulse = () => {
      scaleAnim.stopAnimation();
      scaleAnim.setValue(1);
    };

    const startHold = () => {
      if (intervalRef.current) return;

      Vibration.vibrate(50);
      startPulse();

      intervalRef.current = setInterval(() => {
        setHoldCount(prev => prev + 1);
      }, 1000);
    };

    const stopHold = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      stopPulse();
      showToast();
      setHoldCount(0);
    };

    const resetHold = () => {
      setHoldCount(0);
    };

  return (
    <View className="border-2 border-primary m-4 rounded-lg">
      <Text className="text-3xl font-bold p-3 ml-3 text-primary">Guided Breathing</Text>

      <View className="mb-3 mx-6">
        <Text className="shadow-md bg-primary text-xl w-auto self-center p-2 rounded-3xl text-white absolute right-4 top-[-12]">
          {holdCount}
        </Text>

        <View className="items-center mt-4 mb-4 flex flex-row justify-center gap-4">
          <Pressable
            onPressIn={startHold}
            onPressOut={stopHold}
            className="rounded-full w-20 h-20 border-2 border-primary bg-primary shadow-lg items-center justify-center"
          >
            <Animated.View
              style={{ transform: [{ scale: scaleAnim }] }}
              className="bg-white w-14 h-14 rounded-full"
            />
          </Pressable>
        </View>

        {/* <View className="items-start">
          <Pressable
            onPress={resetHold}
            className="mt-[-10] px-4 py-2"
          >
            <Text className="bg-primary text-white text-sm py-2 px-4 rounded-md">Reset</Text>
          </Pressable>
        </View> */}
      </View>
    </View>
  );
};

export default GuidedBreathing;
