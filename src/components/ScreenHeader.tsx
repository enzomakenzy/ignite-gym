import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";

interface Props {
  title: string;
}

export function ScreenHeader({ title }: Props) {
  return(
    <Center className="bg-colorsTheme-gray-600 pb-6 pt-16">
      <Heading className="color-colorsTheme-gray-100 text-xlTheme">
        {title}
      </Heading>
    </Center>
  );
}