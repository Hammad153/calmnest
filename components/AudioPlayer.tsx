import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Pressable } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

interface Iprops {
    audioSource: string;
    render?: string;
}

const AudioPlayer: React.FC<Iprops> = ({ audioSource, render }) => {
    const player = useAudioPlayer(audioSource);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [volume, setVolume] = useState(1.0); 

    const togglePlayPause = () => {
        if (isPlaying) {
             player.pause();
            setIsPlaying(false);
        } else {
             player.play();
            setIsPlaying(true);
        }
    };

    const handleVolume = () => {
        console.log('Volume settings')
    }

    return (
        <>
            {
                render === 'home' && (
            <View className='flex flex-row gap-4 flex-end mr-3'>
                <TouchableOpacity onPress={togglePlayPause}>
                    <SimpleLineIcons
                        name={isPlaying ? 'control-pause' : 'control-play'}
                        size={24}
                        color="#7BAACF"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleVolume()}>
                    <Feather
                        name="volume-2"
                        size={24}
                        color="#7BAACF"
                    />
                </TouchableOpacity>
            </View>
                )
            }

            {
                render === 'relax' && (
                    <View className="my-14 flex items-center">
                    <View className="w-48 h-48 rounded-full border-2 border-primary bg-white shadow-md flex items-center justify-center">
                        <Pressable onPress={togglePlayPause}>
                        {isPlaying ? (
                            <SimpleLineIcons
                            name="control-pause"
                            size={80}
                            color="#7BAACF"
                            />
                        ) : (
                            <SimpleLineIcons
                            name="control-play"
                            size={80}
                            color="#7BAACF"
                            />
                        )}
                        </Pressable>
                    </View>

                    <Text className="mt-4 text-xl text-primary font-semibold">
                        {isPlaying ? "Now Playing" : "Tap to Play"}
                    </Text>
                    </View>
                )
            }
        </>
    );
};

export default AudioPlayer;

