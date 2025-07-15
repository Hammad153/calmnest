import React from "react";
import { View, Text, ScrollView } from "react-native";
import Sounds from "@/features/Sounds";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ApHeader from "@/components/Header";
import SleepJorunal from "@/features/SleepJorunal";
import GuidedBreathing from "@/features/GuidedBreathing";
import ComfortZone from "@/features/ComfortZone";

export default function HomeScreen() {
  return (
      <View >
        <ApHeader
          title="CalmNest"
          icon={<FontAwesome name="moon-o" size={40} color="#7BAACF" />}
      />
      <View className="border-2 border-primary m-4 rounded-lg">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Sleep Sounds</Text>
          <View style={{
            height: 3,
            backgroundColor: '#7BAACF',
            marginLeft: 24,
            marginRight: 24
          }} />
        <Sounds />
      </View>
      <SleepJorunal />
      <GuidedBreathing />
      <ComfortZone />
    </View>
    
  );
}
