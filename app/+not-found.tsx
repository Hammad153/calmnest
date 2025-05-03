import { View, StyleSheet } from "react-native";
import { Stack, Link } from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "Oops! Not found"}} />
         <View style={styles.container}>
            <Link href="/" style={styles.button}>Go back to home screen</Link>
         </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
});
// This is the screen that will be shown when a user tries to access a route that doesn't exist.