import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import ApHeader from '@/components/Header';
import Button from '@/components/buttons/Button';

const JournalScreen: React.FC = () => {
  const [entry, setEntry] = useState({
    bedtime: '',
    fallAsleep: '',
    wakeTime: '',
    sleepQuality: '',
    thoughts: '',
    screenTime: '',
    dreams: '',
    mood: '',
    notes: ''
  });

  const handleChange = (key: keyof typeof entry, value: string) => {
    setEntry((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Saved Entry:', entry);
    // TODO: Replace with actual save logic (AsyncStorage, or Firebase)
  };

    return (
    <View className=" bg-white">
      <ApHeader hasBackButton title="Sleep Journal" />

      <View className="px-6 py-4 space-y-12 flex flex-col gap-4">
        <TextInput
          label="🕰️ Bedtime"
          value={entry.bedtime}
          onChangeText={(text) => handleChange('bedtime', text)}
          mode="outlined"
        />
        <TextInput
          label="😴 Time You Fell Asleep"
          value={entry.fallAsleep}
          onChangeText={(text) => handleChange('fallAsleep', text)}
          mode="outlined"
        />
        <TextInput
          label="⏰ Wake-Up Time"
          value={entry.wakeTime}
          onChangeText={(text) => handleChange('wakeTime', text)}
          mode="outlined"
        />
        <TextInput
          label="⭐ Sleep Quality (e.g., 4/5)"
          value={entry.sleepQuality}
          onChangeText={(text) => handleChange('sleepQuality', text)}
          mode="outlined"
        />
        <TextInput
          label="🧠 Thoughts Before Sleep"
          value={entry.thoughts}
          onChangeText={(text) => handleChange('thoughts', text)}
          mode="outlined"
          multiline
        />
        <TextInput
          label="📱 Screen Time Before Bed"
          value={entry.screenTime}
          onChangeText={(text) => handleChange('screenTime', text)}
          mode="outlined"
        />
        <TextInput
          label="🛏️ Dreams"
          value={entry.dreams}
          onChangeText={(text) => handleChange('dreams', text)}
          mode="outlined"
          multiline
        />
        <TextInput
          label="🌅 Mood Upon Waking"
          value={entry.mood}
          onChangeText={(text) => handleChange('mood', text)}
          mode="outlined"
        />
        <TextInput
          label="📝 Additional Notes"
          value={entry.notes}
          onChangeText={(text) => handleChange('notes', text)}
          mode="outlined"
          multiline
        />

        <Button
          label="Save"
          className="w-full py-4 my-4 rounded-3xl"
          labelClassname="text-xl"
          onPress={handleSave}
        />
      </View>
    </View>
  );
};

export default JournalScreen;

