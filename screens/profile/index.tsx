import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Button from "@/components/buttons/Button";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import ApHeader from "@/components/Header";
import * as ImagePicker from 'expo-image-picker';
import CircleButton from "@/components/buttons/CircleButton";

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View className="">
      <ApHeader hasBackButton title="Profile" />

      <View className="my-24 flex items-center">
        <View className="border-2 rounded-full border-primary w-40 h-40 flex items-center justify-center overflow-hidden">
           <CircleButton
            className="bg-primary w-12 h-12 absolute left-[2] top-[-12]"
              onPress={() => { }}
              children={ <AntDesign name="plus" size={24} color="white" className="mx-auto z-50" />}
            />
          <Pressable onPress={pickImage}>

            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 160, height: 160, borderRadius: 80 }}
              />
            ) : (
              <FontAwesome5 name="user" size={100} color="#7BAACF" />
            )}
          </Pressable>
        </View>

        <Text className="text-3xl pt-6 text-primary">Ismail Hammad</Text>
      </View>

      <View className="flex items-center">
        <Button label="Edit Profile" className="w-[480px] py-4 my-6" labelClassname="text-3xl" />
        <Button label="Notifications" className="w-[480px] py-4 my-6" labelClassname="text-3xl" />
        <Button label="Security" className="w-[480px] py-4 my-6" labelClassname="text-3xl" />
        <Button label="Help" className="w-[480px] py-4 my-6" labelClassname="text-3xl" />
      </View>
    </View>
  );
}
