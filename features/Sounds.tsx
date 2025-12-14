import React from "react";
import { View } from "react-native";
import SoundColumn from "../components/SoundColumn";

export default function Sounds() {
  return (
    <View className="w-full">
      <SoundColumn title="Rain on window" />
      <SoundColumn title="Ocean waves" />
      <SoundColumn title="Fireplace" />
      <SoundColumn title="Wind in trees" />
      <SoundColumn title="Lofi beats" />
    </View>
  );
}
