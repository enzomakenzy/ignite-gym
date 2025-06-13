import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <GluestackInput className="bg-colorsTheme-gray-700 h-14 w-full text-mdTheme mb-4 rounded-md border-0">
      <InputField { ...rest } 
      className="text-colorsTheme-white w-full px-4 placeholder:text-colorsTheme-gray-300 rounded-md focus:border focus:border-colorsTheme-green-500" />
    </GluestackInput>
  );
}
