import React, {useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import CircleButton from '../components/buttons/CircleButton';

const GuidedBreathing = () => {

  const [holdCount, setHoldCount] = useState<number>(0)

  const handleHoldButton = () => {
    console.log('Button Hold')
    setHoldCount(prev => prev + 1)
  }

  return (
      <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-3 ml-3 text-primary">Guided Breathing</Text>
      <View className="mb-3 mx-6">
        <Text className='shadow-md bg-primary text-xl w-auto flex self-center p-2 rounded-3xl text-white absolute right-4 top-[-12]'>
          {holdCount}
        </Text>
          <View className="items-center mt-2 mb-4">
            <CircleButton
              className="rounded-full w-20 h-20 border-2 border-primary bg-primary shadow-lg"
              onLongPress={() => {handleHoldButton()}}
              children={
                <View className="bg-white w-14 h-14 rounded-full mx-auto mt-[9px]" />
              }
            />
          </View>
        </View>
      </View>
  );
}

export default GuidedBreathing;
