import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import ApHeader from "@/components/Header";

export default function ReflectScreen() {
  const [mood, setMood] = useState<string | null>(null);
  const [reflection, setReflection] = useState("");

  const moods = [
    { label: "😊", value: "Happy" },
    { label: "😔", value: "Sad" },
    { label: "😐", value: "Neutral" },
    { label: "😡", value: "Angry" },
    { label: "😌", value: "Calm" },
  ];

  return (
    <ScrollView className="bg-[#F8FAF9] px-4 pt-4">
      <ApHeader hasBackButton title="Reflect" />

      <View className="mt-4 mb-6 p-4 rounded-2xl bg-[#E0F2F1]">
        <Text className="text-center text-lg italic text-[#004D40]">
          "Today I choose peace over perfection."
        </Text>
      </View>

      <Text className="text-base text-gray-700 mb-2">How are you feeling today?</Text>
      <View className="flex-row justify-between mb-6">
        {moods.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setMood(item.value)}
            className={`items-center px-3 py-2 rounded-xl ${
              mood === item.value ? "bg-[#7BAACF]" : "bg-white"
            }`}
          >
            <Text className="text-2xl">{item.label}</Text>
            <Text className="text-xs mt-1">{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-base text-gray-700 mb-2">Write your reflection:</Text>
      <TextInput
        placeholder="What happened today? How did you respond?"
        multiline
        numberOfLines={6}
        value={reflection}
        onChangeText={setReflection}
        className="bg-white rounded-2xl p-4 text-base text-gray-800 mb-6"
        style={{ textAlignVertical: "top" }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log({ mood, reflection });
          setMood(null);
          setReflection("");
        }}
        className="bg-primary py-4 rounded-full items-center"
      >
        <Text className="text-white text-lg font-semibold">Save Reflection</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
