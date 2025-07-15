import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const SleepJournal = () => {
    const [text, setText] = React.useState("");
  return (
    <>
       <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Sleep Journal</Text>
        <View className="mb-3 mx-6">
          <TextInput
            multiline
            numberOfLines={2}
            placeholder="Write something about your rest..."
            className="border border-gray-300 rounded-xl p-4 text-base"
          />
           <TouchableOpacity
                onPress={() => {
                  console.log({ });
                }}
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
