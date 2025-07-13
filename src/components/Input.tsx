import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <GluestackInput className="bg-colorsTheme-gray-700 h-16 w-full text-mdTheme mb-4 rounded-md border-0">
      <InputField { ...rest } 
      className="text-colorsTheme-white border border-colorsTheme-gray-700 w-full h-full px-4 placeholder:text-colorsTheme-gray-300 rounded-md focus:border-colorsTheme-green-500" />
    </GluestackInput>
  );
}
