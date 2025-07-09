import React from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ReflectScreen() {
  return (
    <GestureHandlerRootView>
      <View>
        <Text className="text-3xl">Reflect center</Text>
      </View>
    </GestureHandlerRootView>
  );
}
