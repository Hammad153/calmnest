import React from "react";
import { View, Pressable, TouchableOpacity, Text } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
  className?: string;
  labelClassname?: string;
  containerClassName?: string;
};

export default function Button({ label, onPress, className, labelClassname }: Props) {
  return (
    <View className={`${className} p-2 w-[200px] bg-primary my-2 rounded-lg`}>
      <Pressable
        onPress={onPress}
        className={`items-center justify-center`}
      >
        <Text className={`text-white text-center text-2xl ${labelClassname}`}>{label}</Text>
      </Pressable>
    </View>
  );
}
