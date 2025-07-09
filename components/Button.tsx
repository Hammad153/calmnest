import React from "react";
import { View, Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === "primary") {
    return (
      <View>
        <Pressable style={[, { backgroundColor: "#fff" }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" />
          <Text>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <Pressable onPress={onPress}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
