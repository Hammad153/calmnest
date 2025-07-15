import React, {useState} from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Notes = [
  "You are safe here. Breathe in peace, breathe out stress.",
  "It’s okay to pause. Your well-being matters most.",
  "One moment at a time — that’s all you need to focus on.",
  "Your feelings are valid. Let them pass like waves on the shore.",
  "Rest is not a weakness. It’s how you heal and grow.",
  "This space is yours — for peace, reflection, and care.",
  "Even on the hardest days, you’ve made it this far. That’s strength.",
  "Let go. Unwind. You don’t need to carry it all right now.",
  "No pressure. Just presence. You’re doing enough.",
  "You deserve calm. You deserve care. You deserve comfort."
];

const ComfortZone = () => {

  const [note, setNote] = useState<string>("You are safe here. Breathe in peace, breathe out stress.")

  const handleNoteChange = () => {
    setNote(Notes[Math.floor(Math.random() * Notes.length)])
  }
  return (
    <>
       <View className="border-2 border-primary m-4 rounded-lg h-auto">
        <Text className="text-3xl font-bold p-4 ml-3 text-primary">Comfort Note</Text>
        <View>
            <Text className='text-3xl p-4 ml-3 text-primary'>
             {note}
          </Text>  
        </View>
        <View className='mt-2 flex self-end'>
          <MaterialIcons
            name="navigate-next"
            size={50}
            color="#7BAACF"
            onPress={() => handleNoteChange()}
          />
          </View>
      </View>
    </>
  );
}

export default ComfortZone;
