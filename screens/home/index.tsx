import React from "react";
import { View, Text } from "react-native";
import Sounds from "@/components/Sounds";
import RecordAudio from "@/components/RecordAudio";

export default function HomeScreen() {
  return (
    <View>
      <Text className="text-2xl text-center text-green-500 pt-6">
        Hello, welcome to the favourite calmnest app
      </Text>
      <Sounds />
      <RecordAudio />
    </View>
  );
}
