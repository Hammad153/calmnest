import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <GestureHandlerRootView>
      <View>
        <Text className="text-red-600 text-2xl">
          Hello, welcome to the favourite calmnest app
        </Text>
      </View>
    </GestureHandlerRootView>
  );
}
