import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ApHeader from '@/components/Header';


const HelpSrceen = () => {

  return (
    <ScrollView className="">
          <ApHeader title='Help' hasBackButton />
          
          <View>
              <Text className='text-center text-2xl text-primary'>Help center</Text>
          </View>
    </ScrollView>
  );
};

export default HelpSrceen;
