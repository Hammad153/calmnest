import React from "react";
import { View, Pressable } from "react-native";

interface Props {
  onPress?: () => void;
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode,
  onLongPress? : () => void
};

const CircleButton: React.FC<Props> = ({
  onPress, icon, className, children, onLongPress }: Props) => {
  return (
    <View className={``}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`${className} rounded-full`}
      >
        {children}
      </Pressable>
    </View>
  );
}

export default CircleButton