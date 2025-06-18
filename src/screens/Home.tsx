import { VStack } from "@/components/ui/vstack";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "../components/Group";
import { HStack } from "@/components/ui/hstack";

export function Home() {
  return (
    <VStack className="flex-1">
      <HomeHeader />

      <HStack>
        <Group name="costas" isActive />
        <Group name="ombro" isActive={false} />
      </HStack>
    </VStack>
  );
}