import React, { useState } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import Button from "@/components/buttons/Button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import ApHeader from "@/components/Header";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const router = useRouter();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView className="bg-white h-screen">
      <ApHeader hasBackButton title="Profile" />

       <LinearGradient
              colors={["#E0F7FA", "#fff"]}
              className=" px-4 pb-8"
            >
      <View className="mt-12 flex items-center px-4">
        <View className="relative w-36 h-36 rounded-full mb-4">
          <Pressable onPress={pickImage}>
            {imageUri ? (
              <Image
                source={{ uri: imageUri }}
                style={{ width: 144, height: 144, borderRadius: 72 }}
              />
            ) : (
              <View className="w-full h-full rounded-full bg-[#E0F2F1] flex items-center justify-center">
                <FontAwesome5 name="user" size={70} color="#7BAACF" />
              </View>
            )}
          </Pressable>

          <Pressable
            onPress={pickImage}
            className="absolute -bottom-2 -right-2 bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          >
            <AntDesign name="plus" size={20} color="white" />
          </Pressable>
        </View>

        <Text className="text-3xl text-primary font-semibold">Ismail Hammad</Text>
        <Text className="text-base text-gray-500 mt-1">hammadismail1546@gmail.com</Text>
      </View>

      <View className="mt-20 px-4 space-y-5 pb-20">
        <Button
          label="Edit Profile"
          className="w-full py-4 bg-primary"
          labelClassname="text-xl"
          onPress={() => router.push("/edit-profile")}
        />
        <Button
          label="Notifications"
          className="w-full py-4 bg-primary"
          labelClassname="text-xl"
          onPress={() => router.push("/notifications")}
        />
        <Button
          label="Security"
          className="w-full py-4 bg-primary"
          labelClassname="text-xl"
          onPress={() => router.push("/security")}
        />
        <Button
          label="Help"
          className="w-full py-4 bg-primary"
          labelClassname="text-xl"
          onPress={() => router.push("/help")}
        />
        </View>
        
        </LinearGradient>
    </ScrollView>
  );
}

