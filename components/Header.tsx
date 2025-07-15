import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

interface Iprops {
    icon?: React.ReactNode;
    title: string;
    hasBackButton? : boolean
}

const ApHeader: React.FC<Iprops> = ({
    icon, title, hasBackButton
}) => {

    const router = useRouter();
    const handleBack = () => {
        router.back()
    }

    return (
        <View className="flex flex-row justify-center items-center bg-white py-4">
            <Text className="absolute left-2 pl-4">
                {icon}
            </Text>
            {
                hasBackButton && (
                    <AntDesign
                        name="arrowleft"
                        size={30}
                        color="#7BAACF"
                        className="absolute left-2 pl-4"
                        onPress={handleBack}
                    />
                )
            }
            <Text className="text-3xl font-bold text-primary">
                {title}
            </Text>
        </View>
    )
}

export default ApHeader
