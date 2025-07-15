import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, ScrollView } from 'react-native';
import ApHeader from '@/components/Header';
import Button from '@/components/buttons/Button';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const EditProfileScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [name, setName] = useState("Ismail Hammad");
  const [email, setEmail] = useState("hammadismail1546@gmail.com");

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
    <ScrollView className=" bg-white">
      <ApHeader title='Edit Profile' hasBackButton />

      <View className="flex items-center mt-10">
        <Pressable onPress={pickImage} className="mb-4">
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 140, height: 140, borderRadius: 70 }}
            />
          ) : (
            <View className="w-36 h-36 rounded-full bg-[#E0F2F1] flex items-center justify-center">
              <FontAwesome5 name="user" size={70} color="#7BAACF" />
            </View>
          )}
          <Text className="text-sm text-primary text-center mt-2 underline">Change Profile Photo</Text>
        </Pressable>

        <View className="w-[90%]">
          <Text className="text-lg text-gray-700 mb-1">Full Name</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 mb-6 text-base"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <Text className="text-lg text-gray-700 mb-1">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-xl p-4 mb-6 text-base"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <Button
          label="Save Changes"
          className="w-[90%] py-4 mt-6 bg-primary"
          labelClassname="text-xl"
          onPress={() => {
            // logic here (API call)
            console.log("Saved:", { name, email, imageUri });
          }}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;
