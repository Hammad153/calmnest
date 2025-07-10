import React from "react";
import { View } from "react-native";
import { useAudioPlayer } from "expo-audio";
import Button from "./buttons/Button";

const audioSource = require("@/assets/audio/mixkit-sea-waves-with-birds-loop.mp3");

export default function Sounds() {
  const player = useAudioPlayer(audioSource);

  return (
    <View className="text-white p-4">
      <Button
        label="Play Sound"
        onPress={() => player.play()}
        className="rounded-lg text-white"
      />
      <Button
        label="Replay Sound"
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
        className="rounded-lg text-white"
      />
    </View>
  );
}
