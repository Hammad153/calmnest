import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';

const SleepJournal = () => {
  const [text, setText] = useState<string>("");
  
  const handleSave = () => {
    if (text.trim() === '') {
      ToastAndroid.show('Journal saved', 300)
      setText('')
    }
  }
  return (
    <>
       <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Sleep Journal</Text>
        <View className="mb-3 mx-6">
          <TextInput
            // value={text}
            multiline
            numberOfLines={2}
            placeholder="Write something about your rest..."
            className="border border-gray-300 rounded-xl p-4 text-base"
          />
           <TouchableOpacity
                onPress={
                  handleSave}
                className="bg-primary py-3 rounded-3xl items-center w-5/6 mx-auto mt-2"
            >
                <Text className="text-white text-lg font-semibold">Save</Text>
           </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default SleepJournal;
