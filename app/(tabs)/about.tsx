import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                About Calmnest
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