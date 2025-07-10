import React from "react";
import { Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text>{label}</Text>
    </Pressable>
  );
}
