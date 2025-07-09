import React from "react";
import { View } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View>
        <Link href="/">Go back to home screen</Link>
      </View>
    </>
  );
}
