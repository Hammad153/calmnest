import React from "react";
import { View } from "react-native";
import SoundColumn from "./SoundColumn";

export default function Sounds() {

  return (
    <View>
      <SoundColumn
        title="Rain on window"
      />
      <SoundColumn
        title="Ocean waves"
      />
       <SoundColumn
        title="Fireplace"
      />
       <SoundColumn
        title="Wind in trees"
      />
       <SoundColumn
        title="Lofi beats"
      />
    </View>
  );
}
