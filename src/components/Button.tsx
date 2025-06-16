import { Button as GluestackButton, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  title: string;
  variant?: boolean;
}

export function Button({ title, variant = false, ...rest }: Props) {
  return (
    <GluestackButton 
      className={`
        font-heading
        h-14
        w-full
        rounded-md
        hover:bg-colorsTheme-red-500
        ${variant ? "bg-transparent" : "bg-colorsTheme-green-700"}
        ${variant ? "border-2" : ""}
        ${variant ? "border-colorsTheme-green-700" : ""}
        ${variant ? "active:bg-colorsTheme-gray-500" : "active:bg-colorsTheme-green-500"}
      `}
      {...rest}
    >
      <ButtonText
        className={`
          font-heading
          text-smTheme
          ${variant ? "color-colorsTheme-green-500" : "color-colorsTheme-white"}
          `}
      >
        {title}
      </ButtonText>
    </GluestackButton>
  );
}