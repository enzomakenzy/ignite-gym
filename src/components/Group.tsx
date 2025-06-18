import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";

import { PressableProps } from "react-native";

type Props = PressableProps & {
  name: string;
  isActive: boolean;
}

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable 
      className={`mr-3 
        w-28
        h-12 
        bg-colorsTheme-gray-600 
        rounded-md items-center 
        justify-center 
        overflow-hidden 
        active:border-colorsTheme-green-500 
        active:border-2 color-colorsTheme-gray-200 
        
        ${isActive ? "border-colorsTheme-green-500 border-2"  : ""}
      `}
    >
      <Text className={`active:color-colorsTheme-green-500  uppercase text-xsTheme font-heading  ${isActive ? "color-colorsTheme-green-500" : "color-colorsTheme-gray-200"}`}>
        {name}
      </Text>
    </Pressable>
  );
}