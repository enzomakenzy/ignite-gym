import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  return (
    <VStack className="flex-1">
      <HomeHeader />
    </VStack>
  );
}