import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Sticker Smash is a fun and interactive mobile app built with React Native
                that lets you unleash your creativity with digital stickers! Whether you're
                customizing photos, creating expressive messages, or just playing around with cool designs,
                Sticker Smash makes it easy and enjoyable.
            </Text>

            <Text style={styles.text}>
                With a sleek and intuitive interface, you can drag, drop, resize, and rotate stickers on any image,
                or simply create sticker-packed visuals from scratch.
                Perfect for social media lovers, meme creators, and anyone who enjoys adding a splash of personality to their pictures.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    text: {
        color: "#fff",
        justifyContent : 'center',
        width: '80%',
        textAlign: 'center',
        paddingBottom: '5%',
        lineHeight: 18
    }
});