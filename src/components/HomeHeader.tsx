import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

import { MaterialIcons } from "@expo/vector-icons" 

import UserPhoto from "@assets/userPhotoDefault.png"
import { Image } from "@/components/ui/image";
import { colorsTheme } from "../theme/colors";
import { TouchableOpacity } from "react-native";

export function HomeHeader() {
  return (
    <HStack className="bg-colorsTheme-gray-600 pt-16 pb-5 px-8 items-center flex-row">
      <Image
        source={UserPhoto}
        alt="Imagem de Usuário"
        size="2xl"
        className="mr-4"
      />

      <VStack className="flex-1">
        <Text className="color-colorsTheme-gray-100 text-mdTheme">
          Olá,
        </Text>
        <Heading className="color-colorsTheme-gray-100 my-0 text-mdTheme">
          Enzo
        </Heading>
      </VStack>

      <TouchableOpacity activeOpacity={0.6}>
        <MaterialIcons name="logout" size={26} color={colorsTheme.gray[200]} />
      </TouchableOpacity>
    </HStack>
  )
}