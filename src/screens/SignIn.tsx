import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png"

export function SignIn() {
  return (
    <VStack className="flex-1 bg-colorsTheme-gray-700 px-10">
      <Image 
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="cover"
        className="absolute w-screen h-auto"
      />

      <Center className="my-24 items-center">
        <LogoSvg />

        <Text className="color-colorsTheme-gray-100 text-smTheme">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center className="w-full">
        <Heading className="color-colorsTheme-gray-100 text-xlTheme font-heading">
          Acesse sua conta
        </Heading>

        <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />

        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" variant={false} />
      </Center>

      <Button title="Criar conta" variant={true} />
    </VStack>
  );
}