import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ApHeader from "@/components/Header";
import { ProgressBar } from "react-native-paper";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function RelaxScreen() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <View className="bg-white h-screen">
      <ApHeader title="Relaxation" hasBackButton />

      <LinearGradient
        colors={["#E0F7FA", "#ffffff"]}
        className=" px-4 pb-8"
      >

        <View className="my-14 flex items-center">
          <View className="w-48 h-48 rounded-full border-2 border-primary bg-white shadow-md flex items-center justify-center">
            <Pressable onPress={togglePlayPause}>
              {isPlaying ? (
                <SimpleLineIcons
                  name="control-pause"
                  size={80}
                  color="#7BAACF"
                />
              ) : (
                <SimpleLineIcons
                  name="control-play"
                  size={80}
                  color="#7BAACF"
                />
              )}
            </Pressable>
          </View>

          <Text className="mt-4 text-xl text-primary font-semibold">
            {isPlaying ? "Now Playing" : "Tap to Play"}
          </Text>
        </View>

        <View className="mb-10 px-6">
          <ProgressBar
            progress={0.35}
            color="#7BAACF"
            style={{ height: 8, borderRadius: 10 }}
          />
        </View>

        {/* Audio Themes Section */}
        <View className="space-y-5">
          {["Night Time", "Gentle Rain", "Meditation"].map((title, index) => (
            <Pressable
              key={index}
              className="bg-primary/10 border border-primary rounded-2xl mt-4 px-6 py-5 w-full flex justify-between items-center shadow-sm"
              onPress={() => {
                // Change audio source based on title
                console.log("Selected:", title);
              }}
            >
              <Text className="text-xl text-primary font-medium">
                {title}
              </Text>
            </Pressable>
          ))}
        </View>

      </LinearGradient>
    </View>
  );
}
