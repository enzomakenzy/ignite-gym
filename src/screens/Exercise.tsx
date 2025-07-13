import { Image, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { colorsTheme } from "../theme/colors";
import { sizesTheme } from "../theme/sizes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepititionsSvg from "@assets/repetitions.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <VStack className="flex-1">
        <VStack className="px-8 bg-colorsTheme-gray-600 pt-12">
          <TouchableOpacity onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" color={colorsTheme.green[500]} size={sizesTheme[6]} />
          </TouchableOpacity>

          <HStack className="justify-between mt-4 mb-6 items-center">
            <Heading className="color-colorsTheme-gray-100 text-lgTheme flex-shrink">
              Puxada frontal
            </Heading>

            <HStack className="items-center">
              <BodySvg />
              <Text className="color-colorsTheme-gray-200 ml-1 capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>

      <ScrollView>
        <VStack className="p-8">
          <Image 
            source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg" }}
            alt="Nome do exercício"
            className="w-full h-96 mb-3 rounded-lg"
            resizeMode="cover"
          />

          <Box className="bg-colorsTheme-gray-600 rounded-md pb-4 px-4">
            <HStack className="items-center justify-around mb-6 mt-5">
              <HStack>
                <SeriesSvg />
                <Text className="color-colorsTheme-gray-200 ml-2">
                  3 séries
                </Text>
              </HStack>
              
              <HStack>
                <RepititionsSvg  />
                <Text className="color-colorsTheme-gray-200 ml-2">
                  12 Repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}