import React from "react";
import { View, ScrollView, Text } from "react-native";
import Sounds from "@/features/Sounds";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ApHeader from "@/components/Header";
import SleepJournal from "@/features/SleepJorunal";
import GuidedBreathing from "@/features/GuidedBreathing";
import ComfortZone from "@/features/ComfortZone";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <View className="h-screen">
      <ApHeader
        title="calmnest"
        icon={<FontAwesome name="moon-o" size={40} color="#7BAACF" />}
      />
      <LinearGradient
        colors={["#E0F7FA", "#ffffff"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          className=" px-4 py-6 space-y-6"
        >
          <View className="border-2 border-primary rounded-lg px-4 pb-4">
            <Text className="text-3xl font-bold pt-4 text-primary">
              Soothing Sounds
            </Text>
            <Sounds />
          </View>

          <GuidedBreathing />

          <SleepJournal />

          <ComfortZone />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
