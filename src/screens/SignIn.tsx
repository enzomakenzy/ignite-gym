import { SafeAreaView } from "react-native-safe-area-context";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png"
import { Box } from "@/components/ui/box";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView className="flex-1" edges={["bottom", "left", "right"]}>
        <VStack className="flex-1 px-10">
          <Image
            source={BackgroundImg}
            alt="Pessoas treinando"
            resizeMode="cover"
            className="absolute w-screen h-auto"
          />
          <Center className="my-32 items-center">
            <LogoSvg />
            <Text className="color-colorsTheme-gray-100 text-smTheme font-body">
              Treine sua mente e o seu corpo
            </Text>
          </Center>
          <Box className="flex-1 justify-between">
            <Center className="w-full mb-8">
              <Heading className="color-colorsTheme-gray-100 text-xlTheme font-heading mb-6">
                Acesse sua conta
              </Heading>
              <Input placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
              <Input placeholder="Senha" secureTextEntry />
              <Button title="Acessar" />
            </Center>
            <Center className="mb-6">
              <Text className="color-colorsTheme-gray-100 text-smTheme mb-3 font-body">
                Ainda não tem acesso?
              </Text>
              <Button title="Criar conta" variant={true} onPress={handleNewAccount} />
            </Center>
          </Box>
        </VStack>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}