import React, {useState} from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Checkbox } from 'react-native-paper';
import Feather from '@expo/vector-icons/Feather';
import AudioPlayer from "@/components/AudioPlayer";

interface Iprops {
    title: string;
}

const audioSource = require("@/assets/audio/mixkit-sea-waves-with-birds-loop.mp3");

const SoundColumn: React.FC<Iprops> = ({
    title
}) => {
      const [checked, setChecked] = useState(false);

    return (
        <View className="flex flex-row items-center justify-between p-2 mx-2">
            <View className="flex flex-row gap-2 items-center">
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color="#7BAACF"
                />
                <Text className="text-2xl text-primary">
                    {title}
                </Text>
            </View>
            <View className="flex flex-row gap-4 flex-end mr-3">
                <AudioPlayer audioSource={audioSource} />
            </View>
        </View>
    )
}
export default SoundColumn;