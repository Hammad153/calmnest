import React from "react";
import { View, Pressable, Text } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
  className?: string;
};

export default function Button({ label, onPress, className }: Props) {
  return (
    <View className={`${className} p-2 w-[200px] bg-primary my-2`}>
      <Pressable onPress={onPress} className="items-center justify-center">
        <Text className="text-white text-center text-2xl">{label}</Text>
      </Pressable>
    </View>
  );
}
