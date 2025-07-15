import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface Iprops {
    audioSource: string;
}

const AudioPlayer: React.FC<Iprops> = ({ audioSource }) => {
    const player = useAudioPlayer(audioSource);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const togglePlayPause = () => {
        if (isPlaying) {
             player.pause();
            setIsPlaying(false);
        } else {
             player.play();
            setIsPlaying(true);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={togglePlayPause}>
                <SimpleLineIcons
                    name={isPlaying ? 'control-pause' : 'control-play'}
                    size={24}
                    color="#7BAACF"
                />
            </TouchableOpacity>
        </View>
    );
};

export default AudioPlayer;

