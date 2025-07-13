import { useState } from "react";
import { FlatList } from "react-native";

import { VStack } from "@/components/ui/vstack";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";

import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState<string[]>(["Costas", "Bíceps", "Tríceps", "Ombro"]);
  const [exercises, setExercises] = useState(["Puxada frontal", "Remada curvada", "Remada unilateral", "Levantamento terra", "1", "2", "3", "4"]);
  const [groupSelected, setGroupSelected] = useState("costas");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenExerciseDetails = () => {
    navigation.navigate("exercise");
  }

  return (
    <VStack className="flex-1">
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group 
          name={item} 
          isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()} 
          onPress={() => setGroupSelected(item)} 
          />
        )}
        horizontal
        className="my-10 max-h-12"
        contentContainerStyle={{ paddingHorizontal: 22 }}
        showsHorizontalScrollIndicator={false}
      />

      <VStack className="flex-1 px-8">
        <HStack className="justify-between mb-5 items-center">
          <Heading className="color-colorsTheme-gray-200 text-mdTheme">
            Exercícios
          </Heading>

          <Text className="color-colorsTheme-gray-200 text-smTheme">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({ item }) => ( 
            <ExerciseCard onPress={handleOpenExerciseDetails} /> 
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </VStack>

    </VStack>
  );
}