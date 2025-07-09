import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ProfileScreen() {
  return (
    <GestureHandlerRootView>
      <View>
        <Text className="text-red-600 text-2xl">User profile</Text>
      </View>
    </GestureHandlerRootView>
  );
}
