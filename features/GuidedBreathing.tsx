import React from 'react';
import { View, Text } from 'react-native';
import CircleButton from '../components/buttons/CircleButton';

const GuidedBreathing = () => {
  return (
       <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Guided Breathing</Text>
        <View className="mb-3 mx-6">
          <View className="items-center mt-4 mb-6">
          <CircleButton
            className="rounded-full w-24 h-24 border-2 border-primary bg-primary shadow-lg"
            onPress={() => { }}
            children={
              <View className="bg-white w-16 h-16 rounded-full mx-auto mt-3" />
            }
          />
          </View>
        </View>
      </View>
  );
}

export default GuidedBreathing;
