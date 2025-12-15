import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import ApHeader from "@/components/Header";
import Button from "@/components/buttons/Button";

const JournalScreen: React.FC = () => {
  const [entry, setEntry] = useState({
    bedtime: "",
    fallAsleep: "",
    wakeTime: "",
    sleepQuality: "",
    thoughts: "",
    screenTime: "",
    dreams: "",
    mood: "",
    notes: "",
  });

  const handleChange = (key: keyof typeof entry, value: string) => {
    setEntry((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log("Saved Entry:", entry);
    // TODO: Replace with actual save logic (AsyncStorage, or Firebase)
  };

  return (
    <View className="bg-white h-screen">
      <ApHeader hasBackButton title="Sleep Journal" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-6 py-4 flex flex-col md:flex-row md:flex-wrap md:gap-4">
          {/* Each input becomes full width on mobile, half width on md+ screens */}
          <View className="w-full md:w-1/2">
            <TextInput
              label="🕰️ Bedtime"
              value={entry.bedtime}
              onChangeText={(text) => handleChange("bedtime", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="😴 Time You Fell Asleep"
              value={entry.fallAsleep}
              onChangeText={(text) => handleChange("fallAsleep", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="⏰ Wake-Up Time"
              value={entry.wakeTime}
              onChangeText={(text) => handleChange("wakeTime", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="⭐ Sleep Quality (e.g., 4/5)"
              value={entry.sleepQuality}
              onChangeText={(text) => handleChange("sleepQuality", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="🧠 Thoughts Before Sleep"
              value={entry.thoughts}
              onChangeText={(text) => handleChange("thoughts", text)}
              mode="outlined"
              multiline
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="📱 Screen Time Before Bed"
              value={entry.screenTime}
              onChangeText={(text) => handleChange("screenTime", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="🛏️ Dreams"
              value={entry.dreams}
              onChangeText={(text) => handleChange("dreams", text)}
              mode="outlined"
              multiline
            />
          </View>

          <View className="w-full md:w-1/2">
            <TextInput
              label="🌅 Mood Upon Waking"
              value={entry.mood}
              onChangeText={(text) => handleChange("mood", text)}
              mode="outlined"
            />
          </View>

          <View className="w-full">
            <TextInput
              label="📝 Additional Notes"
              value={entry.notes}
              onChangeText={(text) => handleChange("notes", text)}
              mode="outlined"
              multiline
            />
          </View>

          <View className="w-full mt-4">
            <Button
              label="Save"
              className="w-full py-4 my-4 rounded-3xl bg-primary"
              labelClassname="text-xl"
              onPress={handleSave}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default JournalScreen;
