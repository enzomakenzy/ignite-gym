import { VStack } from "@/components/ui/vstack";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";
import { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { SectionList } from "react-native";
import { Text } from "@/components/ui/text";

interface ExerciseProps {
  title: string;
  data: string[];
}

export function History() {
  const [exercises, setExercises] = useState<ExerciseProps[]>([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral", "Risotto"]
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"]
    }
  ]);

  return (
    <VStack className="flex-1">
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading className="color-colorsTheme-gray-200 text-mdTheme mt-10 mb-3">
            {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center", alignItems: "center" }}
        ListEmptyComponent={() => (
          <Text className="color-colorsTheme-gray-100 text-center">
            Não há exercícios registrados ainda. {"\n"}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        className="px-4"
      />
    </VStack>
  );
}