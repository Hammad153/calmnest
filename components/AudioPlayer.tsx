import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

interface Iprops {
    audioSource: string;
}

const AudioPlayer: React.FC<Iprops> = ({ audioSource }) => {
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
    );
};

export default AudioPlayer;

