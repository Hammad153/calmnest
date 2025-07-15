import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircleButton from '../components/buttons/CircleButton';

const GuidedBreathing = () => {
  return (
    <>
       <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Guided Breathing</Text>
        <View className="mb-3 mx-6">
         <CircleButton 
            onPress={() => { }}
            className='rounded-full w-24 h-24 border-2 border-primary flex self-end mr-6 bg-primary'
            children={
                <TouchableOpacity>
                <View className='bg-white w-16 h-16 rounded-full mx-auto mt-3 shadow-2xl'/>
                </TouchableOpacity>
            }
        />
        </View>
      </View>
    </>
  );
}

export default GuidedBreathing;
