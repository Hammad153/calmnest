import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ApHeader from '@/components/Header';


const SecurityScreen = () => {

  return (
    <ScrollView className="">
          <ApHeader title='Security' hasBackButton />
          
          <View>
              <Text className='text-center text-2xl text-primary'>Security center</Text>
          </View>
    </ScrollView>
  );
};

export default SecurityScreen;
