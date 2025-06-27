import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { colorsTheme } from "../theme/colors";

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <HStack className="bg-colorsTheme-gray-500 items-center p-2 pr-4 rounded-md mb-4">
        <Image 
          source={{ uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg" }}
          alt="Imagem do exercício"
          className="w-16 h-16 rounded-md mr-4"
          resizeMode="center"
        />

        <VStack className="flex-1">
          <Heading className="text-lgTheme color-colorsTheme-white">
            Remada unilateral
          </Heading>
          
          <Text className="text-smTheme color-colorsTheme-gray-200 mt-1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <AntDesign name="right" color={colorsTheme.gray[300]} size={18} />
      </HStack>
    </TouchableOpacity>
  )
}