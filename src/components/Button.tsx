import { Button as GluestackButton, ButtonText } from "@/components/ui/button";
import { useState } from "react";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  title: string;
  variant: boolean;
}

export function Button({title, variant, ...rest }: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <GluestackButton 
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={`
        font-heading
        ${variant ? "bg-colorsTheme-green-700" : "bg-transparent"}
        h-14
        w-full
        rounded-md
        hover:bg-colorsTheme-red-500
      `}
      {...rest}
    >
      <ButtonText
        className="
          color-colorsTheme-white
          font-heading
          text-smTheme
        "
      >
        {title}
      </ButtonText>
    </GluestackButton>
  );
}