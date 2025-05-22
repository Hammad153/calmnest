import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imagesource = selectedImage ? { uri: selectedImage } : imgSource
  return <Image source={imagesource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 500,
    borderRadius: 18,
  },
});
