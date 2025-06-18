import { useState } from "react";

import { VStack } from "@/components/ui/vstack";

import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { FlatList } from "react-native";

export function Home() {
  const [groups, setGroups] = useState<string[]>(["Costas", "Bíceps", "Tríceps", "Ombro"]);
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack className="flex-1">
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
          name={item} 
          isActive={groupSelected === item} 
          onPress={() => setGroupSelected(item)} 
          />
        )}
        horizontal
        className="my-10 max-h-12"
        contentContainerStyle={{ paddingHorizontal: 22 }}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
}