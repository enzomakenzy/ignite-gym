import { ScrollView } from "react-native";

import { ScreenHeader } from "@components/ScreenHeader";

import { Image } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";


export function Profile() {
  return (
    <VStack className="flex-1">
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center className="mt-6 px-10">
          <Image
            source={{ uri: "https://github.com/enzomakenzy.png" }}
            alt="Imagem de Usuário"
            className="mr-4 size-32 rounded-full border-2 border-colorsTheme-gray-400"
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}