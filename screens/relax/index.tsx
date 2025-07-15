import React, {useState} from "react";
import { View,  Pressable } from "react-native";
import ApHeader from "@/components/Header";
import Button from "@/components/buttons/Button";
import { ProgressBar } from 'react-native-paper';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


export default function RelaxScreen() {

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

   const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  }

  return (
    <View className="">
      <ApHeader
        title="Relaxation"
        hasBackButton
      />
      
      <View className="my-28 flex items-center">
        <View className="border-2 rounded-full border-primary w-48 h-48 flex items-center justify-center">
          <Pressable
            onPress={togglePlayPause}
          >
            {
              isPlaying ? (
                <SimpleLineIcons
                  name="control-pause"
                  size={100}
                  color="#7BAACF"
                />
              ) : (
                <SimpleLineIcons
                  name="control-play"
                  size={100}
                  color="#7BAACF"
                />
              )
            }
          </Pressable>
          
        </View>
      </View>

      <View className="mb-12">
        <ProgressBar
          progress={0.5}
          color="#7BAACF"
          style={{ height: 10 }}
        />
      </View>
      
        <View className="flex items-center">
              <Button
                label='Night time'
                className="w-[480px] py-4 my-6"
                labelClassname="text-3xl"
              />
              <Button
                label='Gentle Rain'
                className="w-[480px] py-4 my-6"
                labelClassname="text-3xl"
              />
              <Button
                label='Meditation'
                className="w-[480px] py-4 my-6"
                labelClassname="text-3xl"
              />
            </View>

      </View>
  );
}
