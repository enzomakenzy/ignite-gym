import { Center } from "@/components/ui/center";
import { Spinner } from "@/components/ui/spinner";

export function Loading() {
  return (
    <Center className="flex-1 justify-center color-colors-gray-700">
      <Spinner className="color-colors-green-500" />
    </Center>
  )
}