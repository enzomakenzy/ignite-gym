import { FormControl, FormControlErrorText } from "@/components/ui/form-control";
import { Input as GluestackInput, InputField } from "@/components/ui/input";
import { TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  errorMessage?: string | null;
  isInvalid?: boolean;
}

export function Input({ errorMessage, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} className="mb-2">
      <GluestackInput 
      className="
        bg-colorsTheme-gray-700 
        h-16 
        w-full 
        text-mdTheme 
        mb-2
        rounded-md 
        border 
        border-colorsTheme-gray-700
      ">
        <InputField { ...rest } 
        className={`
          text-colorsTheme-white 
          border 
          border-colorsTheme-gray-700 
          w-full 
          h-full 
          px-4 
          placeholder:text-colorsTheme-gray-300 
          rounded-md 
          focus:border-colorsTheme-green-500
          ${invalid && "border-colorsTheme-red-500"}
          ${invalid && "focus:border-colorsTheme-red-500"}
        `}/>
      </GluestackInput>
      {
        invalid && (
          <FormControlErrorText>
            {errorMessage}
          </FormControlErrorText>
        )
      }
    </FormControl>
  );
}
