import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import AudioPlayer from "@/components/AudioPlayer";

interface Iprops {
  title: string;
}

const audioSource = require("@/assets/audio/mixkit-sea-waves-with-birds-loop.mp3");

const SoundColumn: React.FC<Iprops> = ({ title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View className="flex flex-row items-center justify-between px-2 py-2 w-full">
      <View className="flex flex-row gap-2 items-center flex-1">
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color="#7BAACF"
        />
        <Text className="text-2xl text-primary flex-1 flex-wrap">{title}</Text>
      </View>
      <View className="flex flex-row gap-4 items-center pr-3">
        <AudioPlayer audioSource={audioSource} render="home" />
      </View>
    </View>
  );
};
export default SoundColumn;
