import React from "react";
import { View, Pressable } from "react-native";

interface Props {
  onPress?: () => void;
  icon?: React.ReactNode
  className?: string
  children? : React.ReactNode
};

 const CircleButton: React.FC<Props> = ({ onPress, icon, className, children }: Props) => {
  return (
    <View className={``}>
      <Pressable onPress={onPress} className={`${className} rounded-full`}>
        {children}
      </Pressable>
    </View>
  );
}

export default CircleButton