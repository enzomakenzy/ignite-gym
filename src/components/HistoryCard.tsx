import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";

export function HistoryCard() {
  return (
    <HStack className="w-full px-5 py-4 mb-3 bg-colorsTheme-gray-600 rounded-md items-center justify-between">
      <VStack className="mr-5">
        <Heading className="color-colorsTheme-white text-mdTheme capitalize">
          Costas
        </Heading>

        <Text className="color-colorsTheme-gray-100 text-lgTheme" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text className="color-colorsTheme-gray-300 text-mdTheme">
        08:56
      </Text>
    </HStack>
  )
}